import { makeToast } from 'utilities/makeToast';

export const convertImageToBase64Url = (file, setUrlToState) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    setUrlToState(fileReader.result);
  };
  fileReader.onerror = error => {
    makeToast(error);
  };
};
