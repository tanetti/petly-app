import { styled } from '@mui/material/styles';

export const UserPageContainer = styled('div')`
  padding-top: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding-top: 60px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    display: flex;
    gap: 32px;

    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.values.desktop}px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const UserDataSection = styled('section')`
  ${({ theme }) => theme.breakpoints.up('desktop')} {
    min-width: 411px;
  }
`;

export const UserOwnPetsSection = styled('section')`
  flex-grow: 1;

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    max-width: 804px;
  }
`;

export const SectionTitle = styled('h2')`
  margin-bottom: 18px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 40px;

    font-size: 28px;
    line-height: 1.36;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-bottom: 24px;
  }
`;
