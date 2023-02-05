import { AdFilledButton, AdOutlinedButton } from './AdTypeButtonStyled';

export const AdTypeButton = ({ isActive, onClick, children }) => {
  return (
    <>
      {isActive ? (
        <AdFilledButton onClick={onClick}>{children}</AdFilledButton>
      ) : (
        <AdOutlinedButton onClick={onClick}>{children}</AdOutlinedButton>
      )}
    </>
  );
};
