import { uid } from 'uid/secure';
export const DropdownList = ({ workDays }) => {
  if (!workDays) {
    return;
  }

  const elements = workDays.map(({ isOpen, day, from, to }) => {
    return (
      <li key={uid()}>
        {isOpen ? (
          <p>
            <small>{day}</small>
            {from} - {to}
          </p>
        ) : (
          <p>
            <small>{day}</small> Closed
          </p>
        )}
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
