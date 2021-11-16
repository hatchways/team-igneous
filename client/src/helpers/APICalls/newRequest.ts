import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const createNewRequest = async (
  userName: string,
  userId: string,
  sitterName: string,
  sitterId: string,
  sitterProfile: string,
  start: string,
  end: string,
  accepted: boolean,
  declined: boolean,
  paid: boolean,
): Promise<AuthApiData> => {
  const data = { userName, userId, sitterName, sitterId, sitterProfile, start, end, accepted, declined, paid };
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
    credentials: 'include',
  };
  return await fetch(`/${userId}/new`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({
      error: { message: `Unable to connect to server. Please try again: ${err}` },
    }));
};

export default createNewRequest;
