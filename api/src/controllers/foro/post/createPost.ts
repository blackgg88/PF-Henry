import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';
import { User } from '../../../models/Users'
import { postUser } from '../../users/postUser';

const PostModel = getModelForClass(Post);
const UserModel = getModelForClass(User);

export const createPost = async (req: Request, res: Response) => {
    try {
      const { title, content, image, email } = req.body
      
      // CREAMOS EL POST
      const post = new PostModel({title, content, image}) 

      // BUSCAMOS EL USUARIO QUE CREO EL POST CON SU EMAIL
      //const addingUser = await UserModel.findById(email)
      const addingUser = await UserModel.findOne({ email }).select('-__v');

      if (!addingUser) {
        return res.status(404).json({err: `El usuario con el email ${email} no existe en la base de datos`})
      }

      //AGREGAMOS EL POST AL USUARIO
      addingUser.posts.push(post._id)
      post.author = addingUser._id

      //GUARDAMOS AMBOS MODELOS
      await addingUser.save()
      await post.save()
      res.json(post)
    } catch (error) {
      res
        .status(400)
        .json({ message: `Error posting a post ${req.body.id}`, error })
    }
}