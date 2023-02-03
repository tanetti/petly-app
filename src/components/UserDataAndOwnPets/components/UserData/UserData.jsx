import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { standartAnimation } from 'constants/animationVariants';
import { AvatarDropZone, EditParameterUnit } from './components';
import { EDIT_PARAMETERS } from './constants/editParameters';
import {
  UserControlContainer,
  LogoutButton,
  LogoutIcon,
  ActionButton,
  ImageControlContainer,
  DeleteAvatarIcon,
  SaveAvatarIcon,
  DataForm,
  DataControlContainer,
} from './UserDataStyled';

export const UserData = () => {
  const userData = {
    name: 'Volodymyr',
    email: 'tanetti22@gmail.com',
    birthday: '1988-12-09',
    phone: '+38 (066) 334-45-99',
    address: 'Dnipro',
  };
  const avatarUrl = null;

  const [newAvatarFile, setNewAvatarFile] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const dispatch = useDispatch();
  const { isUserPending } = useAuth();

  return (
    <UserControlContainer>
      <ImageControlContainer>
        <AvatarDropZone
          currentAvatarUrl={avatarUrl}
          setNewAvatarFile={setNewAvatarFile}
        />
        <AnimatePresence mode="wait">
          {avatarUrl && !newAvatarFile ? (
            <motion.div
              key="deletePhoto"
              variants={standartAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ActionButton
                title="Delete photo"
                type="button"
                startIcon={<DeleteAvatarIcon />}
                loadingPosition="start"
                loading={false}
                disabled={false}
              >
                Delete photo
              </ActionButton>
            </motion.div>
          ) : null}
          {newAvatarFile ? (
            <motion.div
              key="savePhoto"
              variants={standartAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ActionButton
                title="Save photo"
                type="button"
                startIcon={<SaveAvatarIcon />}
                loadingPosition="start"
                loading={false}
                disabled={false}
              >
                Save photo
              </ActionButton>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </ImageControlContainer>

      <DataControlContainer>
        <DataForm>
          {EDIT_PARAMETERS.map(unitSettings => (
            <EditParameterUnit
              key={unitSettings?.name}
              unitSettings={unitSettings}
              activeUnit={activeUnit}
              setActiveUnit={setActiveUnit}
              currentData={userData}
            />
          ))}
        </DataForm>

        <LogoutButton
          title="Log out"
          type="button"
          startIcon={<LogoutIcon />}
          loadingPosition="start"
          loading={isUserPending}
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </LogoutButton>
      </DataControlContainer>
    </UserControlContainer>
  );
};
