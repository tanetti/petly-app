import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AnimatePresence } from 'framer-motion';
import { makeToast } from 'utilities/makeToast';
import { convertImageToBase64Url } from 'utilities/convertImageToBase64Url';
import { standartAnimation } from 'constants/animationVariants';
import {
  AddImageIcon,
  AllowedImageIcon,
  InnerContainer,
  ControlsContainer,
  CurrentImage,
  DropZoneContainer,
  IconContainer,
  NotAllowedImageIcon,
} from './AvatarDropZoneStyled';

export const AvatarDropZone = ({ currentAvatarUrl, setNewAvatarFile }) => {
  const [base64AvatarUrl, setBase64AvatarUrl] = useState(null);
  const [isAvatarContainerHovered, setIsAvatarContainerHovered] =
    useState(false);

  const { getRootProps, isFileDialogActive, isDragAccept, isDragReject } =
    useDropzone({
      maxFiles: 1,
      multiple: false,
      maxSize: 5000000,
      accept: {
        'image/jpeg': ['.jpeg', '.jpg'],
        'image/png': ['.png'],
        'image/webp': ['.webp'],
      },
      onDropAccepted: files => {
        convertImageToBase64Url(files[0], setBase64AvatarUrl);
        setNewAvatarFile(files[0]);
      },
      onDropRejected: fileRejections =>
        makeToast(fileRejections[0].errors[0]?.code),
      onError: error => makeToast(error),
    });

  const presentImage = currentAvatarUrl || base64AvatarUrl;

  return (
    <DropZoneContainer>
      <InnerContainer>
        <AnimatePresence>
          {!!presentImage ? (
            <CurrentImage
              key="userImage"
              variants={standartAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              src={presentImage}
              alt="Avatar"
            />
          ) : null}
        </AnimatePresence>
        <ControlsContainer
          {...getRootProps()}
          title="Choose your photo"
          aria-label="Choose your photo"
          tabIndex={1}
          role="button"
          onMouseEnter={() => setIsAvatarContainerHovered(true)}
          onMouseOut={() => setIsAvatarContainerHovered(false)}
        >
          <AnimatePresence mode="wait">
            {(!presentImage || isAvatarContainerHovered) &&
            !(isFileDialogActive || isDragAccept || isDragReject) ? (
              <IconContainer
                key="AddImageIcon"
                variants={standartAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AddImageIcon />
              </IconContainer>
            ) : null}
            {(isFileDialogActive || isDragAccept) && !isDragReject ? (
              <IconContainer
                key="AllowedImageIcon"
                variants={standartAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AllowedImageIcon />
              </IconContainer>
            ) : null}
            {isDragReject ? (
              <IconContainer
                key="NotAllowedImageIcon"
                variants={standartAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <NotAllowedImageIcon />
              </IconContainer>
            ) : null}
          </AnimatePresence>
        </ControlsContainer>
      </InnerContainer>
    </DropZoneContainer>
  );
};

AvatarDropZone.propTypes = {
  currentAvatarUrl: PropTypes.string,
  setNewAvatarFile: PropTypes.func.isRequired,
};
