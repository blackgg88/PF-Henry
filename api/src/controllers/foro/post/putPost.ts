import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post'; // <---hay un error?

const PostModel = getModelForClass(Post)

export const putPost = async (req: Request, res: Response) => {
    try {
      const post = await PostModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )
      return res.json(post)
    } catch (error) {
      return res.status(400).json({
        message: `Error updating the post: ${req.params.id}`,
        error,
      })
    }
  }