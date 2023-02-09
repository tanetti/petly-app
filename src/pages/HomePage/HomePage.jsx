import { HomeLayout } from 'components/HomeLayout/HomeLayout.jsx';
import { PageSection, HomePageContainer, Union } from 'components/Shared';

export const HomePage = () => {
  return (
    <PageSection>
      <HomePageContainer>
        <Union />
        <HomeLayout />
      </HomePageContainer>
    </PageSection>
  );
};
