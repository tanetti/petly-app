import PropTypes from 'prop-types';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import noPhotoImage from 'images/no-photo.webp';
import {
  AvatarContainer,
  Avatar,
  Loader,
  CategoryBadge,
} from './NoticeAvatarStyled';
import { AnimatePresence } from 'framer-motion';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';

export const NoticeAvatar = ({ avatarURL, name, categoryName, variant }) => {
  const [shouldImageShown, setShouldImageShown] = useState(false);
  const [backupImage, setBackupImage] = useState(null);

  return (
    <AvatarContainer variant={variant}>
      <Avatar
        variant={variant}
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

      <CategoryBadge>
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </CategoryBadge>
    </AvatarContainer>
  );
};

NoticeAvatar.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
