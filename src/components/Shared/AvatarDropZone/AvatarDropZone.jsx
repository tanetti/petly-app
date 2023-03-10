import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AnimatePresence } from 'framer-motion';
import { makeToast } from 'utilities/makeToast';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
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

export const AvatarDropZone = ({
  currentAvatarUrl,
  setNewAvatarFile,
  isReseted,
  variant,
  isDisabled,
}) => {
  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState(null);
  const [shouldImageShown, setShouldImageShown] = useState(false);
  const [isAvatarContainerHovered, setIsAvatarContainerHovered] =
    useState(false);

  useEffect(() => {
    if (!isReseted) return;

    setSelectedAvatarUrl(null);
  }, [isReseted]);

  const {
    getRootProps,
    getInputProps,
    isFileDialogActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 1,
    multiple: false,
    maxSize: 5000000,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    onDropAccepted: files => {
      setIsAvatarContainerHovered(false);
      setSelectedAvatarUrl(URL.createObjectURL(files[0]));
      setNewAvatarFile(files[0]);
    },
    onDropRejected: fileRejections =>
      makeToast(fileRejections[0].errors[0]?.code),
    onError: error => makeToast(error),
  });

  const presentImage = selectedAvatarUrl || currentAvatarUrl;

  return (
    <DropZoneContainer variant={variant}>
      <InnerContainer>
        {!!presentImage ? (
          <CurrentImage
            key="userImage"
            variants={STANDART_ANIMATION_VARIANT}
            initial="initial"
            animate="animate"
            exit="exit"
            src={presentImage}
            alt="Avatar"
            shouldShown={shouldImageShown}
            onLoad={() => setShouldImageShown(true)}
            onError={() => setShouldImageShown(false)}
          />
        ) : null}
        <ControlsContainer
          {...getRootProps()}
          variant={variant}
          title="Choose your photo"
          aria-label="Choose your photo"
          tabIndex={0}
          role="button"
          isDisabled={isDisabled}
          onMouseEnter={() => setIsAvatarContainerHovered(true)}
          onMouseOut={() => setIsAvatarContainerHovered(false)}
        >
          <input id="avatar" {...getInputProps()} />
          <AnimatePresence mode="wait">
            {(!presentImage || isAvatarContainerHovered) &&
            !(isFileDialogActive || isDragAccept || isDragReject) ? (
              <IconContainer
                variant={variant}
                key="AddImageIcon"
                variants={STANDART_ANIMATION_VARIANT}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AddImageIcon />
              </IconContainer>
            ) : null}
            {(isFileDialogActive || isDragAccept) && !isDragReject ? (
              <IconContainer
                variant={variant}
                key="AllowedImageIcon"
                variants={STANDART_ANIMATION_VARIANT}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AllowedImageIcon />
              </IconContainer>
            ) : null}
            {isDragReject ? (
              <IconContainer
                variant={variant}
                key="NotAllowedImageIcon"
                variants={STANDART_ANIMATION_VARIANT}
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
  isReseted: PropTypes.bool,
  variant: PropTypes.string,
  isDisabled: PropTypes.bool,
};
