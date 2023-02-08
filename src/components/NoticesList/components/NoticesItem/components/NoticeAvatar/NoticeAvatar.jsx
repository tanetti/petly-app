import PropTypes from 'prop-types';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import noPhotoImage from 'images/no-photo.webp';
import { AvatarContainer, Avatar, Loader } from './NoticeAvatarStyled';
import { AnimatePresence } from 'framer-motion';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';

export const NoticeAvatar = ({ avatarURL, name }) => {
  const [shouldImageShown, setShouldImageShown] = useState(false);
  const [backupImage, setBackupImage] = useState(null);

  return (
    <AvatarContainer>
      <Avatar
        src={backupImage || avatarURL}
        alt={name ? name : 'Pet avatar'}
        loading="lazy"
        shouldShown={shouldImageShown}
        onLoad={() => setShouldImageShown(true)}
        onError={() => setBackupImage(noPhotoImage)}
      />
      <AnimatePresence>
        {!shouldImageShown ? (
          <Loader
            key="loader"
            variants={STANDART_ANIMATION_VARIANT}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CircularProgress />
          </Loader>
        ) : null}
      </AnimatePresence>
    </AvatarContainer>
  );
};

NoticeAvatar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
