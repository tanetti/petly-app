import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';

export const CommonProgressBarContainer = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
`;

export const CommonProgressBar = styled(LinearProgress)`
  height: 6px;

  background-color: transparent;
`;
