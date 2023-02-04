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
        title="Common modal"
        isOpened={isModalOpened}
        isActionsDisabled={false}
        closeModal={() => setIsModalOpened(false)}
      >
        <p>{_id}</p>
        <StyledImg src={avatar} alt="Pet" />
        <ModalTitleNotice>{title}</ModalTitleNotice>
        <ModalParagtaph>{birthdate}</ModalParagtaph>
        <ModalParagtaph>{breed}</ModalParagtaph>
        <ModalParagtaph>{location}</ModalParagtaph>
        <ModalParagtaph>{price}</ModalParagtaph>
        <ModalParagtaph>MODAL</ModalParagtaph>
        <ModalParagtaph>MODAL</ModalParagtaph>
        <ModalParagtaph>MODAL</ModalParagtaph>
        <ModalParagtaph>MODAL</ModalParagtaph>
      </CommonModal>
    </Item>
  );
};
