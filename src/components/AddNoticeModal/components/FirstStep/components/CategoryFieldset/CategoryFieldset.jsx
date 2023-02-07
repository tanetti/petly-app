import { PropTypes } from 'prop-types';
import { Controller } from 'react-hook-form';
import { PUBLIC_CATEGORIES } from 'constants/noticesCategory';
import { InvisibleModalCheckbox } from 'components/AddNoticeModal/components/Shared';
import {
  CategoryCheckboxLabel,
  CategoryFieldsetContainer,
  InvisibleCategoryFieldsetLegend,
} from './CategoryFieldsetStyled';

export const CategoryFieldset = ({ control }) => (
  <CategoryFieldsetContainer>
    <InvisibleCategoryFieldsetLegend>
      Notice category
    </InvisibleCategoryFieldsetLegend>

    {PUBLIC_CATEGORIES.map(({ name, category }) => (
      <CategoryCheckboxLabel key={category}>
        {name}
        <Controller
          name="category"
          value={category}
          control={control}
          render={({ field: { onChange, value } }) => (
            <InvisibleModalCheckbox
              type="checkbox"
              checked={value === category}
              onChange={() => onChange(category)}
            />
          )}
        />
      </CategoryCheckboxLabel>
    ))}
  </CategoryFieldsetContainer>
);

CategoryFieldset.propTypes = {
  control: PropTypes.object.isRequired,
};
