import { AuthApiData } from '../../interface/AuthApiData';

const uploadImage = async (Image: File): Promise<AuthApiData> => {
  const data = new FormData();
  data.append('uploads', Image);

  const fetchOptions = {
    method: 'POST',
    body: data,
  };

  return await fetch(`/imageUpload`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => {
      console.log('UPLOADIMAGE-ERROR: ', err);
    });
};

export default uploadImage;
