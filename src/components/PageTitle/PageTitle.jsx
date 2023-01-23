import PropTypes from 'prop-types';
import { VisuallyHiddenTitle } from './PageTitle.styled';

export const PageTitle = ({ title }) => (
  <VisuallyHiddenTitle>{title}</VisuallyHiddenTitle>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
