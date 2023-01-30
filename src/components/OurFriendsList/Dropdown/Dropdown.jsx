import { useState } from 'react';
import { DropdownMenu } from './DropdownStyled';
export const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };
  const day = new Date();
  console.log(day);
  return (
    <DropdownMenu>
      <button onClick={handleToggle}>
        Time <br /> 09:00- 17:00
      </button>
      {open && (
        <ul>
          <li>
            <span>MN</span>11:00-17:00
          </li>
          <li>
            <span>TU</span>11:00-17:00
          </li>
          <li>
            <span>WE</span>11:00-17:00
          </li>
          <li>
            <span>TH</span>11:00-17:00
          </li>
          <li>
            <span>FR</span>11:00-17:00
          </li>
          <li>
            <span>SA</span>11:00-17:00
          </li>
          <li>
            <span>SU</span>11:00-17:00
          </li>
        </ul>
      )}
    </DropdownMenu>
  );
};
