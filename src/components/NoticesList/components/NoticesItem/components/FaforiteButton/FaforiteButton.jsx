import PropTypes from 'prop-types';
import { useAuth } from 'hooks';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoriteQuery,
} from 'redux/favorite/favoriteApi';
import { standartAnimation } from 'constants/animationVariants';
import {
  DefaultBackgroundIcon,
  DefaultFrontIcon,
  IconSet,
  InFavoriteIcon,
  StyledButton,
} from './FaforiteButtonStyled';

export const FavoriteButton = ({ noticeId }) => {
  const [isActionInProgress, setIsActionInProgress] = useState(false);
  const { isUserLoggedIn } = useAuth();
  const { data: userFavorite, isFetching: isFavoriteFetching } =
    useGetFavoriteQuery(null, {
      skip: !isUserLoggedIn,
    });

  const [addFavorite, { isLoading: isFavoriteAdding }] =
    useAddFavoriteMutation();
  const [deleteFavorite, { isLoading: isFavoriteDeletting }] =
    useDeleteFavoriteMutation();

  useEffect(() => {
    if (
      !isActionInProgress ||
      isFavoriteFetching ||
      isFavoriteAdding ||
      isFavoriteDeletting
    )
      return;

    setIsActionInProgress(false);
  }, [
    isActionInProgress,
    isFavoriteAdding,
    isFavoriteDeletting,
    isFavoriteFetching,
  ]);

  const isThisNoticeInFavorite = userFavorite?.includes(noticeId);

  const onFavoriteButtonClick = () => {
    if (isThisNoticeInFavorite) {
      setIsActionInProgress(true);
      deleteFavorite(noticeId);
    } else {
      setIsActionInProgress(true);
      addFavorite(noticeId);
    }
  };

  return (
    <StyledButton loading={isActionInProgress} onClick={onFavoriteButtonClick}>
      <AnimatePresence mode="wait">
        {!isThisNoticeInFavorite && !isActionInProgress ? (
          <IconSet
            key="default"
            variants={standartAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <DefaultBackgroundIcon />
            <DefaultFrontIcon />
          </IconSet>
        ) : null}

        {isThisNoticeInFavorite && !isActionInProgress ? (
          <IconSet
            key="favorite"
            variants={standartAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <InFavoriteIcon />
          </IconSet>
        ) : null}
      </AnimatePresence>
    </StyledButton>
  );
};

FavoriteButton.propTypes = {
  noticeId: PropTypes.string.isRequired,
};
