import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';
import { User } from '../../../models/Users';

const PostModel = getModelForClass(Post);
const UserModel = getModelForClass(User)

export const likePost = async (req: Request, res: Response) => {
    try {
        const {email, post} = req.body

        // Buscamos el post al cual se le desea dar like
        const postLiked = await PostModel.findById(post)

        // Si el post existe hacemos una comprobacion
        if (postLiked)  {

            //Si este post ya tiene like de este usuario, se lo quitamos
            if (postLiked.likes.includes(email)) {
                postLiked.likes = [...postLiked.likes].filter(e=> e!=email)
                await postLiked.save()
                return res.status(201).json(`el usuario ha quitado su like del post` )
            } else {

                //Si el usuario no ha dado like al post se lo agregamos
                postLiked.likes.push(email)
                await postLiked.save()
                return res.status(201).json(`el usuario  ha dado Like a este post`)
            } 
        } else {
            //Si el post no existe enviamos el error
            res.status(404).json({ msg: `No existe el post`})
        }

    } catch (error) {
        res.status(400).json({ message: 'Error getting post', error })
    }
}