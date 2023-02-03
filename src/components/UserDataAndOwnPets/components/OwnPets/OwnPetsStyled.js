import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export const AddPetButton = styled(Button)`
  position: absolute;
  top: 18px;
  right: 20px;

  display: flex;
  align-items: center;

  padding: 0 0 0 8px;

  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.palette.text.primary};
  background-color: transparent;

  border-width: 0;
  border-radius: 30px;

  text-transform: none;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    top: 9px;
    right: 30px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    right: 0;
  }

  &:hover,
  &:active {
    & > svg {
      color: ${({ theme }) => theme.palette.accent.dark};
    }
  }
`;

export const AddPetIcon = styled(AddCircleRoundedIcon)`
  width: 40px;
  height: 40px;
  margin-left: 15px;

  color: ${({ theme }) => theme.palette.accent.main};

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};
`;

export const OwnPetsList = styled('ul')`
  padding-top: 14px;
  padding-bottom: 14px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-top: -16px;
    padding-top: 0;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-top: 0;
  }
`;
