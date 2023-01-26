import PropTypes from 'prop-types';
import { NavList, NavGeneralLink } from './NavStyled';

export const Nav = ({ setIsMobileMenuOpened }) => {
  return (
    <NavList>
      <li>
        <NavGeneralLink
          to="/news"
          onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
        >
          News
        </NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink
          to="/notices"
          onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
        >
          Find pet
        </NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink
          to="/friends"
          onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
        >
          Our friends
        </NavGeneralLink>
      </li>
    </NavList>
  );
};

Nav.propTypes = {
  setIsMobileMenuOpened: PropTypes.func.isRequired,
};
