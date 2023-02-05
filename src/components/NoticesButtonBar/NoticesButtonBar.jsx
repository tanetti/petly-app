import { AddPetButton } from 'components/Shared';
import { useScreen } from 'hooks';
import { MobileAddPetButton, NoticesCategoryNavigation } from './components';
import { BarContainer } from './NoticesButtonBarStyled';

export const NoticesButtonBar = () => {
  const screen = useScreen();

  return (
    <BarContainer>
      <NoticesCategoryNavigation />

      {screen === 'mobile' ? (
        <MobileAddPetButton onButtonClick={() => console.log('ADD Pet')} />
      ) : (
        <AddPetButton onButtonClick={() => console.log('ADD Pet')} />
      )}
    </BarContainer>
  );
};
