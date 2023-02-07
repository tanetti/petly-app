import { NumericFormat } from 'react-number-format';
import { forwardRef } from 'react';

export const PriceFormatInput = forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      allowNegative={false}
      onValueChange={values =>
        onChange({
          target: {
            name: props.name,
            value: values.floatValue,
          },
        })
      }
      thousandSeparator=","
      decimalScale={0}
      maxLength={10}
      isAllowed={values => values.value <= 100000000}
      valueIsNumericString={true}
    />
  );
});
