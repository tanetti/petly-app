import { useState, useEffect } from 'react';
import { CommonModal } from 'components/Shared';
import {
    Item,
    Wrapper,
    Img,
    Cover,
    Label,
    FavBtn,
  LogoDel,
  LogoAdd,
  BoxInfo,
  Title,
  PetInfo,
  ItemInfo,
  NameInfo,
  ValueInfo,
  BtnModalMore,
} from './NoticeCategoryItem.styled';
import numWords from 'num-words';
export const NoticeCategoryItem = ({ notice }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFavorite, setIsFavorite] =useState(false);

  const { _id, category, petsAvatarURL, title, breed, birthdate, favorite,location, price } = notice;
  useEffect(() => {
    if (favorite===true) {
      setIsFavorite(true);
    }
  }, [favorite]);
  function getAge() {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    const ageWords = numWords(age);
   
    return ageWords;
  }

  
  
  return (
      <Item>    
          
              <Img src={petsAvatarURL} alt={title} />
          <Wrapper>
              <Cover><Label>{category}</Label></Cover>
        <FavBtn type='button' onClick={() => { setIsFavorite(!isFavorite) }}>
          {isFavorite? <LogoDel /> : <LogoAdd />}
        </FavBtn>
          </Wrapper>
      <BoxInfo>
        <Title>{title}</Title>
        <PetInfo>
          <ItemInfo>
            <NameInfo>Breed:</NameInfo>
            <ValueInfo>{breed}</ValueInfo>
          </ItemInfo>
          <ItemInfo>
            <NameInfo>Place:</NameInfo>
            <ValueInfo>{location}</ValueInfo>
          </ItemInfo>
          <ItemInfo>
            <NameInfo>Age:</NameInfo>
            <ValueInfo>
              {getAge()} {getAge() === 'one' ? 'year' : 'years'}
            </ValueInfo>
          </ItemInfo>
          <ItemInfo>
            <NameInfo>Price:</NameInfo>
            <ValueInfo>{price}</ValueInfo>
          </ItemInfo>
        </PetInfo>
        <BtnModalMore type="button" onClick={() => setIsModalOpened(true)}>
          Learn more
        </BtnModalMore>
      </BoxInfo>

      <CommonModal
        title="Common modal"
        isOpened={isModalOpened}
        isActionsDisabled={false}
        closeModal={() => setIsModalOpened(false)}
      >
        <p>{_id}</p>
        <img src={petsAvatarURL} alt='Pet' />
        <p>{title}</p>
        <p>{birthdate}</p>
        <p>{breed}</p>
        <p>{location}</p>
        <p>{price}</p>
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
        <p>MODAL</p>
      </CommonModal>
    </Item>
  );
};
