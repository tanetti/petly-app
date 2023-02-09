import {
  HomePageContainer,
  HomePageSection,
  Tittle,
  Union,
} from './HomePageLayoutStyled';

export const HomePageLayout = () => {
  return (
    <HomePageSection>
      <HomePageContainer>
        <Tittle>
          Take good care of
          <br />
          your small pets
        </Tittle>
        <Union />
      </HomePageContainer>
    </HomePageSection>
  );
};
