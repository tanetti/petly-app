import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';

export const CommonProgressBarContainer = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;

  width: 100%;

  border-radius: 4px;

  overflow: hidden;
`;

export const CommonProgressBar = styled(LinearProgress)`
  height: 6px;

  background-color: transparent;
`;
