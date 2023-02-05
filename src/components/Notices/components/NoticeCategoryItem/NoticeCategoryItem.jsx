import { useState, useEffect } from 'react';
import { CommonModal } from 'components/Shared';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import {
  Item,
  BoxImg,
    Wrapper,
    Img,
    Cover,
    
  FavBtn,
    BoxTitle,
  LogoDel,
  LogoAdd,
  BoxInfo,
  Title,
  PetInfo,
  
  NameInfo,
  ValueInfo,
  BoxBtn,
  CardBtn,
  DelIcon
} from './NoticeCategoryItem.styled';
import numWords from 'num-words';
import { deleteNotice } from 'redux/notices/noticesOperations';
export const NoticeCategoryItem = ({ notice }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFavorite, setIsFavorite] =useState(false);
  const dispatch = useDispatch();
const { isUserLoggedIn, /*user*/ } = useAuth();
  // const { userId } = user;
  // console.log(user);
  
  const userId = "63d6a53112e1915ac93d1913";
  const { _id, category, petsAvatarURL, title, breed, birthdate, comments, favorite,location, price, sex, owner } = notice;
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
      <BoxImg>
        <Img src={petsAvatarURL} alt={title} />
          <Wrapper>
              <Cover>{category}</Cover>
          <FavBtn type='button' onClick={() => { setIsFavorite(!isFavorite) } }>
          {isFavorite? <LogoDel /> : <LogoAdd />}
        </FavBtn>
        </Wrapper>
      </BoxImg>
      <BoxInfo>
        <BoxTitle>
          <Title>{title}</Title>
        </BoxTitle>        
        <PetInfo>
            <NameInfo>Breed:</NameInfo>
            <ValueInfo>{breed}</ValueInfo>
          
            <NameInfo>Place:</NameInfo>
            <ValueInfo>{location}</ValueInfo>
          
            <NameInfo>Age:</NameInfo>
            <ValueInfo>
              {getAge()} {getAge() === 'one' ? 'year' : 'years'}
            </ValueInfo>
          
          {price!==0 && <NameInfo>Price:</NameInfo>}
          {price!==0 && <ValueInfo>{price}</ValueInfo>}
        </PetInfo>
      </BoxInfo>
      <BoxBtn>
        
        <CardBtn type="button" onClick={() => setIsModalOpened(true)}>
          Learn more
        </CardBtn>
        {isUserLoggedIn && userId === owner._id && <CardBtn type="button" onClick={() => dispatch(deleteNotice(_id))}>
          Delete <DelIcon/>
        </CardBtn>}
        
      </BoxBtn>
      
      

      <CommonModal
        title="Common modal"
        isOpened={isModalOpened}
        isActionsDisabled={false}
        closeModal={() => setIsModalOpened(false)}
      >
        <p>{ category}</p>
        <img src={petsAvatarURL} alt='Pet' />
        <p>{title}</p>
        <p>{birthdate}</p>
        <p>{breed}</p>
        <p>{location}</p>
        <p>{sex}</p>
        <p>{owner}</p>
        <p>{comments}</p>
        <p>MODAL</p>
        <p>MODAL</p>
      </CommonModal>
      
    </Item>
  );
};
