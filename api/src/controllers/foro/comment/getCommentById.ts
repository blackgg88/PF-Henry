import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';

const CommentModel = getModelForClass(Comment);

export const getCommentById = async (req: Request, res: Response) => {
    try {
      const comment = await CommentModel.findById(req.params.id).select('-__v');
      res.json(comment);
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error getting a comment by ${req.params.id}`, error });
    }
  };