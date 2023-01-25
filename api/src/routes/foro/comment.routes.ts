import { Router } from 'express'
import { getAllComment } from '../../controllers/foro/comment/getAllComment'
import { getCommentById } from '../../controllers/foro/comment/getCommentById'
import { putComment } from '../../controllers/foro/comment/putComment'
import { deleteComment } from '../../controllers/foro/comment/deleteComment'
import { createComment } from '../../controllers/foro/comment/createComment'


const comment = Router()

comment.get('/', getAllComment) // <--- controlador

comment.get('/:id', getCommentById)

comment.post('/', createComment)

comment.put('/:id', putComment)

comment.delete('/', deleteComment)

export default comment;