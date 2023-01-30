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
  DelPet,
  WrapperPetName,
  WrapperInfo,
  ButtonDel,
} from './PetsDataStyled';
import noPhoto from 'images/no-photo.jpg';

export const PetsData = () => {
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
        <ul>
          <DataPetItem>
            <ImgPet src={noPhoto} alt="no-photo" />

            <WrapperInfo>
              <WrapperPetName>
                <DataPetName>Name: Jake</DataPetName>
                <ButtonDel type="button" onClick={deletePet}>
                  <DelPet />
                </ButtonDel>
              </WrapperPetName>

              <DataPet>Date of birth: 22.04.2018</DataPet>
              <DataPet>Breed: Persian cat</DataPet>
              <DataPet>
                Comments: Lorem ipsum dolor sit amet, consecteturLorem ipsum
                dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consectetur{' '}
              </DataPet>
            </WrapperInfo>
          </DataPetItem>

          <DataPetItem>
            <ImgPet src={noPhoto} alt="no-photo" />

            <WrapperInfo>
              <WrapperPetName>
                <DataPetName>Name: Jake</DataPetName>
                <ButtonDel type="button" onClick={deletePet}>
                  <DelPet />
                </ButtonDel>
              </WrapperPetName>

              <DataPet>Date of birth: 22.04.2018</DataPet>
              <DataPet>Breed: Persian cat</DataPet>
              <DataPet>
                Comments: Lorem ipsum dolor sit amet, consecteturLorem ipsum
                dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Facilis aliquam
                nobis sint rem dolorem delectus iste maiores corporis
                praesentium exercitationem quae ipsa quos aut architecto
                doloribus est, quidem vero rerum?
              </DataPet>
            </WrapperInfo>
          </DataPetItem>
        </ul>
      </DataPets>
    </PetsWrapper>
  );
};
