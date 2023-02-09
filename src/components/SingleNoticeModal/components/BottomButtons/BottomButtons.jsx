import { PropTypes } from 'prop-types';
import { useAuth } from 'hooks';
import { FavoriteButton } from 'components/Shared';
import { ButtonsContainer, ContactLink } from './BottomButtonsStyled';

export const BottomButtons = ({ noticeId, owner, title, petName }) => {
  const { _id: ownerId, phone, email } = owner;

  const { userId } = useAuth();

  const contactLinkHref = phone
    ? `tel:${phone}`
    : `mailto:${email}?subject=Petly notice - ${title} (${petName})`;

  return (
    <ButtonsContainer>
      {userId === ownerId ? null : (
        <ContactLink href={contactLinkHref}>Contact</ContactLink>
      )}

      <FavoriteButton noticeId={noticeId} variant="modal" />
    </ButtonsContainer>
  );
};

BottomButtons.propTypes = {
  noticeId: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  petName: PropTypes.string.isRequired,
};
