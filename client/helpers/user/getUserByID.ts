import { API_URL } from '../../config';

export const UserByID = async (id: string) => {
  const user = fetch(`${API_URL}/users/${id}`)
    .then((res) => res.json())
    .then((res) => res);

  return await user;
};
