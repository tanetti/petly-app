import { NavList } from './NoticesCategoriesNav.styled';
import { NavLinkButtonLike } from '../Shared/NavLinkButtonLikeStyled';
export const NoticesCategoriesNav = () => {
    return (
        <NavList>        
            <li><NavLinkButtonLike to="/notices/lost-found">lost/found</NavLinkButtonLike></li>
            <li><NavLinkButtonLike to="/notices/for-free">in good hands</NavLinkButtonLike></li>
            <li><NavLinkButtonLike to="/notices/sell">sell</NavLinkButtonLike></li>
            <li><NavLinkButtonLike to="/notices/favorite">favorite ads</NavLinkButtonLike></li>
            <li><NavLinkButtonLike to="/notices/own">own ads</NavLinkButtonLike></li>
        </NavList>
    )
    
}