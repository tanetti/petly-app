import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  max-width: 100%;
  padding: 0 ${p => p.theme.space[4]}px;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 ${p => p.theme.space[5]}px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const List = styled('ul')`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 100px;
  gap: ${p => p.theme.space[4]}px;
  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1280px) {
    column-gap: ${p => p.theme.space[4]}px;
  }
`;