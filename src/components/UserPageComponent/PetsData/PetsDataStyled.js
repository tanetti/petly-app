import { styled } from '@mui/material/styles';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RestoreFromTrashRoundedIcon from '@mui/icons-material/RestoreFromTrashRounded';

export const PetsWrapper = styled('div')``;

export const WrapperPetTitle = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 24px;
  }
`;

export const TitlePet = styled('h2')`
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 28px;
    line-height: 1.36;
  }
`;

export const AddPetBtn = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 1.35;
  border: transparent;
  background-color: transparent;
  padding: 0;
  color: #111111;
  font-weight: 500;
  transition: all 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.palette.accent.main};
    filter: hue-rotate(220deg);
  }
`;

export const AddPet = styled(AddCircleRoundedIcon)`
  color: ${({ theme }) => theme.palette.accent.main};
  width: 40px;
  height: 40px;
  margin-left: 15px;
`;

export const DataPets = styled('div')``;

export const DataPetItem = styled('li')`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.palette.background.main};
  padding: 16px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: grid;
    grid-template-columns: 161px 1fr;
    padding: 20px;
    grid-column-gap: 20px;
  }
`;

export const ImgPet = styled('img')`
  border-radius: 20px;
  margin-bottom: 20px;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-right: 32px;
    margin-bottom: 0;
  }
`;

export const WrapperInfo = styled('div')``;

export const WrapperPetName = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const DataPetName = styled('p')`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${({ theme }) => theme.palette.text.primary};
  letter-spacing: 0.04em;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const ButtonDel = styled('button')`
  padding: 0;
  border: transparent;
  background-color: transparent;

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.background.dark};
  }
`;

export const DelPet = styled(RestoreFromTrashRoundedIcon)`
  color: rgba(17, 17, 17, 0.6);
  width: 20px;
  height: 20px;
  transition: all 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.palette.accent.main};
    filter: hue-rotate(220deg);
  }

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    width: 24px;
    height: 24px;
  }
`;

export const DataPet = styled('p')`
  margin-bottom: 12px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const NotPetsWrapper = styled('div')`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const NotPets = styled('p')`
  text-align: center;
  font-size: 24px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  line-height: 1.35;
  color: ${({ theme }) => theme.palette.accent.dark};
  margin-bottom: 15px;

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    margin-bottom: 30px;
  }
`;

export const NotPetsImg = styled('img')`
`;
