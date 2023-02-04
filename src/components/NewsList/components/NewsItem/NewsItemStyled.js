import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const NewsListItem = styled(motion.li)`
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
`;

export const Article = styled('article')`
  display: flex;
  flex-direction: column;

  height: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;

  &::before {
    content: '';

    display: block;

    width: 83.33%;
    height: 4px;
    margin-bottom: 4px;

    border-radius: 40px;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.palette.newsGradient.main} 0%,
      ${({ theme }) => theme.palette.newsGradient.light} 105.44%
    );

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      height: 8px;
    }
  }
`;

export const ArticleTitle = styled('h3')`
  display: block;

  flex-grow: 1;

  margin-bottom: 16px;

  font-size: 24px;
  line-height: 1.38;
  letter-spacing: -0.01em;
`;

export const ArticleDescription = styled('p')`
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;

  height: 154px;
  margin-bottom: 20px;

  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    -webkit-line-clamp: 6;

    height: 132px;
    margin-bottom: 40px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    -webkit-line-clamp: 5;

    height: 110px;
  }
`;

export const BottomContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const ArticleDate = styled('p')`
  color: ${({ theme }) => theme.palette.semiTransparentBlack.main};
`;

export const ArticleLink = styled('a')`
  font-weight: 500;

  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;

  color: ${({ theme }) => theme.palette.accent.main};

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
  }
`;
