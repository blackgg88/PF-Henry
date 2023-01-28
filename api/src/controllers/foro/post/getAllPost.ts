import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';
import { User } from '../../../models/Users';

const PostModel = getModelForClass(Post);

export const getAllPost = async (req: Request, res: Response) => {
    
    const { deleted } = req.query;
    try {
        const Allposts = await PostModel.find()
        .populate("author")
        .populate("likes")
        .populate({
            path: "comments",
            select: "content author likes deleted created",
            populate: {
                path: "author",
            }
        })
        .select('-__v');

        if(deleted){
            return res.json(Allposts.filter(e => e.deleted === false).reverse());
        } else{
            return res.json(Allposts.reverse());
        }
    } catch (error) {
        res.status(400).json({ message: 'Error getting post', error })
    }
}