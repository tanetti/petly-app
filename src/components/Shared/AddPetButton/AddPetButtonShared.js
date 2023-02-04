import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export const StyledButton = styled(Button)`
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
