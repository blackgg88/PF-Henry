import { Router } from 'express'
import { getAllPost } from '../../controllers/foro/post/getAllPost'
import { getPostById } from '../../controllers/foro/post/getPostById'
import { putPost } from '../../controllers/foro/post/putPost'
import { deletePost } from '../../controllers/foro/post/deletePost'
import { createPost } from '../../controllers/foro/post/createPost'

const post = Router()

post.get('/', getAllPost) // <--- controlador

post.get('/:id', getPostById)

post.post('/', createPost)

post.put('/:id', putPost)

post.delete('/:id', deletePost)

export default post;