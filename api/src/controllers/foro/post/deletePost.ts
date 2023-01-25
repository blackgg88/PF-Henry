import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post'; 

const PostModel = getModelForClass(Post)

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postDeleted = await PostModel.findByIdAndDelete(req.params.id)
    res.json({ message: `post deleted: ${postDeleted?.title}` })
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error delete post :${req.params.id}`, error })
  }
}