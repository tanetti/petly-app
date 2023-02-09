import { PropTypes } from 'prop-types';
// import { useAuth } from 'hooks';
import { FavoriteButton } from 'components/Shared';
import { ButtonsContainer } from './BottomButtonsStyled';

export const BottomButtons = ({ noticeId, owner, petName }) => {
  //   const { userId, isUserLoggedIn } = useAuth();

  return (
    <ButtonsContainer>
      <FavoriteButton noticeId={noticeId} variant="modal" />
    </ButtonsContainer>
  );
};

BottomButtons.propTypes = {
  noticeId: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  petName: PropTypes.string.isRequired,
};
