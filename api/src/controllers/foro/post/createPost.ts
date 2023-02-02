import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { Post } from "../../../models/Post";
import { User } from "../../../models/Users";
import { postUser } from "../../users/postUser";

const PostModel = getModelForClass(Post);
const UserModel = getModelForClass(User);

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, image, email,category } = req.body;

    if ( !email || !content || !title|| !category) {
      return res.status(404).json({ err: "Faltan parametros" });
    }

    // BUSCAMOS EL USUARIO QUE CREO EL POST CON SU EMAIL
    //const addingUser = await UserModel.findById(email)
    const author = await UserModel.findOne({ email }).select("-__v");

    // VALIDAMOS QUE EXISTA EL USER
    if (!author) {
      return res.status(404).json({
        err: `El usuario con el email ${email} no existe en la base de datos`,
      });
    }
    
    // CREAMOS EL POST
    const post = new PostModel({ title, content, image,category });

    if (post != null) {
      //AGREGAMOS EL POST AL USUARIO
      author.posts.push(post._id);
      post.author = author._id;

      //GUARDAMOS LOS MODELOS
      await author.save();
      await post.save();

      return res.json(post);
    } else return res
      .status(404)
      .json({ err: "No existe el post que quieres comentar" });

  } catch (error) {
    res
      .status(400)
      .json({ message: `Error posting a post ${req.body.id}`, error });
  }
};
