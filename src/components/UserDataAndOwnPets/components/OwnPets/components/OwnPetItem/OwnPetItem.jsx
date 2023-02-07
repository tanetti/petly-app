import PropTypes from 'prop-types';
import { useState } from 'react';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import { CircularProgress } from '@mui/material';
import { standartAnimation } from 'constants/animationVariants';
import { useDeleteOwnPetMutation } from 'redux/ownPets/ownPetsApi';
import noPhotoImage from 'images/no-photo.webp';
import {
  PetsItem,
  ImageContainer,
  PetImage,
  PetInfo,
  PetDataItem,
  DeleteIcon,
  DeletePetButton,
  PetDataCaption,
  ImageLoaderContainer,
} from './OwnPetItemStyled';
import { DeletePromptModal } from 'components/DeletePromptModal/DeletePromptModal';

export const OwnPetsItem = ({ petData }) => {
  const { _id, name, birthdate, breed, comments, avatarURL } = petData;
  const [isDeletePromptModalOpened, setIsDeletePromptModalOpened] =
    useState(false);
  const [shouldImageShown, setShouldImageShown] = useState(false);
  const [imageOnError, setImageOnError] = useState(false);
  const [
    deleteOwnPet,
    { isError: isOwnPetDeleteError, isLoading: isOwnPetDeleting },
  ] = useDeleteOwnPetMutation();

  const onDeletePet = () => {
    deleteOwnPet(_id);
  };

  return (
    <PetsItem
      layout
      variants={standartAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ImageContainer>
        <PetImage
          src={imageOnError || avatarURL || noPhotoImage}
          alt={name || 'My pet'}
          shouldShown={shouldImageShown}
          onLoad={() => setShouldImageShown(true)}
          onError={() => setImageOnError(noPhotoImage)}
        />

        <ImageLoaderContainer shouldHide={shouldImageShown}>
          <CircularProgress />
        </ImageLoaderContainer>
      </ImageContainer>

      <PetInfo>
        <DeletePetButton
          type="button"
          title="Delete pet"
          aria-label="Delete pet"
          loading={isOwnPetDeleting}
          onClick={() => setIsDeletePromptModalOpened(true)}
        >
          <AnimatePresence mode="wait">
            {!isOwnPetDeleting ? (
              <motion.div
                key="deleteIcon"
                variants={standartAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <DeleteIcon />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </DeletePetButton>
        <PetDataItem>
          <PetDataCaption>Name:</PetDataCaption> {name}
        </PetDataItem>
        <PetDataItem>
          <PetDataCaption>Date of birth:</PetDataCaption>{' '}
          {dayjs(birthdate).format('DD.MM.YYYY')}
        </PetDataItem>
        <PetDataItem>
          <PetDataCaption>Breed:</PetDataCaption> {breed}
        </PetDataItem>
        {comments ? (
          <PetDataItem>
            <PetDataCaption>Comments:</PetDataCaption> {comments}
          </PetDataItem>
        ) : null}
      </PetInfo>

      <DeletePromptModal
        isOpened={isDeletePromptModalOpened}
        closeModal={() => setIsDeletePromptModalOpened(false)}
        action={onDeletePet}
        isLoading={isOwnPetDeleting}
        isError={isOwnPetDeleteError}
        whoWord={name}
        fromWord="own collection"
      />
    </PetsItem>
  );
};

OwnPetsItem.propTypes = {
  petData: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string,
    avatarURL: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
