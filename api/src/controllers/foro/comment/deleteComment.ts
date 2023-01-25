import { Request, Response } from 'express';
import { getModelForClass, Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { Comment } from '../../../models/Comments';
import { Post } from '../../../models/Post';
import { ObjectId } from 'mongoose';

const CommentModel = getModelForClass(Comment);
const PostModel = getModelForClass(Post);

export const deleteComment = async (req: Request, res: Response) => {
    try {
      const {id, post} = req.body;

      const commentDeleted = await CommentModel.findByIdAndDelete(id)
      
      const myPost = await PostModel.findById(post).select('-__v');

      // Buscamos el post que contiene el comentario
      const Post = await PostModel.findById(post).select('-__v');

      //Eliminamos el comentario filtrando todos menos ese y asignandoselo al post
      const filters = Post?.comments.filter(e=> e!=id)
      if (Post != undefined && Post.comments != undefined && filters!=undefined) {
        Post.comments = filters
      }  

      //Guardamos los cambios
      await Post?.save();
      
      res.json({ message: `post deleted: ${commentDeleted?.content}` })
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error delete post :${req.params.id}`, error })
    }
  }