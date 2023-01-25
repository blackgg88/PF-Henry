import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';

const PostModel = getModelForClass(Post);

export const createPost = async (req: Request, res: Response) => {
    try {
      const post = new PostModel(req.body)
      await post.save()
      res.json(post)
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error posting a post ${req.body.id}`, error })
    }
}