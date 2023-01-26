import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { Comment } from '../../../models/Comments';

const PostModel = getModelForClass(Comment);

export const likeComment = async (req: Request, res: Response) => {
    try {
        const {id, comment} = req.body

        // Buscamos el comment al cual se le desea dar like
        const commentLiked = await PostModel.findById(comment)

        // Si el post existe hacemos una comprobacion
        if (commentLiked) {
            
            //Si este commentario ya tiene like de este usuario, se lo quitamos
            if (commentLiked.likes.includes(id)) {
                commentLiked.likes = [...commentLiked.likes].filter(e=> e!=id)
                await commentLiked.save()
                return res.status(200).json(`el usuario ${id} ha quitado su like del comentario` )
            } else {

                //Si el usuario no ha dado like al post se lo agregamos
                commentLiked.likes.push(id)
                await commentLiked.save()
                return res.status(200).json(`el usuario ${id} ha dado Like a este comentario`)
            }
        } else {
            //Si el comentario no existe enviamos el error
            res.status(404).json({ msg: `No existe el comentario`})
        }

        res.json('Like de ' +  id);
    } catch (error) {
        res.status(400).json({ message: 'Error getting post', error })
    }
}