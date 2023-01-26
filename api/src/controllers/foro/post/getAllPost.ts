import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';
import { User } from '../../../models/Users';

const PostModel = getModelForClass(Post);

export const getAllPost = async (req: Request, res: Response) => {
    try {
    
        const Allposts = await PostModel.find()
            .populate("author", "userName")
            .populate("likes","userName")
            .populate({
                path: "comments",
                select: "content author likes",
                populate: {
                    path: "author",
                    select: "userName"
                }
            })
            .select('-__v');

        res.json(Allposts);
    } catch (error) {
        res.status(400).json({ message: 'Error getting post', error })
    }
}