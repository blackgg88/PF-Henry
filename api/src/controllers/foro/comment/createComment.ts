import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';

const CommentModel = getModelForClass(Comment);

export const createComment = async (req: Request, res: Response) => {
    try {
      const comment = new CommentModel(req.body)
    
      await comment.save()
      res.json(comment)
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error posting a comment ${req.body.id}`, error })
    }
}