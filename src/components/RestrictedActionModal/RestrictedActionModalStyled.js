import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { OutlinedButton } from 'components/Shared';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export const ModalButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding-top: 24px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;

    padding-top: 12px;
  }
`;

export const ModalOutlinedButton = styled(OutlinedButton)`
  height: 40px;

  font-family: inherit;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 180px;
    height: 44px;

    font-size: 20px;
    line-height: 1.35;
  }
`;

export const PromptMessage = styled('p')`
  margin-bottom: 12px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 24px;

    font-size: 18px;
  }
`;

export const LinkRow = styled('span')`
  display: block;

  padding-top: 16px;

  font-size: 20px;
  line-height: 1.36;

  text-align: center;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding-top: 18px;

    font-size: 24px;
  }
`;

export const AuthLink = styled(Link)`
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;

  font-weight: 500;

  color: ${({ theme }) => theme.palette.blueLink.main};
`;

export const UserIcon = styled(PersonRoundedIcon)`
  display: block;

  width: 60px;
  height: 60px;
  margin: 0 auto 20px auto;

  color: ${({ theme }) => theme.palette.accent.main};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px auto;
  }
`;
