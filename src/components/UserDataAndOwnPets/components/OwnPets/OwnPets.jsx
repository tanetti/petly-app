import { useGetOwnPetsQuery } from 'redux/ownPets/ownPetsApi';
import { AnimatePresence } from 'framer-motion';
import { AddPetButton, ErrorLayout, LoaderLayout } from 'components/Shared';
import { NoOwnPetsLayout, OwnPetsItem } from './components';
import { ButtonContainer, OwnPetsList } from './OwnPetsStyled';
import { useState } from 'react';
import { AddOwnPetModal } from 'components/AddOwnPetModal/AddOwnPetModal';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { useAuth } from 'hooks';

export const OwnPets = () => {
  const [isAddPetModalOpened, setIsAddPetModalOpened] = useState(false);
  const { isUserLoggedIn } = useAuth();
  const { data, error, isLoading, isPending } = useGetOwnPetsQuery(null, {
    skip: !isUserLoggedIn,
  });

  return (
    <>
      <ButtonContainer>
        <AddPetButton onButtonClick={() => setIsAddPetModalOpened(true)} />
      </ButtonContainer>

      <AnimatePresence mode="wait">
        {!isLoading && !isPending && error ? <ErrorLayout /> : null}

        {!data && isLoading ? <LoaderLayout requestEntityName="pets" /> : null}

        {data && !data.length ? <NoOwnPetsLayout /> : null}

        {data && data.length && !error ? (
          <OwnPetsList
            key="ownPetsList"
            variants={STANDART_ANIMATION_VARIANT}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <AnimatePresence>
              {data.map(petData => (
                <OwnPetsItem key={petData._id} petData={petData} />
              ))}
            </AnimatePresence>
          </OwnPetsList>
        ) : null}
      </AnimatePresence>

      <AddOwnPetModal
        isOpened={isAddPetModalOpened}
        closeModal={() => setIsAddPetModalOpened(false)}
      />
    </>
  );
};
