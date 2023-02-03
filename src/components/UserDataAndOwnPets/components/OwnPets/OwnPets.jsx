import { AnimatePresence } from 'framer-motion';
import { NoOwnPetsLayout, OwnPetsItem } from './components';
import { AddPetButton, AddPetIcon, OwnPetsList } from './OwnPetsStyled';

const petsItem = [
  // {
  //   _id: '234567890fgh',
  //   name: 'Jake',
  //   bithday: '22.04.2018',
  //   breed: 'Persian cat',
  //   comments:
  //     'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  // },
  // {
  //   _id: '2345656hfghss',
  //   name: 'Pikachy',
  //   bithday: '22.04.2022',
  //   breed: 'cat',
  //   comments:
  //     'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  // },
];

export const OwnPets = () => {
  const addPet = () => {
    console.log('add');
  };

  return (
    <>
      <AddPetButton title="Add pet" type="button" onClick={addPet}>
        Add pet <AddPetIcon />
      </AddPetButton>

      {petsItem && !petsItem.length ? <NoOwnPetsLayout /> : null}

      {petsItem && petsItem.length ? (
        <AnimatePresence>
          <OwnPetsList>
            {petsItem.map(petData => (
              <OwnPetsItem key={petData._id} petData={petData} />
            ))}
          </OwnPetsList>
        </AnimatePresence>
      ) : null}
    </>
  );
};
