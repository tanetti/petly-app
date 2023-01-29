import {
  Item,
  Box,
  BoxContact,
  Text,
  BoxImg,
  ItemTitle,
  Plug,
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
          <Text>
            Time:
            <br />
            11:00- 16:00
          </Text>
          <Text>
            Address:
            <br />
            {address ? (
              <a href={addressUrl} target="blank">
                {address}
              </a>
            ) : (
              <Plug>---------------------------</Plug>
            )}
          </Text>
          <Text>
            Email:
            <br />
            {email ? (
              <a href="mailto:{email}">{email}</a>
            ) : (
              <Plug>---------------------------</Plug>
            )}
          </Text>
          <Text>
            Phone:
            <br />
            {phone ? (
              <a href="tel:{phone}">{phone}</a>
            ) : (
              <Plug>---------------------------</Plug>
            )}
          </Text>
        </BoxContact>
      </Box>
    </Item>
  );
};
