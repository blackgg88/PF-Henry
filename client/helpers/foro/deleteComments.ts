import { API_URL } from '../../config'

export const deleteComments = async (id: string) => {
    return await fetch(`${API_URL}/comments/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
}