import { API_URL } from "../../config";

export const getCommentsPosts = async (path:string) => {
  return await fetch(`${API_URL}/${path}?deleted=true`);
};
