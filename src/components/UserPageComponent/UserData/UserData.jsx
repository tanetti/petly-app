import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
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
} from './UserDataStyled';
import photoCover from 'images/photo-сover.png';

export const UserData = () => {
  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [bithday, setBithday] = useState(true);
  const [phone, setPhone] = useState(true);
  const [city, setCity] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
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

  const onSubmitForm = e => {
    // Object.entries(e).forEach(([key, value]) => {
    // console.log([key, value]);
    // });
  };

  const handleChange = e => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleEditPhoto = e => {
    filePicker.current.click();
    const formData = new FormData();
    formData.append('file', selectedFile);
  };

  return (
    <Wrapper>
      <WrapperTitle>My information:</WrapperTitle>
      <DataUser>
        <WrapperPhoto>
          <Img src={photoCover} alt="photo" />
          <EditPhotoBtn type="button" onClick={handleEditPhoto}>
            <CameraIcon />
            Edit photo
          </EditPhotoBtn>
          <Hidden
            type="file"
            ref={filePicker}
            onChange={handleChange}
            accept="image/*,.png,.jpg,.gif,.web,"
          ></Hidden>
        </WrapperPhoto>

        <WrapperForm>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
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
            <Input disabled={bithday} type="data" />
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
