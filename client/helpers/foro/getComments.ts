import { API_URL } from '../../config'

export const getComments = async () => {
  return await fetch(`${API_URL}/comments`)
}