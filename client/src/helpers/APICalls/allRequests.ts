import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const getAllRequests = async (userId: string): Promise<AuthApiData> => {
  console.log('USEROID', userId);
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/${userId}/requests`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({
      error: { message: `Unable to connect to server. Please try again: ${err}` },
    }));
};

export default getAllRequests;
