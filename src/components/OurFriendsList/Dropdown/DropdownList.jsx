export const DropdownList = ({ workDays, days }) => {
  if (!workDays) {
    return;
  }

  const elements = workDays.map(({ day, isOpen, from, to }) => {
    return (
      <li key={day}>
        <span>{day}</span>
        {from}-{to}
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
