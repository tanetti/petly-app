import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactComponent as AddNoticeIconSvg } from 'images/add-notice-icon.svg';

export const MobileButton = styled(Button)`
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 500;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;
  height: 80px;

  font-family: inherit;
  font-weight: inherit;
  font-size: 12px;
  line-height: 1.33;

  color: ${({ theme }) => theme.palette.text.white};
  background-color: ${({ theme }) => theme.palette.accent.main};

  border-radius: 50%;

  box-shadow: ${({ theme }) => theme.shadows[50]};

  cursor: pointer;

  text-transform: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.accent.dark};
  }
`;

export const AddPetIcon = styled(AddNoticeIconSvg)`
  width: 32px;
  height: 32px;

  fill: currentColor;
  stroke: currentColor;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};
`;
