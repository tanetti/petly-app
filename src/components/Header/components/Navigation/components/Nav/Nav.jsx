import PropTypes from 'prop-types';
import { NavList, NavGeneralLink } from './NavStyled';

export const Nav = ({ isMobileMenuOpened, setIsMobileMenuOpened }) => {
  return (
    <NavList isMobileMenuOpened={isMobileMenuOpened}>
      <li>
        <NavGeneralLink
          to={'/news'}
          onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
        >
          News
        </NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink
          to={'/notices'}
          onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
        >
          Find pet
        </NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink
          to={'/friends'}
          onClick={() => setIsMobileMenuOpened(prevState => prevState && false)}
        >
          Our friends
        </NavGeneralLink>
      </li>
    </NavList>
  );
};

Nav.propTypes = {
  isMobileMenuOpened: PropTypes.bool.isRequired,
  setIsMobileMenuOpened: PropTypes.func.isRequired,
};
