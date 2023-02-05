import PropTypes from 'prop-types';
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
  const { data: userFavorite } = useGetFavoriteQuery();
  const [addFavorite, { isLoading: isFavoriteAdding }] =
    useAddFavoriteMutation();
  const [deleteFavorite, { isLoading: isFavoriteDeletting }] =
    useDeleteFavoriteMutation();

  const isThisNoticeInFavorite = userFavorite?.includes(noticeId);

  const onFavoriteButtonClick = () => {
    if (isThisNoticeInFavorite) {
      deleteFavorite(noticeId);
    } else {
      addFavorite(noticeId);
    }
  };

  return (
    <StyledButton loading={isFavoriteAdding} onClick={onFavoriteButtonClick}>
      <AnimatePresence mode="wait">
        {!isThisNoticeInFavorite &&
        !isFavoriteAdding &&
        !isFavoriteDeletting ? (
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

        {isThisNoticeInFavorite && !isFavoriteAdding && !isFavoriteDeletting ? (
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
