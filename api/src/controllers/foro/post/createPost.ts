import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';
import { User } from '../../../models/Users'
import { postUser } from '../../users/postUser';

const PostModel = getModelForClass(Post);
const UserModel = getModelForClass(User);

export const createPost = async (req: Request, res: Response) => {
    try {
      const { title, content, image, author } = req.body
      
      // CREAMOS EL POST
      const post = new PostModel({title, content, image}) 

      // BUSCAMOS EL USUARIO QUE CREO EL POST
      const addingUser = await UserModel.findById(author)

      //AGREGAMOS EL POST AL USUARIO
      addingUser?.posts.push(post._id)
      post.author = addingUser!._id

      //GUARDAMOS AMBOS MODELOS
      await addingUser?.save()
      await post.save()
      res.json(post)
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error posting a post ${req.body.id}`, error })
    }
}