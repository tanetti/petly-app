import { styled } from '@mui/material/styles';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { OutlinedButton } from 'components/Shared';

export const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  width: 100%;
  height: 88px;
  padding: 0 16px;

  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 248px;
    padding: 0;
  }
`;

export const NoticeButton = styled(OutlinedButton)`
  width: 100%;
  padding: 6px 28px;

  font-size: 16px;
  line-height: 1.38;

  color: ${({ theme }) => theme.palette.accent.main};

  &:not(:last-of-type) {
    margin-bottom: 0;
  }

  &:not(.MuiLoadingButton-loading) svg {
    width: 22px;
    height: 22px;
    padding-bottom: 2px;
  }

  &.MuiLoadingButton-loading > div {
    right: calc(50% - 40px);
  }
`;

export const DeleteIcon = styled(DeleteForeverRoundedIcon)`
  font-size: inherit;
`;
