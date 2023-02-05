import PropTypes from 'prop-types';
import { useAuth } from 'hooks';
import {
  ButtonContainer,
  DeleteIcon,
  NoticeButton,
} from './BottomButtonsStyled';

export const BottomButtons = ({ noticeId, ownerId }) => {
  const { userId } = useAuth();

  return (
    <ButtonContainer>
      <NoticeButton>Learn more</NoticeButton>
      {userId === ownerId ? (
        <NoticeButton
          loadingPosition="end"
          endIcon={<DeleteIcon />}
          loading={false}
        >
          Delete
        </NoticeButton>
      ) : null}
    </ButtonContainer>
  );
};

BottomButtons.propTypes = {
  noticeId: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
};
