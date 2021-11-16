import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const updateExistingRequest = async (
  userId: string,
  _id: string,
  answer: string,
  answerValue: boolean,
): Promise<AuthApiData> => {
  const data = { _id, answer, answerValue };
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
    credentials: 'include',
  };
  return await fetch(`${userId}/update`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({
      error: { message: `Unable to connect to server. Please try again: ${err}` },
    }));
};

export default updateExistingRequest;
