import PropTypes from 'prop-types';
import noPhotoImage from 'images/no-photo.webp';
import {
  FriendsItem,
  ItemTitle,
  InfoBox,
  ImageBox,
  FriendImage,
  ContactList,
  ContactItem,
  ContactCaption,
  ContactLink,
  ContactNoInfo,
} from './OurFriendsItemStyled';
import { WorkTimeLayout } from './components';
import { standartAnimation } from 'constants/animationVariants';

export const OurFriendsItem = ({ friendData }) => {
  const { title, url, addressUrl, imageUrl, address, phone, email, workDays } =
    friendData;

  return (
    <FriendsItem
      key={title}
      variants={standartAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <ItemTitle href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </ItemTitle>

      <InfoBox>
        <ImageBox>
          <FriendImage
            title={`${title} web-page`}
            src={imageUrl || noPhotoImage}
            alt="Friend logotype"
            width="110"
          />
        </ImageBox>

        <ContactList>
          <ContactItem>
            <ContactCaption>Time:</ContactCaption>
            {!workDays || !workDays.length ? (
              <ContactNoInfo>N/A</ContactNoInfo>
            ) : (
              <WorkTimeLayout workDays={workDays} />
            )}
          </ContactItem>

          <ContactItem>
            <ContactCaption>Address:</ContactCaption>
            {addressUrl && address ? (
              <ContactLink
                href={addressUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                {address}
              </ContactLink>
            ) : null}

            {!addressUrl && address ? address : null}

            {!addressUrl && !address ? (
              <ContactNoInfo>N/A</ContactNoInfo>
            ) : null}
          </ContactItem>

          <ContactItem>
            <ContactCaption>Email:</ContactCaption>
            {email ? (
              <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
            ) : (
              <ContactNoInfo>N/A</ContactNoInfo>
            )}
          </ContactItem>

          <ContactItem>
            <ContactCaption>Phone:</ContactCaption>
            {phone ? (
              <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
            ) : (
              <ContactNoInfo>N/A</ContactNoInfo>
            )}
          </ContactItem>
        </ContactList>
      </InfoBox>
    </FriendsItem>
  );
};

OurFriendsItem.propTypes = {
  friendData: PropTypes.exact({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    addressUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    workDays: PropTypes.array,
  }).isRequired,
};
