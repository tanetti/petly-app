import { DATE_FORMAT } from 'constants/dateFormat';
import { CURRENCY_FORMAT } from 'constants/currencyFormat';
import { InfoContainer, InfoLink } from './NoticeStatsStyled';

export const NoticeStats = ({ noticeData }) => {
  const {
    title,
    name,
    birthdate,
    breed,
    location,
    sex,
    price,
    owner: { email, phone },
  } = noticeData;

  return (
    <InfoContainer>
      <span>Name:</span>
      <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      <span>Birthday:</span>
      <span>{DATE_FORMAT.format(Date.parse(birthdate))}</span>
      <span>Breed:</span>
      <span>{breed.charAt(0).toUpperCase() + breed.slice(1)}</span>
      <span>Location:</span>
      <span>{location.charAt(0).toUpperCase() + location.slice(1)}</span>
      <span>The sex:</span>
      <span>{sex.charAt(0).toUpperCase() + sex.slice(1)}</span>
      <span>Email:</span>
      <span>
        <InfoLink
          href={`mailto:${email}?subject=Petly notice - ${title} (${name})`}
        >
          {email}
        </InfoLink>
      </span>
      {phone ? (
        <>
          <span>Phone:</span>
          <span>
            <InfoLink href={`tel:${phone}`}>{phone}</InfoLink>
          </span>
        </>
      ) : null}
      {price ? (
        <>
          <span>Price:</span>
          <span>{CURRENCY_FORMAT.format(price)}</span>
        </>
      ) : null}
    </InfoContainer>
  );
};
