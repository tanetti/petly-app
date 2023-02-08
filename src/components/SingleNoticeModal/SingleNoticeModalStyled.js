import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const ModalContainer = styled(motion.div)`
  width: calc(${({ theme }) => theme.breakpoints.values.mobileMid}px - 50px);
  max-width: 100%;
  padding-top: 30px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 704px;
    padding-top: 0;
  }
`;

export const ModalTopContainer = styled('div')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: flex;
    gap: 20px;
  }
`;

export const ModalTitle = styled('h4')`
  display: block;

  padding: 16px 0;

  font-size: 24px;
  line-height: 1.38;
  letter-spacing: -0.01em;

  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 372px;
    padding-top: 0;
    padding-right: 40px;

    font-size: 28px;
    line-height: 1.36;
  }
`;

export const InfoContainer = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 8px;

  font-size: 14px;
  line-height: 1.36;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.38;
  }

  & span {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & span:nth-of-type(odd) {
    font-weight: 600;
  }
`;

export const CommentsContainer = styled('p')`
  padding-top: 28px;
  padding-bottom: 40px;

  font-size: 14px;
  line-height: 1.36;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding-bottom: 32px;

    font-size: 16px;
    line-height: 1.38;
    letter-spacing: 0.04em;
  }

  & span:first-of-type {
    font-weight: 600;
  }
`;

export const InfoLink = styled('a')`
  color: inherit;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
  }
`;
