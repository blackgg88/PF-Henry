import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';
import { Post } from '../../../models/Post';
import {User} from '../../../models/Users'

const CommentModel = getModelForClass(Comment);
const PostModel = getModelForClass(Post);
const UserModel = getModelForClass(User)

export const createComment = async (req: Request, res: Response) => {
    try {
      const {post, email, content} = req.body

      if (!post || !email || !content) {
        return res.status(404).json({err: 'Faltan parametros'})
      }

      //BUSCAMOS EL AUTHOR
      const author = await UserModel.findOne({ email }).select('-__v');

      //CREAMOS EL COMENTARIO
      if(author){
        const comment = new CommentModel({post, author: author._id, content})
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
      }
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error posting a comment ${req.body.id}`, error })
    }
}