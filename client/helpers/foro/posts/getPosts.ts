import { API_URL } from '../../../config'

export const getPosts = async () => {
  return await fetch(`${API_URL}/posts?deleted=true`)
}