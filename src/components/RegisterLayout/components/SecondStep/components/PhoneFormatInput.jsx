import { forwardRef } from 'react';
import InputMask from 'react-input-mask';

export const PhoneFormatInput = forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <InputMask
      {...other}
      mask="+38 (999) 999-99-99"
      maskPlaceholder={null}
      ref={ref}
      onChange={onChange}
    />
  );
});
