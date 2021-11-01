import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const createNewRequest = async (
  user_id: string,
  sitter_id: string,
  start: number,
  end: number,
  accepted: boolean,
  declined: boolean,
  paid: boolean,
): Promise<AuthApiData> => {
  const data = { user_id, sitter_id, start, end, accepted, declined, paid };
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
    credentials: 'include',
  };
  return await fetch(`/request/new`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({
      error: { message: `Unable to connect to server. Please try again: ${err}` },
    }));
};

export default createNewRequest;
