import { Router } from 'express'
import { getAllComment } from '../../controllers/foro/comment/getAllComment'
import { getCommentById } from '../../controllers/foro/comment/getCommentById'
import { putComment } from '../../controllers/foro/comment/putComment'
import { deleteComment } from '../../controllers/foro/comment/deleteComment'
import { createComment } from '../../controllers/foro/comment/createComment'
import { likeComment } from '../../controllers/foro/comment/likeComment'


const comment = Router()

comment.get('/', getAllComment) // <--- controlador

comment.post('/like', likeComment)

comment.get('/:id', getCommentById)

comment.post('/', createComment)

comment.put('/:id', putComment)

comment.delete('/', deleteComment)

export default comment;