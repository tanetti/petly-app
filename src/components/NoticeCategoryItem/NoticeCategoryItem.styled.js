import { styled } from '@mui/material/styles';

export const Item = styled('li')`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 0px 0px 20px 20px;
  transition: ${p => p.theme.transition.transform},
    ${p => p.theme.transition.boxShadow};
  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: ${p => p.theme.shadows.cardHover};
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - ${p => p.theme.space[5]}px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - ${p => p.theme.space[4]}px * 2) / 3);
  }
`;

export const Img = styled.img`
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 100%;
  object-fit: cover;
  display: block;
  @media screen and (min-width: 320px) {
    height: 398px;
  }
  @media screen and (min-width: 768px) {
    height: 455px;
  }
  @media screen and (min-width: 1280px) {
    height: 574px;
  }
`;

export const Title = styled.p`
  display: flex;
  flex-grow: 1;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.33;
  color: ${p => p.theme.colors.text};
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;