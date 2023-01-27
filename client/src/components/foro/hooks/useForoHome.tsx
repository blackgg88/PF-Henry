import { getPosts } from "../../../../helpers/foro/getPosts";
import { likePosts } from "../../../../helpers/foro/likePosts";
import { useEffect, useState } from "react";
import { postPost } from "../../../../helpers/foro/postPost";
import { putPost } from "../../../../helpers/foro/putPost";
import { deletePosts } from "../../../../helpers/foro/deletePosts";

//------- USUARIO HELPER ----------
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { useAuth0 } from '@auth0/auth0-react';
import { userInterface } from '../../../Redux/slice/user/user.slice';
//---------------

export function useForoHome() {
  const [edit, setEdit] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [allPost, setAllPost] = useState([]);


  


  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    getPosts()
      .then((res) => res.json())
      .then((res) => setAllPost(res));
  }, []);


  const handlerLike = () => {
    likePosts({
      id: "63c6f11bf46e034dfcbeeae6",
      post: "63d1f32e866456f173d36227",
    })
      .then((res) => res.json())
      .then((res) => alert(res));
  };

  const handlerChangePost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postPost(form).then((response) =>
      getPosts()
        .then((res) => res.json())
        .then((res) => setAllPost(res))
    );

    setForm({
      author: "",
      title: "",
      content: "",
      image: "",
    });
  };

 
  

  const onDeletePost = (id: string, userId: string) => {
    deletePosts({
      userId: userId,
      idPost: id,
    }).then((res) =>
      getPosts()
        .then((res) => res.json())
        .then((res) => setAllPost(res))
    );
  };

  return [
    form,
    allPost,
    { handlerLike, handlerChangePost, submitPost, onDeletePost }
  ];
}
