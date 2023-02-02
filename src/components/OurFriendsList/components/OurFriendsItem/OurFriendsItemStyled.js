import { styled } from '@mui/material/styles';

export const FriendsItem = styled('li')`
  padding: 12px 4px;

  background: ${({ theme }) => theme.palette.background.main};

  border-radius: 20px;

  box-shadow: ${({ theme }) => theme.shadows[50]};

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    padding: 16px 4px;

    border-radius: 40px;
  }
`;

export const ItemTitle = styled('a')`
  display: block;

  width: 100%;
  margin-bottom: 12px;
  padding: 0 20px;

  font-size: 12px;
  line-height: 1.33;
  font-weight: 700;

  color: ${({ theme }) => theme.palette.accent.main};

  text-align: center;

  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.38;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    font-size: 20px;
    line-height: 1.35;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
  }
`;

export const InfoBox = styled('div')`
  display: flex;
  gap: 12px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    gap: 14px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    gap: 16px;
  }
`;

export const ImageBox = styled('div')`
  flex-shrink: 0;
`;

export const FriendImage = styled('img')`
  width: 110px;

  border-radius: 20px;

  object-fit: contain;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 120px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    width: 158px;
  }
`;

export const ContactList = styled('ul')`
  overflow: hidden;

  font-size: 12px;
  line-height: 1.33;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 14px;
    line-height: 1.36;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const ContactItem = styled('li')`
  &:not(:last-of-type) {
    margin-bottom: 4px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      margin-bottom: 8px;
    }

    ${({ theme }) => theme.breakpoints.up('desktop')} {
      margin-bottom: 12px;
    }
  }
`;

export const ContactCaption = styled('span')`
  display: block;

  font-weight: 600;
`;

export const ContactLink = styled('a')`
  color: inherit;

  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent.dark};
  }
`;

export const ContactNoInfo = styled('span')`
  color: ${({ theme }) => theme.palette.semiTransparentBlack.dark};
`;
