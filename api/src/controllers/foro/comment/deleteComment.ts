import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';
import { Post } from '../../../models/Post';
import { User } from "../../../models/Users";

const CommentModel = getModelForClass(Comment);
const PostModel = getModelForClass(Post);
const UserModel = getModelForClass(User);

export const deleteComment = async (req: Request, res: Response) => {
    try {
      const { email, idComment } = req.body;

      const commentDeleted = await CommentModel.findById(idComment);

      if (commentDeleted) {
        commentDeleted.deleted = true;
        await commentDeleted.save();
      }

      //BUSCAMOS EL USUARIO QUE TENIA EL COMMENT
      const userWithComment = await UserModel.findOne({ email }).select("-__v");


      if (userWithComment == null) {
        return res.status(404).json({ error: `Ningun usuario posee este comment` });
      } else {
        // Buscamos el post que contiene el comentario
        const Post = await PostModel.findById(idComment).select("-__v");

        //Eliminamos el comentario filtrando todos menos ese y asignandoselo al post
        const filters = Post?.comments.filter(e => e != idComment);
        if (
          Post != undefined &&
          Post.comments != undefined &&
          filters != undefined
        ) {
          Post.comments = filters;
        }
  
        //Guardamos los cambios
        await Post?.save();
  
        return res.json({ message: `Comentario eliminado: ${commentDeleted?.content}` });
      }

    } catch (error) {
      return res
        .status(400)
        .json({ message: `Error delete post :${req.params.id}`, error })
    }
  }