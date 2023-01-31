import { useState } from 'react';
import {
  PetsWrapper,
  DataPets,
  TitlePet,
  AddPetBtn,
  AddPet,
  WrapperPetTitle,
  ImgPet,
  DataPetItem,
  DataPet,
  DataPetName,
  NotPetsImg,
  DelPet,
  NotPetsWrapper,
  WrapperPetName,
  WrapperInfo,
  ButtonDel,
  NotPets,
} from './PetsDataStyled';
import noPhoto from 'images/no-photo.jpg';
import sad from 'images/sad.png';
import { uid } from 'uid';

const petsItem = [
  // {
  //   // _id: '234567890fgh',
  //   name: 'Jake',
  //   bithday: '22.04.2018',
  //   breed: 'Persian cat',
  //   comments:
  //     'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  // },
  // {
  //   // _id: '2345656hfghss',
  //   name: 'Pikachy',
  //   bithday: '22.04.2022',
  //   breed: 'cat',
  //   comments:
  //     'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  // },
];

export const PetsData = () => {
  // const [pets, setPets] = useState([]);

  const addPet = () => {
    console.log('add');
  };

  const deletePet = () => {
    console.log('del');
  };

  return (
    <PetsWrapper>
      <WrapperPetTitle>
        <TitlePet>My pets:</TitlePet>
        <AddPetBtn type="button" onClick={addPet}>
          Add pet <AddPet />
        </AddPetBtn>
      </WrapperPetTitle>

      <DataPets>
        {petsItem.length === 0 ? (
          <NotPetsWrapper>
            <NotPets>You don't have any pets yet</NotPets>
            <NotPetsImg src={sad} alt="sad" />
          </NotPetsWrapper>
        ) : (
          <ul>
            {petsItem.map(({ name, bithday, breed, comments }) => (
              <DataPetItem key={uid()}>
                <ImgPet src={noPhoto} alt="no-photo" />
                <WrapperInfo>
                  <WrapperPetName>
                    <DataPetName>Name: {name}</DataPetName>
                    <ButtonDel type="button" onClick={deletePet}>
                      <DelPet />
                    </ButtonDel>
                  </WrapperPetName>
                  <DataPet>Date of birth: {bithday}</DataPet>
                  <DataPet>Breed: {breed}</DataPet>
                  <DataPet>Comments: {comments}</DataPet>{' '}
                </WrapperInfo>
              </DataPetItem>
            ))}
          </ul>
        )}
      </DataPets>
    </PetsWrapper>
  );
};
