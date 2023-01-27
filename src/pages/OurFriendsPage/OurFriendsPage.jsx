import { CommonModal } from 'components/Shared/CommonModal/CommonModal';
import { useState } from 'react';

export const OurFriendsPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <div>Our Friends Page</div>
      <button type="button" onClick={() => setIsModalOpened(true)}>
        MODAL
      </button>

      <CommonModal
        title="Common modal"
        isOpened={isModalOpened}
        closeModal={() => setIsModalOpened(false)}
      >
        <p>MODAL</p>
      </CommonModal>
    </>
  );
};
