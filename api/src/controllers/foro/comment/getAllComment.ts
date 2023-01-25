import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';

const CommentModel = getModelForClass(Comment);

export const getAllComment = async (req: Request, res: Response) => {
    try {
        const Allcomments = await CommentModel.find().select('-__v');
        res.json(Allcomments);
    } catch (error) {
        res.status(400).json({ message: 'Error getting comment', error })
    }
}