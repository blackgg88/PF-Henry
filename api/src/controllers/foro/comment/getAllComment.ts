import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';

const CommentModel = getModelForClass(Comment);

export const getAllComment = async (req: Request, res: Response) => {
    const { deleted } = req.query;
    try {
        const Allcomments = await CommentModel.find().select('-__v');
        if(deleted){
            return res.json(Allcomments.filter(e => e.deleted === false));
        } else{
            return res.json(Allcomments);
        }
    } catch (error) {
        res.status(400).json({ message: 'Error getting comment', error })
    }
}