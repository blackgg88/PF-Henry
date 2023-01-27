import { API_URL } from '../../config'

export const postComments = async (body: any) => {
    return await fetch(`${API_URL}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
  }
  
  /*
    {
        "content": "Me encanto tu post!",
        "post": "63d1f32e866456f173d36227",
        "author": "63c7f94c070c6669b34da446",
    }
  */