import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[4]};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tabletMin}) {
    width: ${({ theme }) => theme.breakPoints.tabletMin};
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakPoints.desktopMin}) {
    width: ${({ theme }) => theme.breakPoints.desktopMin};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.bigMin}) {
    width: ${({ theme }) => theme.breakPoints.bigMin};
  }
`;
