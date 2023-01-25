import { NavList, NavGeneralLink } from './NavStyled';

export const Nav = () => (
  <NavList>
    <li>
      <NavGeneralLink to={'/news'}>News</NavGeneralLink>
    </li>
    <li>
      <NavGeneralLink to={'/notices'}>Find pet</NavGeneralLink>
    </li>
    <li>
      <NavGeneralLink to={'/friends'}>Our friends</NavGeneralLink>
    </li>
  </NavList>
);
