import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';

const CommentModel = getModelForClass(Comment);

export const deleteComment = async (req: Request, res: Response) => {
    try {
      const commentDeleted = await CommentModel.findByIdAndDelete(req.params.id)
      res.json({ message: `post deleted: ${commentDeleted?.content}` })
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error delete post :${req.params.id}`, error })
    }
  }