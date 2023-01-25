import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';

const PostModel = getModelForClass(Post);

export const getAllPost = async (req: Request, res: Response) => {
    try {
        const Allposts = await PostModel.find().select('-__v');
        res.json(Allposts);
    } catch (error) {
        res.status(400).json({ message: 'Error getting post', error })
    }
}