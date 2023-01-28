import { API_URL } from "../../config";

export const deleteCommentsPosts = async (body: any, path: string, id?:string) => {
  if (path == "posts") {
    return await fetch(`${API_URL}/posts`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  if (path == "comments") {
    return await fetch(`${API_URL}/comments/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }
};

/*

    {
      email
      idPost
    }

*/
