import PropTypes from 'prop-types';
import { DATE_FORMAT } from 'constants/dateFormat';
import { capitalizeValue } from 'utilities/capitalizeValue';
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
      <span>{capitalizeValue(name)}</span>

      <span>Birthday:</span>
      <span>{DATE_FORMAT.format(Date.parse(birthdate))}</span>

      <span>Breed:</span>
      <span>{capitalizeValue(breed)}</span>

      <span>Location:</span>
      <span>{capitalizeValue(location)}</span>

      <span>The sex:</span>
      <span>{capitalizeValue(sex)}</span>

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

NoticeStats.propTypes = {
  noticeData: PropTypes.object.isRequired,
};
