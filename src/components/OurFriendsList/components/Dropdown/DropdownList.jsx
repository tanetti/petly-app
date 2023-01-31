import { uid } from 'uid/secure';
export const DropdownList = ({ workDays }) => {
  if (!workDays) {
    return;
  }

  const elements = workDays.map(({ day, from, to }) => {
    return (
      <li key={uid()}>
        <span>{day}</span>
        {from}-{to}
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
