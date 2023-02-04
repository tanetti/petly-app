import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import { standartAnimation } from 'constants/animationVariants';
import noPhotoImage from 'images/no-photo.webp';
import {
  PetsItem,
  PetImage,
  PetInfo,
  PetDataItem,
  DeleteIcon,
  DeletePetButton,
} from './OwnPetItemStyled';
import { useDeleteOwnPetMutation } from 'redux/ownPets/ownPetsApi';

export const OwnPetsItem = ({ petData }) => {
  const { _id, name, birthdate, breed, comments, avatarURL } = petData;
  const [deleteOwnPet, { isLoading: isOwnPetDeleting }] =
    useDeleteOwnPetMutation();

  return (
    <PetsItem
      layout
      variants={standartAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PetImage src={avatarURL || noPhotoImage} alt={name || 'My pet'} />
      <PetInfo>
        <DeletePetButton
          type="button"
          title="Delete pet"
          aria-label="Delete pet"
          loading={isOwnPetDeleting}
          onClick={() => deleteOwnPet(_id)}
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
        <PetDataItem>Name: {name}</PetDataItem>
        <PetDataItem>
          Date of birth: {dayjs(birthdate).format('DD.MM.YYYY')}
        </PetDataItem>
        <PetDataItem>Breed: {breed}</PetDataItem>
        {comments ? <PetDataItem>Comments: {comments}</PetDataItem> : null}
      </PetInfo>
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
