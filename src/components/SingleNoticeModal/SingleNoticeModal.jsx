import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { STANDART_ANIMATION_VARIANT } from 'constants/animationVariants';
import { DATE_FORMAT } from 'constants/dateFormat';
import { CURRENCY_FORMAT } from 'constants/currencyFormat';
import { CommonModal, NoticeAvatar } from 'components/Shared';
import {
  CommentsContainer,
  InfoContainer,
  InfoLink,
  ModalContainer,
  ModalTitle,
  ModalTopContainer,
} from './SingleNoticeModalStyled';

export const SingleNoticeModal = ({ isOpened, closeModal, noticeData }) => {
  return (
    <CommonModal
      isOpened={isOpened}
      isActionsDisabled={null}
      closeModal={closeModal}
    >
      <AnimatePresence>
        {noticeData ? (
          <ModalContainer
            key="singleNoticeModal"
            variants={STANDART_ANIMATION_VARIANT}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ModalTopContainer>
              <NoticeAvatar
                avatarURL={noticeData.avatarURL}
                name={noticeData.name}
                categoryName={noticeData.category}
                variant="modal"
              />

              <div>
                <ModalTitle>
                  {noticeData.title.charAt(0).toUpperCase() +
                    noticeData.title.slice(1)}
                </ModalTitle>

                <InfoContainer>
                  <span>Name:</span>
                  <span>
                    {noticeData.name.charAt(0).toUpperCase() +
                      noticeData.name.slice(1)}
                  </span>

                  <span>Birthday:</span>
                  <span>{DATE_FORMAT.format(noticeData.birthday)}</span>

                  <span>Breed:</span>
                  <span>
                    {noticeData.breed.charAt(0).toUpperCase() +
                      noticeData.breed.slice(1)}
                  </span>

                  <span>Location:</span>
                  <span>
                    {noticeData.location.charAt(0).toUpperCase() +
                      noticeData.location.slice(1)}
                  </span>

                  <span>The sex:</span>
                  <span>
                    {noticeData.sex.charAt(0).toUpperCase() +
                      noticeData.sex.slice(1)}
                  </span>

                  <span>Email:</span>
                  <span>
                    <InfoLink
                      href={`mailto:${noticeData.owner.email}?subject=Petly notice - ${noticeData.title} (${noticeData.name})`}
                    >
                      {noticeData.owner.email}
                    </InfoLink>
                  </span>

                  {noticeData.owner.phone ? (
                    <>
                      <span>Phone:</span>
                      <span>
                        <InfoLink href={`tel:${noticeData.owner.phone}`}>
                          {noticeData.owner.phone}
                        </InfoLink>
                      </span>
                    </>
                  ) : null}

                  {noticeData.price ? (
                    <>
                      <span>Price:</span>
                      <span>{CURRENCY_FORMAT.format(noticeData.price)}</span>
                    </>
                  ) : null}
                </InfoContainer>
              </div>
            </ModalTopContainer>

            {noticeData.comments ? (
              <CommentsContainer>
                <span>Comments:&nbsp;</span>
                <span>{noticeData.comments}</span>
              </CommentsContainer>
            ) : null}
          </ModalContainer>
        ) : null}
      </AnimatePresence>
    </CommonModal>
  );
};

SingleNoticeModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  noticeData: PropTypes.object,
};
