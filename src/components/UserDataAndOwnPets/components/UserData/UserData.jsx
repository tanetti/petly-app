import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  useDeleteAvatarMutation,
  useGetCurrentInfoQuery,
  useUploadAvatarMutation,
} from 'redux/currentUserInfo/currentUserInfoApi';
import { useAuth } from 'hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { standartAnimation } from 'constants/animationVariants';
import { AvatarDropZone } from 'components/Shared';
import { EditParameterUnit } from './components';
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
  const { isUserLoggedIn, isUserPending } = useAuth();
  const { data } = useGetCurrentInfoQuery(null, {
    skip: !isUserLoggedIn,
  });
  const [
    uploadAvatar,
    {
      reset: resetUploadHook,
      isSuccess: isUploadSuccess,
      isLoading: isUploading,
    },
  ] = useUploadAvatarMutation();

  const [
    deleteAvatar,
    {
      reset: resetDeletingHook,
      isSuccess: isDeleteSuccess,
      isLoading: isDeleting,
    },
  ] = useDeleteAvatarMutation();

  const [newAvatarFile, setNewAvatarFile] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isUploadSuccess) return;

    setNewAvatarFile(null);
    resetUploadHook();
  }, [isUploadSuccess, resetUploadHook]);

  useEffect(() => {
    if (!isDeleteSuccess) return;

    resetDeletingHook();
  }, [isDeleteSuccess, resetDeletingHook]);

  const onSaveImageButtonClick = async () => {
    const formData = new FormData();

    formData.append('avatar', newAvatarFile, newAvatarFile.name);

    uploadAvatar(formData);
  };

  const onDeleteImageButtonClick = async () => {
    deleteAvatar();
  };

  return (
    <UserControlContainer>
      <ImageControlContainer>
        <AvatarDropZone
          currentAvatarUrl={data?.avatarURL}
          setNewAvatarFile={setNewAvatarFile}
          isReseted={isUploadSuccess || isDeleteSuccess}
        />
        <AnimatePresence mode="wait">
          {data?.avatarURL && !newAvatarFile ? (
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
                loading={isDeleting}
                onClick={onDeleteImageButtonClick}
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
                loading={isUploading}
                onClick={onSaveImageButtonClick}
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
              currentData={data}
            />
          ))}
        </DataForm>

        <LogoutButton
          title="Log out"
          type="button"
          startIcon={<LogoutIcon />}
          loadingPosition="start"
          loading={isUserPending}
          onClick={() => dispatch(logOut(dispatch))}
        >
          Log Out
        </LogoutButton>
      </DataControlContainer>
    </UserControlContainer>
  );
};
