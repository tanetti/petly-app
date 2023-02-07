import { useGetServicesQuery } from 'redux/services/servicesApi';
import { FriendsList } from './OurFriendsListStyled';
import { OurFriendsItem } from './components';
import { AnimatePresence } from 'framer-motion';
import { ErrorLayout, LoaderLayout, NoResultLayout } from 'components/Shared';
import { ATANDART_ANIMATION_VARIANT } from 'constants/animationVariants';

export const OurFriendsList = () => {
  const { data, error, isLoading, isPending } = useGetServicesQuery();

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <LoaderLayout requestEntityName="services" /> : null}

      {!isLoading && !isPending && error ? <ErrorLayout /> : null}

      {!isLoading && !isPending && !error && !data?.length ? (
        <NoResultLayout />
      ) : null}

      {!isLoading && !error && data?.length ? (
        <FriendsList
          key="friendsList"
          variants={ATANDART_ANIMATION_VARIANT}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <AnimatePresence>
            {data.map(friendData => (
              <OurFriendsItem key={friendData.title} friendData={friendData} />
            ))}
          </AnimatePresence>
        </FriendsList>
      ) : null}
    </AnimatePresence>
  );
};
