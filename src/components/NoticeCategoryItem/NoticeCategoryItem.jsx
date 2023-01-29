import { NavLink, useLocation } from "react-router-dom";
import {Item, Img, Title, Info, ItemInfo, NameInfo, ValueInfo} from './NoticeCategoryItem.styled'

export const NoticeCategoryItem = ({ notice }) => {
    const locate = useLocation();
    const { _id, url, title, breed, birthdate, location, price } = notice;

    function getAge() {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
    return (
        <Item>
            
            <Img src={url} alt={title} />
            <Title>{title}</Title>
            <Info>
                <ItemInfo><NameInfo>Breed:</NameInfo><ValueInfo>{ breed}</ValueInfo></ItemInfo>
                <ItemInfo><NameInfo>Place:</NameInfo><ValueInfo>{location}</ValueInfo></ItemInfo>
                <ItemInfo><NameInfo>Age:</NameInfo><ValueInfo>{getAge()}</ValueInfo></ItemInfo>
                <ItemInfo><NameInfo>Price:</NameInfo><ValueInfo>{price}</ValueInfo></ItemInfo>
            </Info>
            <NavLink to={`/notices/${id}`} state={{ from: locate }}>Learn more</NavLink>
        </Item>
    );
};