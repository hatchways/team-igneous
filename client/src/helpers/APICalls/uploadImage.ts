import { AuthApiData } from '../../interface/AuthApiData';

const uploadImage = async (base64EncodedImage: File): Promise<AuthApiData> => {
  const data = new FormData();
  data.append('picture', base64EncodedImage);

  const fetchOptions = {
    method: 'POST',
    body: base64EncodedImage,
  };

  return await fetch(`/imageUpload`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => {
      console.log('UPLOADIMAGE-ERROR: ', err);
    });
};

export default uploadImage;
