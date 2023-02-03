import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.mobileMid}px;
  margin: 0 auto;
  padding: 0;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    max-width: ${({ theme }) => theme.breakpoints.values.tablet}px;
    padding: 0 60px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    max-width: ${({ theme }) => theme.breakpoints.values.desktop}px;
  }
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: raw;
`;

export const ImageContainer = styled('div')`
  & > div {
    overflow: hidden;
    display: flex;
    width: 208px;
    height: 208px;
    border-radius: 20px;
    box-shadow: none;
    background-color: ${({ theme }) => theme.palette.background.dark};

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 182px;
      height: 182px;
      border-radius: 40px;
    }
  }

  & > div > div > div > div {
    background-color: ${({ theme }) => theme.palette.background.dark};
  }
`;

export const ModalInput = styled(TextField)`
  position: relative;

  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.63;
  }

  & .MuiInputBase-root {
    width: 240px;
    height: 40px;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    border-radius: 40px;

    background-color: ${({ theme }) => theme.palette.background.dark};

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      width: 448px;
      height: 48px;
    }
  }

  & .MuiInputBase-root:hover fieldset {
    border-color: ${({ theme }) => theme.palette.accent.main};
  }

  & fieldset {
    padding-left: 22px;

    border-radius: 40px;

    border-color: ${({ theme }) => theme.palette.accent.light};

    transition: ${({ theme }) =>
      theme.transitions.create(['border-color'], {
        duration: theme.transitions.duration.standard,
      })};
  }

  & input {
    height: 17px;
    padding: 11px 14px;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    color: ${({ theme }) => theme.palette.text.primary};

    background-color: ${({ theme }) => theme.palette.background.dark};

    border-radius: 40px;

    overflow: hidden;
    text-overflow: ellipsis;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      height: 27px;
      padding: 11px 16px;
    }
  }

  & > p {
    position: absolute;
    bottom: -7px;
    right: 14px;

    max-width: 230px;
    margin: 0 10px;
    padding: 0 4px;

    font-family: inherit;
    font-size: 11px;
    line-height: 1.3;

    background-color: ${({ theme }) => theme.palette.background.main};

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.error.main};
    border-radius: 8px;

    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      bottom: -8px;

      font-size: 12px;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;

    ${({ theme }) => theme.breakpoints.up('tablet')} {
      margin-bottom: 28px;
    }
  }

  &:last-of-type {
    margin-bottom: 40px;
  }
`;
//
// import { IconButton, Modal } from '@mui/material';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// export const StyledModal = styled(Modal)`
//   display: grid;
//   place-items: center;
// `;

// export const ModalWindow = styled('div')`
//   position: relative;

//   display: flex;

//   max-width: calc(100vw - 40px);
//   min-width: 280px;
//   max-height: calc(100vh - 40px);
//   padding: 10px 10px;

//   color: ${({ theme }) => theme.palette.text.black};
//   background-color: ${({ theme }) => theme.palette.background.main};

//   border-radius: 20px;

//   outline: transparent;

//   overflow: hidden;

//   ${({ theme }) => theme.breakpoints.up('tablet')} {
//     max-width: calc(100vw - 64px);
//     max-height: calc(100vh - 64px);
//   }
// `;

// export const ModalCloseButton = styled(IconButton)`
//   position: absolute;
//   top: 20px;
//   right: 20px;

//   width: 44px;
//   height: 44px;
//   padding: 0;

//   color: inherit;
//   background-color: ${({ theme }) => theme.palette.background.dark};

//   transition: ${({ theme }) =>
//     theme.transitions.create(['color'], {
//       duration: theme.transitions.duration.standard,
//     })};

//   &:hover,
//   &:focus {
//     color: ${({ theme }) => theme.palette.accent.main};
//     background-color: ${({ theme }) => theme.palette.background.dark};
//   }
// `;

// export const CloseButtonIcon = styled(CloseRoundedIcon)`
//   font-size: 36px;
// `;

// export const ModalWindowGradient = styled('div')`
//   position: absolute;
//   top: 0;
//   left: 0;

//   width: 100%;
//   height: 100%;

//   background: linear-gradient(
//       0deg,
//       rgba(255, 255, 255, 1),
//       rgba(255, 255, 255, 1) 10px,
//       rgba(255, 255, 255, 0.8) 18px,
//       rgba(255, 255, 255, 0) 26px,
//       rgba(255, 255, 255, 0)
//     ),
//     linear-gradient(
//       180deg,
//       rgba(255, 255, 255, 1),
//       rgba(255, 255, 255, 1) 10px,
//       rgba(255, 255, 255, 0.8) 18px,
//       rgba(255, 255, 255, 0) 26px,
//       rgba(255, 255, 255, 0)
//     );

//   pointer-events: none;
// `;

// export const ContentContainer = styled('div')`
//   width: 100%;
//   max-height: 100cqh;
//   padding: 30px 10px;

//   overflow-x: hidden;
//   overflow-y: auto;

//   &::-webkit-scrollbar {
//     width: 8px;

//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: ${({ theme }) => theme.palette.accent.main};

//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-track {
//     margin-top: 66px;
//     margin-bottom: 12px;

//     background-color: ${({ theme }) => theme.palette.semiTransparentBlack.main};

//     border-radius: 4px;
//   }
// `;

// export const ModalTitle = styled('p')`
//   margin: 0;
//   margin-bottom: 20px;
//   padding: 0 54px;

//   font-size: 24px;
//   line-height: 1.38;

//   text-align: center;

//   ${({ theme }) => theme.breakpoints.up('tablet')} {
//     font-weight: 600;
//     font-size: 36px;
//     line-height: 1.36;
//   }
// `;
