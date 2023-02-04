import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';
import { User } from '../../../models/Users';
import { getUserByEmail } from '../../users/getUserByEmail';

const PostModel = getModelForClass(Post);
const UserModel = getModelForClass(User);

export const getPostByUser = async (req: Request, res: Response) => {
    
    
    try {
        const {email} = req.params

        const Allposts = await PostModel.find()
        .populate("author")
        .populate({
            path: "comments",
            select: "content author likes deleted created",
            populate: {
                path: "author",
            }
        })
        .select('-__v');

        const user = await UserModel.findOne({ email: email })
      

        if (user) {
            res.json(Allposts.filter(e=> {
                if (!e.deleted && e.author._id==user._id.toString()) {
                    return e
                }
            }))
        } else {
            return res.json({err: 'user no existe'})
        }
        

    } catch (error) {
        res.status(400).json({ message: 'Error getting post', error })
    }
}