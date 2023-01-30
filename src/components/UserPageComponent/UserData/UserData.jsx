import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import {
  Wrapper,
  DataUser,
  WrapperTitle,
  WrapperPhoto,
  Img,
  EditPhotoBtn,
  CameraIcon,
  WrapperForm,
  Form,
  Input,
  CreateIconBtn,
  CreateIcon,
  CreateIconDone,
  LogOutBtn,
  LogOutIcon,
  Hidden,
  WrapperUpload,
  PickBtn,
  UploadBtn,
  ImgInfo,
  ImgInfoItem,
} from './UserDataStyled';
import photoCover from 'images/photo-сover.png';

export const UserData = () => {
  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [bithday, setBithday] = useState(true);
  const [phone, setPhone] = useState(true);
  const [city, setCity] = useState(true);
  const [btnUpload, setBtnUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();
  const filePicker = useRef(null);

  const { handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      bithday: '',
      phone: '',
      city: '',
    },
  });

  // const hostUrl = '';

  const onSubmitName = e => {
    console.log(e);
  };

  const handleChange = e => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    // if (!selectedFile) {
    //   alert('please select a file');
    //   return;
    // }
    console.log(selectedFile);
    setSelectedFile(null);

    const formData = new FormData();
    formData.append('file', selectedFile);
    setBtnUpload(!true);
    // const res = await fetch(hostUrl, {
    //   method: 'POST',
    //   body: formData,
    // });
    // const data = await res.json();

    // setUploaded(data);
  };

  const handlePick = e => {
    filePicker.current.click();
  };

  return (
    <Wrapper>
      <WrapperTitle>My information:</WrapperTitle>
      <DataUser>
        <WrapperPhoto>
          {btnUpload && (
            <WrapperUpload>
              {!selectedFile && (
                <div>
                  {' '}
                  <PickBtn onClick={handlePick}>Pick file</PickBtn>
                  <Hidden
                    type="file"
                    ref={filePicker}
                    onChange={handleChange}
                    accept="image/*,.png,.jpg,.gif,.web,"
                  ></Hidden>
                </div>
              )}
              {selectedFile && (
                <ImgInfo>
                  <ImgInfoItem>Name: {selectedFile.name}</ImgInfoItem>
                  <ImgInfoItem>Type: {selectedFile.type}</ImgInfoItem>
                  <ImgInfoItem>Size: {selectedFile.size + 'b'}</ImgInfoItem>
                </ImgInfo>
              )}{' '}
              {selectedFile && (
                <UploadBtn onClick={handleUpload}>Upload now!</UploadBtn>
              )}
              {/* {uploaded && (
                <div>
                  <h2>{uploaded.filename}</h2>
                  <img alt="" src={uploaded.filePath} width="200" />
                </div>
              )} */}
            </WrapperUpload>
          )}

          <Img src={photoCover} alt="photo" />
          <EditPhotoBtn type="button" onClick={() => setBtnUpload(!btnUpload)}>
            <CameraIcon />
            Edit photo
          </EditPhotoBtn>
        </WrapperPhoto>

        <WrapperForm>
          <Form onSubmit={handleSubmit(onSubmitName)}>
            Name:
            <Input disabled={name} type="text" />
            <CreateIconBtn type="submit" onClick={() => setName(!name)}>
              {name ? <CreateIcon /> : <CreateIconDone />}
            </CreateIconBtn>
            Email:
            <Input disabled={email} type="email" />
            <CreateIconBtn type="submit" onClick={() => setEmail(!email)}>
              {email ? <CreateIcon /> : <CreateIconDone />}
            </CreateIconBtn>
            Bithday:
            <Input disabled={bithday} type="number" />
            <CreateIconBtn type="submit" onClick={() => setBithday(!bithday)}>
              {bithday ? <CreateIcon /> : <CreateIconDone />}
            </CreateIconBtn>
            Phone:
            <Input disabled={phone} type="text" />
            <CreateIconBtn type="submit" onClick={() => setPhone(!phone)}>
              {phone ? <CreateIcon /> : <CreateIconDone />}
            </CreateIconBtn>
            City:
            <Input disabled={city} type="text" />
            <CreateIconBtn type="submit" onClick={() => setCity(!city)}>
              {city ? <CreateIcon /> : <CreateIconDone />}
            </CreateIconBtn>
          </Form>

          <LogOutBtn type="button">
            <LogOutIcon /> Log Out
          </LogOutBtn>
        </WrapperForm>
      </DataUser>
    </Wrapper>
  );
};
