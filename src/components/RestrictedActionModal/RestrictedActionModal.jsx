import PropTypes from 'prop-types';
import { CommonModal } from 'components/Shared';
import {
  UserIcon,
  ModalButtonContainer,
  ModalOutlinedButton,
  PromptMessage,
  LinkRow,
  AuthLink,
} from './RestrictedActionModalStyled';

export const RestrictedActionModal = ({ isOpened, closeModal }) => (
  <CommonModal title="Wooops!" isOpened={isOpened} closeModal={closeModal}>
    <UserIcon />

    <PromptMessage>
      It seems, you are not logged in.
      <LinkRow>
        Please
        <br />
        <AuthLink to="/login">login</AuthLink>
        &nbsp;or&nbsp;
        <AuthLink to="/register">register</AuthLink>
      </LinkRow>
    </PromptMessage>

    <ModalButtonContainer>
      <ModalOutlinedButton title="Cancel" type="button" onClick={closeModal}>
        Cancel
      </ModalOutlinedButton>
    </ModalButtonContainer>
  </CommonModal>
);

RestrictedActionModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
