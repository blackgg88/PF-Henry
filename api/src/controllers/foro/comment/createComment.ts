import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { Comment } from "../../../models/Comments";
import { Post } from "../../../models/Post";
import { User } from "../../../models/Users";

const CommentModel = getModelForClass(Comment);
const PostModel = getModelForClass(Post);
const UserModel = getModelForClass(User);

export const createComment = async (req: Request, res: Response) => {
  try {
    const { post, email, content } = req.body;

    if (!post || !email || !content) {
      return res.status(404).json({ error: "Faltan parametros" });
    }

    //BUSCAMOS EL AUTHOR
    const author = await UserModel.findOne({ email }).select("-__v");

    // VALIDAMOS QUE EXISTA EL USER
    if (!author) {
      return res.status(404).json({
        err: `El usuario con el email ${email} no existe en la base de datos`,
      });
    }

    //CREAMOS EL COMENTARIO

    const comment = new CommentModel({ post, author: author._id, content });
    
    
    const Post = await PostModel.findById(post);
    
    
    if (comment != null) {
      // LE AÑADIMOS EL COMENTARIO AL POST Y AL USER
      author.comments.push(comment._id);
      Post?.comments.push(comment._id);
      
      comment.author = (author._id)

      //GUARDAMOS LOS MODELOS
      await comment.save();
      await Post?.save();
      await author.save();

      return res.json(comment);
    } else return res
      .status(404)
      .json({ err: "No existe el post que quieres comentar" });
    
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error posting a comment ${req.body.id}`, error });
  }
};
