import { Dropdown } from '../Dropdown/Dropdown';
import {
  Item,
  Box,
  BoxContact,
  BoxImg,
  ItemTitle,
} from '../OurFriendsPageStyled';

export const OurFriendsItem = ({
  title,
  url,
  addressUrl,
  imageUrl,
  address,
  phone,
  email,
}) => {
  return (
    <Item key={title}>
      <ItemTitle target="blank" href={url}>
        {title}
      </ItemTitle>
      <Box>
        <BoxImg>
          {imageUrl ? <img src={imageUrl} alt="logo" /> : 'Картинка'}
        </BoxImg>
        <BoxContact>
          <Dropdown />
          <p>
            Address:
            <br />
            {address ? (
              <a href={addressUrl} target="blank">
                {address}
              </a>
            ) : (
              <span>---------------------------</span>
            )}
          </p>
          <p>
            Email:
            <br />
            {email ? (
              <a href="mailto:{email}">{email}</a>
            ) : (
              <span>---------------------------</span>
            )}
          </p>
          <p>
            Phone:
            <br />
            {phone ? (
              <a href="tel:{phone}">{phone}</a>
            ) : (
              <span>---------------------------</span>
            )}
          </p>
        </BoxContact>
      </Box>
    </Item>
  );
};
