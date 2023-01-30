import {
  Item,
  Box,
  BoxContact,
  BoxImg,
  ItemTitle,
} from '../OurFriendsPageStyled';
import { useState } from 'react';
import { DropdownList } from '../Dropdown/DropdownList';
import { DropdownMenu } from '../Dropdown/DropdownStyled';

export const OurFriendsItem = ({
  title,
  url,
  addressUrl,
  imageUrl,
  address,
  phone,
  email,
  workDays,
}) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

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
          <DropdownMenu>
            <button onClick={handleToggle}>
              Time <br /> {!workDays ? '------------------' : '09:00- 17:00'}
            </button>
            {open && <DropdownList workDays={workDays} />}
          </DropdownMenu>
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
