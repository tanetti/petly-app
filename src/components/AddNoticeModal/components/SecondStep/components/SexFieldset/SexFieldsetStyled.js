import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import maleBgImage from 'images/male-sign.svg';
import femaleBgImage from 'images/female-sign.svg';

export const SexFieldsetContainer = styled('fieldset')`
  position: relative;

  display: flex;
  gap: 40px;

  margin-bottom: 32px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    gap: 80px;

    margin-bottom: 40px;
  }
`;

export const SexFieldsetLegend = styled('legend')`
  display: block;
  margin-bottom: 16px;

  font-size: 18px;
  line-height: 1.44;

  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 28px;

    font-size: 24px;
    line-height: 1.08;
  }
`;

export const SexCheckboxLabel = styled('label')`
  font-size: 18px;
  line-height: 1.44;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 20px;
    line-height: 1.3;
  }

  cursor: pointer;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:before {
    content: '';

    display: block;

    width: 40px;
    height: 40px;
    margin-bottom: 12px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px 40px;

    filter: grayscale(1);

    transition: ${({ theme }) =>
      theme.transitions.create(['filter'], {
        duration: theme.transitions.duration.standard,
      })};

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;

      background-size: 60px 60px;
    }
  }

  &.male:before {
    background-image: url(${maleBgImage});
  }

  &.female:before {
    background-image: url(${femaleBgImage});
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
  }

  &:has(input:checked) {
    color: ${({ theme }) => theme.palette.accent.main};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.palette.accent.dark};
    }

    &::before {
      filter: grayscale(0);
    }
  }

  &:has(input:focus) {
    color: ${({ theme }) => theme.palette.accent.dark};

    &::before {
      filter: grayscale(0);
    }
  }
`;

export const SexErrorContainer = styled(motion.p)`
  position: absolute;
  bottom: -18px;
  left: 0;

  max-width: 230px;
  padding: 0 4px;

  font-family: inherit;
  font-size: 11px;
  line-height: 1.3;

  color: ${({ theme }) => theme.palette.error.main};
  background-color: ${({ theme }) => theme.palette.background.main};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.error.main};
  border-radius: 8px;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    bottom: -22px;
    left: 22px;

    font-size: 12px;
  }
`;
