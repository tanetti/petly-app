import PropTypes from 'prop-types';
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

export const OwnPetsItem = ({ petData }) => {
  const { name, bithday, breed, comments } = petData;

  return (
    <PetsItem
      layout
      variants={standartAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PetImage src={noPhotoImage} alt={name || 'My pet'} />
      <PetInfo>
        <DeletePetButton
          type="button"
          title="Delete pet"
          aria-label="Delete pet"
          loading={null}
          onClick={null}
        >
          <AnimatePresence mode="wait">
            {'NOT_LOADING' ? (
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
        <PetDataItem>Date of birth: {bithday}</PetDataItem>
        <PetDataItem>Breed: {breed}</PetDataItem>
        <PetDataItem>Comments: {comments}</PetDataItem>{' '}
      </PetInfo>
    </PetsItem>
  );
};

OwnPetsItem.propTypes = {
  petData: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bithday: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  }).isRequired,
};
