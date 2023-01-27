import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Post } from '../../../models/Post';

const PostModel = getModelForClass(Post);

export const likePost = async (req: Request, res: Response) => {
    try {
        const {id, post} = req.body

        // Buscamos el post al cual se le desea dar like
        const postLiked = await PostModel.findById(post)

        // Si el post existe hacemos una comprobacion
        if (postLiked) {

            //Si este post ya tiene like de este usuario, se lo quitamos
            if (postLiked.likes.includes(id)) {
                postLiked.likes = [...postLiked.likes].filter(e=> e!=id)
                await postLiked.save()
                return res.status(200).json(`el usuario ${id} ha quitado su like del post` )
            } else {

                //Si el usuario no ha dado like al post se lo agregamos
                postLiked.likes.push(id)
                await postLiked.save()
                return res.status(200).json(`el usuario ${id} ha dado Like a este post`)
            }
        } else {
            //Si el post no existe enviamos el error
            res.status(404).json({ msg: `No existe el post`})
        }

        res.json('Like de ' +  id);
    } catch (error) {
        res.status(400).json({ message: 'Error getting post', error })
    }
}