import { useState } from 'react';
import { useScreen } from 'hooks';
import { AddNoticeModal } from 'components/AddNoticeModal/AddNoticeModal';
import { AddPetButton } from 'components/Shared';
import { MobileAddPetButton, NoticesCategoryNavigation } from './components';
import { BarContainer } from './NoticesButtonBarStyled';

export const NoticesButtonBar = () => {
  const [isAddNoticeModalOpened, setIsAddNoticeModalOpened] = useState(false);
  const screen = useScreen();

  const onModalOpen = () => setIsAddNoticeModalOpened(true);

  return (
    <BarContainer>
      <NoticesCategoryNavigation />

      {screen === 'mobile' ? (
        <MobileAddPetButton onButtonClick={onModalOpen} />
      ) : (
        <AddPetButton onButtonClick={onModalOpen} />
      )}

      <AddNoticeModal
        isOpened={isAddNoticeModalOpened}
        closeModal={() => setIsAddNoticeModalOpened(false)}
      />
    </BarContainer>
  );
};
