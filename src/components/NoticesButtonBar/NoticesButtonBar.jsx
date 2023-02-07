import { useState } from 'react';
import { useAuth, useScreen } from 'hooks';
import { AddNoticeModal } from 'components/AddNoticeModal/AddNoticeModal';
import { RestrictedActionModal } from 'components/RestrictedActionModal/RestrictedActionModal';
import { AddPetButton } from 'components/Shared';
import { MobileAddPetButton, NoticesCategoryNavigation } from './components';
import { BarContainer } from './NoticesButtonBarStyled';

export const NoticesButtonBar = () => {
  const [isAddNoticeModalOpened, setIsAddNoticeModalOpened] = useState(false);
  const [isRestrictedActionModalOpened, setIsRestrictedActionModalOpened] =
    useState(false);
  const { isUserLoggedIn } = useAuth();
  const screen = useScreen();

  const onModalOpen = () => {
    if (!isUserLoggedIn) return setIsRestrictedActionModalOpened(true);

    setIsAddNoticeModalOpened(true);
  };

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

      <RestrictedActionModal
        isOpened={isRestrictedActionModalOpened}
        closeModal={() => setIsRestrictedActionModalOpened(false)}
      />
    </BarContainer>
  );
};
