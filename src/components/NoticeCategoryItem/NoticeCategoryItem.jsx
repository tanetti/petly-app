import { useState } from 'react';
import { CommonModal } from 'components/Shared';
import {Item, Img, BoxInfo,Title, PetInfo, ItemInfo, NameInfo, ValueInfo} from './NoticeCategoryItem.styled'
import  numWords from 'num-words';
export const NoticeCategoryItem = ({ notice }) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    
    const { _id, avatar, title, breed, birthdate, location, price } = notice;

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
            
            <Img src={avatar} alt={title} />
            <BoxInfo>
                <Title>{title}</Title>
            <PetInfo>
                <ItemInfo><NameInfo>Breed:</NameInfo><ValueInfo>{ breed}</ValueInfo></ItemInfo>
                <ItemInfo><NameInfo>Place:</NameInfo><ValueInfo>{location}</ValueInfo></ItemInfo>
                    <ItemInfo><NameInfo>Age:</NameInfo><ValueInfo>{getAge()} {getAge()=='one'?'year':'years'}</ValueInfo></ItemInfo>
                <ItemInfo><NameInfo>Price:</NameInfo><ValueInfo>{price}</ValueInfo></ItemInfo>
            </PetInfo>
            <button type="button" onClick={() => setIsModalOpened(true)}>
          OPEN MODAL
        </button>
            </BoxInfo>

            <CommonModal
          title="Common modal"
          isOpened={isModalOpened}
          isActionsDisabled={false}
          closeModal={() => setIsModalOpened(false)}
        >
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
        </CommonModal>
            
        </Item>
    );
};