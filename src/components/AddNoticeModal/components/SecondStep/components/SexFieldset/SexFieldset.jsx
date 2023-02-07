import { PropTypes } from 'prop-types';
import { Controller } from 'react-hook-form';
import { InvisibleModalCheckbox } from 'components/AddNoticeModal/components/Shared';
import {
  SexCheckboxLabel,
  SexErrorContainer,
  SexFieldsetContainer,
  SexFieldsetLegend,
} from './SexFieldsetStyled';
import { AnimatePresence } from 'framer-motion';
import { standartAnimation } from 'constants/animationVariants';

export const SexFieldset = ({ control, error, isDisabled }) => (
  <SexFieldsetContainer>
    <SexFieldsetLegend>The sex</SexFieldsetLegend>

    <SexCheckboxLabel className="male">
      Male
      <Controller
        name="sex"
        value="male"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InvisibleModalCheckbox
            title="Male"
            type="checkbox"
            disabled={isDisabled}
            checked={value === 'male'}
            onChange={() => onChange('male')}
          />
        )}
      />
    </SexCheckboxLabel>

    <SexCheckboxLabel className="female">
      Female
      <Controller
        name="sex"
        value="female"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InvisibleModalCheckbox
            title="Female"
            type="checkbox"
            disabled={isDisabled}
            checked={value === 'female'}
            onChange={() => onChange('female')}
          />
        )}
      />
    </SexCheckboxLabel>

    <AnimatePresence>
      {!!error ? (
        <SexErrorContainer
          key="sexError"
          variants={standartAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {error?.message}
        </SexErrorContainer>
      ) : null}
    </AnimatePresence>
  </SexFieldsetContainer>
);

SexFieldset.propTypes = {
  control: PropTypes.object.isRequired,
  error: PropTypes.object,
  isDisabled: PropTypes.bool,
};
