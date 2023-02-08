import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const NoticeContainer = styled(motion.li)`
  position: relative;

  display: flex;
  flex-direction: column;

  padding-bottom: 12px;

  background-color: ${({ theme }) => theme.palette.background.main};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  box-shadow: ${({ theme }) => theme.shadows[50]};

  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    &:not(:last-of-type) {
      margin-bottom: 32px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

export const CategoryBadge = styled('p')`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;

  width: 158px;
  height: 28px;
  padding: 6px 20px;

  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.04em;

  background-color: ${({ theme }) => theme.palette.background.light};

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  backdrop-filter: blur(2px);

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoContainer = styled('div')`
  flex-grow: 1;

  padding: 20px;
`;

export const NoticeTitle = styled('h3')`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  height: ${({ isMobile }) => (isMobile ? 'auto' : '96px')};

  padding: 20px 20px 0 20px;

  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  word-wrap: break-word;
  overflow: hidden;
`;

export const NoticeStats = styled('p')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 8px;

  flex-grow: 1;

  padding: 20px;

  font-size: 16px;
  line-height: 1.38;

  & span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    overflow: hidden;
  }
`;
