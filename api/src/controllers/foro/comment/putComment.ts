import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';

const CommentModel = getModelForClass(Comment);

export const putComment = async (req: Request, res: Response) => {
    try {
      const comment = await CommentModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )
      return res.json(comment)
    } catch (error) {
      return res.status(400).json({
        message: `Error updating the comment: ${req.params.id}`,
        error,
      })
    }
  }