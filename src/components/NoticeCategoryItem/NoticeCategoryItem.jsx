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
  NoticeWraper,
  Comments,
  CommentsWraper,
  BtnWraper,
  Btn,
  BtnAdd,
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
        <ModalContentWraper>
          <ModalParagtaph>
            <NoticeWraper>Name:</NoticeWraper>
            <ModalPetInfoWraper>{'name'}</ModalPetInfoWraper>
          </ModalParagtaph>
          <ModalParagtaph>
            <NoticeWraper>Birthday:</NoticeWraper>
            <ModalPetInfoWraper>{birthdate}</ModalPetInfoWraper>
          </ModalParagtaph>
          <ModalParagtaph>
            <NoticeWraper>Breed:</NoticeWraper>
            <ModalPetInfoWraper>{breed}</ModalPetInfoWraper>
          </ModalParagtaph>
          <ModalParagtaph>
            <NoticeWraper>Lovation:</NoticeWraper>
            <ModalPetInfoWraper>{location}</ModalPetInfoWraper>
          </ModalParagtaph>
          <ModalParagtaph>
            <NoticeWraper>The sex:</NoticeWraper>{' '}
            <ModalPetInfoWraper>{'sex'}</ModalPetInfoWraper>
          </ModalParagtaph>
          <ModalParagtaph>
            <NoticeWraper>Email:</NoticeWraper>{' '}
            <ModalPetInfoWraper>{'email'}</ModalPetInfoWraper>
          </ModalParagtaph>
          <ModalParagtaph>
            <NoticeWraper>Phone:</NoticeWraper>
            <ModalPetInfoWraper>{'phone'}</ModalPetInfoWraper>
          </ModalParagtaph>
          <ModalParagtaph>
            <NoticeWraper>Price:</NoticeWraper>
            <ModalPetInfoWraper>{'price'}</ModalPetInfoWraper>
          </ModalParagtaph>
          <Comments>
            <CommentsWraper>Comments:</CommentsWraper>Lorem ipsum dolor sit
            amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem
          </Comments>
        </ModalContentWraper>
        <BtnWraper>
          <BtnAdd type="button">Contact</BtnAdd>
          <BtnAdd type="button">Add to f</BtnAdd>
        </BtnWraper>
      </CommonModal>
    </Item>
  );
};
