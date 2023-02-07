import { styled } from '@mui/material/styles';

export const ModalFieldsetContainer = styled('fieldset')`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-bottom: 32px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 28px;
  }
`;

export const InvisibleModalFieldsetLegend = styled('legend')`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const InvisibleModalCheckbox = styled('input')`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
