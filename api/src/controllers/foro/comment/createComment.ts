import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';
import { Post } from '../../../models/Post';

const CommentModel = getModelForClass(Comment);
const PostModel = getModelForClass(Post);

export const createComment = async (req: Request, res: Response) => {
    try {
      const {post, author, content} = req.body

      if (!post || !author || !content) {
        return res.status(404).json({err: 'Faltan parametros'})
      }

      //CREAMOS EL COMENTARIO
      const comment = new CommentModel({post, author, content})
      await comment.save()
    
      // LE AÑADIMOS EL COMENTARIO AL POST
      const Post = await PostModel.findById(post)

      if (Post!=null) {
        Post.comments.push(comment._id);
        await Post.save();
        res.json(comment)
      } else {
        res.status(404).json({err: 'No existe el post que quieres comentar'})
      }
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error posting a comment ${req.body.id}`, error })
    }
}