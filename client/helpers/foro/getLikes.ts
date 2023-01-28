import { API_URL } from "../../config";

export const getLikes = async (body: any, path: string) => {
  return await fetch(`${API_URL}/${path}/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

/*

  {
    "id": "63c6f11bf46e034dfcbeeae6",
    "post": "63d1f32e866456f173d36227"
  }

*/
