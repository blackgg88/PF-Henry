import { API_URL } from '../../../../config';

export async function userFetch(email: string) {
  const response = await fetch(`${API_URL}/users/${email}`);
  const data = await response.json();
  return data;
}

export async function putUserFetch(username: string, picture: string, _id: string) {
  const changes = { username, picture };
  const response = await fetch(`${API_URL}/users/${_id}`, {
    method: 'PUT',
    body: JSON.stringify(changes),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();

  return data;
}
