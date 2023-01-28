import { useState } from 'react';
import { Container, CommonModal } from 'components/Shared';

export const OurFriendsPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <section>
      <Container>
        <div>Our Friends Page</div>
        <button type="button" onClick={() => setIsModalOpened(true)}>
          OPEN MODAL
        </button>

        <CommonModal
          title="Common modal"
          isOpened={isModalOpened}
          isActionsDisabled={false}
          closeModal={() => setIsModalOpened(false)}
        >
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
          <p>MODAL</p>
        </CommonModal>
      </Container>
    </section>
  );
};
