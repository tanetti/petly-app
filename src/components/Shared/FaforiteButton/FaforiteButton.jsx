import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { noticesApi } from 'redux/notices/noticesApi';
import { useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoriteQuery,
} from 'redux/favorite/favoriteApi';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import {
  DefaultBackgroundIcon,
  DefaultFrontIcon,
  IconSet,
  InFavoriteIcon,
  ModalButton,
  RoundButton,
  TextContainer,
} from './FaforiteButtonStyled';
import { RestrictedActionModal } from 'components/RestrictedActionModal/RestrictedActionModal';

export const FavoriteButton = ({ noticeId, variant }) => {
  const [isRestrictedActionModalOpened, setIsRestrictedActionModalOpened] =
    useState(false);
  const [isActionInProgress, setIsActionInProgress] = useState(false);
  const { isUserLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { data: userFavorite, isFetching: isFavoriteFetching } =
    useGetFavoriteQuery(null, {
      skip: !isUserLoggedIn,
    });

  const [
    addFavorite,
    { isSuccess: isFavoriteAddSuccess, isLoading: isFavoriteAdding },
  ] = useAddFavoriteMutation();

  const [
    deleteFavorite,
    { isSuccess: isFavoriteDeleteSuccess, isLoading: isFavoriteDeletting },
  ] = useDeleteFavoriteMutation();

  useEffect(() => {
    if (
      !isActionInProgress ||
      isFavoriteFetching ||
      isFavoriteAdding ||
      isFavoriteDeletting
    )
      return;

    setIsActionInProgress(false);

    if (
      (!isFavoriteAddSuccess && !isFavoriteDeleteSuccess) ||
      categoryName !== 'favorite'
    )
      return;

    dispatch(noticesApi.util.invalidateTags(['Notices']));
  }, [
    categoryName,
    dispatch,
    isActionInProgress,
    isFavoriteAddSuccess,
    isFavoriteAdding,
    isFavoriteDeleteSuccess,
    isFavoriteDeletting,
    isFavoriteFetching,
  ]);

  const isThisNoticeInFavorite = userFavorite?.includes(noticeId);

  const onFavoriteButtonClick = () => {
    if (!isUserLoggedIn) return setIsRestrictedActionModalOpened(true);

    if (isThisNoticeInFavorite) {
      setIsActionInProgress(true);
      deleteFavorite(noticeId);
    } else {
      setIsActionInProgress(true);
      addFavorite(noticeId);
    }
  };

  return (
    <>
      {variant === 'modal' ? (
        <ModalButton
          title={
            isThisNoticeInFavorite ? 'Remove from favorite' : 'Add to favorite'
          }
          aria-label={
            isThisNoticeInFavorite ? 'Remove from favorite' : 'Add to favorite'
          }
          loading={isActionInProgress}
          onClick={onFavoriteButtonClick}
        >
          <AnimatePresence mode="wait">
            {isThisNoticeInFavorite ? (
              <TextContainer
                key="remove"
                variants={STANDART_ANIMATION_VARIANT}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Remove from
                <DefaultFrontIcon variant={variant} />
              </TextContainer>
            ) : (
              <TextContainer
                key="add"
                variants={STANDART_ANIMATION_VARIANT}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Add to
                <InFavoriteIcon variant={variant} />
              </TextContainer>
            )}
          </AnimatePresence>
        </ModalButton>
      ) : (
        <RoundButton
          title={
            isThisNoticeInFavorite ? 'Remove from favorite' : 'Add to favorite'
          }
          aria-label={
            isThisNoticeInFavorite ? 'Remove from favorite' : 'Add to favorite'
          }
          loading={isActionInProgress}
          onClick={onFavoriteButtonClick}
        >
          <AnimatePresence mode="wait">
            {!isThisNoticeInFavorite && !isActionInProgress ? (
              <IconSet
                key="default"
                variants={STANDART_ANIMATION_VARIANT}
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
                variants={STANDART_ANIMATION_VARIANT}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <InFavoriteIcon />
              </IconSet>
            ) : null}
          </AnimatePresence>
        </RoundButton>
      )}

      <RestrictedActionModal
        isOpened={isRestrictedActionModalOpened}
        closeModal={() => setIsRestrictedActionModalOpened(false)}
      />
    </>
  );
};

FavoriteButton.propTypes = {
  noticeId: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
