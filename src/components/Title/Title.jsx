import { Heading } from './TitleStyled';
import PropTypes from 'prop-types';
export const Title = ({ text }) => {
  return <Heading>{text}</Heading>;
};
Title.propTypes = {
  text: PropTypes.string.isRequired,
};
