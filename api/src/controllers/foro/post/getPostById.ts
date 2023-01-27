import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';


const PostModel = getModelForClass(Post);

//find by ID // devuelve la categoria buscado por ID
export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await PostModel.findById(req.params.id).select('-__v');
    res.json(post);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error getting a post by ${req.params.id}`, error });
  }
};
