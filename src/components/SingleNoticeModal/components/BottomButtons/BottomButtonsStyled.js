import { styled } from '@mui/material/styles';

export const ButtonsContainer = styled('div')`
  padding-top: 40px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 12px;

    padding-top: 32px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const ContactLink = styled('a')`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 6px 18px;
  margin-bottom: 12px;

  font-family: inherit;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.palette.text.white};
  background-color: ${({ theme }) => theme.palette.accent.main};

  border-radius: 40px;

  transition: ${({ theme }) =>
    theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 180px;

    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.accent.dark};
  }
`;
