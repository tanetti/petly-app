import { useState } from 'react';
import { CommonModal } from 'components/Shared';
import {
  Item,
  Img,
  BoxInfo,
  Title,
  PetInfo,
  ItemInfo,
  NameInfo,
  ValueInfo,
} from './NoticeCategoryItem.styled';
import {
  StyledImg,
  ModalTitleNotice,
  ModalParagtaph,
  ModalImgWraper,
  ModalPetInfoWraper,
  ModalContentWraper,
} from '../ModalNotice/CommonModal/NoticeModalStyled';
import numWords from 'num-words';
export const NoticeCategoryItem = ({ notice }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isModalNotiesOpened, setIsModalNoticeOpened] = useState(false);
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
        <button type="button" onClick={() => setIsModalOpened(true)}>
          Learn more
        </button>
      </BoxInfo>

      <CommonModal
        isOpened={true}
        isActionsDisabled={false}
        closeModal={() => setIsModalOpened(false)}
      >
        <ModalImgWraper>
          <StyledImg src={avatar} alt="Pet" />
        </ModalImgWraper>

        <ModalTitleNotice>{title}</ModalTitleNotice>
        <div></div>
        <ModalParagtaph>
          <div>Birthday:</div>
          <div>{birthdate}</div>
        </ModalParagtaph>
        <ModalParagtaph>
          <div>Breed:</div>
          <div>{breed}</div>
        </ModalParagtaph>
        <ModalParagtaph>
          <div>Lovation:</div> <div>{location}</div>
        </ModalParagtaph>
        <ModalParagtaph>
          <div>The sex:</div> <div>{price}</div>
        </ModalParagtaph>
        <ModalParagtaph>
          <div>Email:</div> <div>MODAL</div>
        </ModalParagtaph>
        <ModalParagtaph>
          <div>Phone:</div>
          <div>MODAL</div>
        </ModalParagtaph>
        <ModalParagtaph>
          <div>Price:</div>
          <div>{'MODAL'}</div>
        </ModalParagtaph>
        <ModalParagtaph>
          <div>Comments:</div>Lorem ipsum dolor sit amet, consectetur Lorem
          ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur Lorem
        </ModalParagtaph>
        <div>
          <button type="button">Contact</button>
          <button type="button">Add to f</button>
        </div>
      </CommonModal>
    </Item>
  );
};
