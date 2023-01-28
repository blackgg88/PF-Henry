import { useEffect, useState } from "react";
// import { getPosts } from "../../../../../../helpers/foro/posts/getPosts";
// import { postPost } from "../../../../../../helpers/foro/posts/postPost";
// import { likePosts } from "../../../../../../helpers/foro/posts/likePosts";
// import { putPost } from "../../../../../../helpers/foro/posts/putPost";
// import { deletePosts } from "../../../../../../helpers/foro/posts/deletePosts";
import { getCommentsPosts } from '../../../../../../helpers/foro/getCommentsPosts'
import { postCommentsPosts } from "../../../../../../helpers/foro/postCommentsPosts";
import { putCommentsPosts } from "../../../../../../helpers/foro/putCommentsPosts";
import { deleteCommentsPosts } from "../../../../../../helpers/foro/deleteCommentsPosts";
import { getLikes } from "../../../../../../helpers/foro/getLikes";

import Swal from "sweetalert2";
//------- USUARIO HELPER ----------
import { useAuth0 } from "@auth0/auth0-react";
//---------------

interface editPost {
  content: string;
  id: string;
}

export function useForoHome() {
  const { user } = useAuth0();

  const [allPost, setAllPost] = useState([]);
  const [addLike, setAddLike] = useState<boolean>(false);
  const [addPost, setAddPost] = useState<boolean>(false);
  const [addEdit, setAddEdit] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [editPost, setEditPost] = useState<editPost>({
    content: "",
    id: "",
  });
  const [form, setForm] = useState({
    email: user?.email,
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    getCommentsPosts("posts")
      .then(res => res.json())
      .then(res => setAllPost(res));
  }, [addLike, addPost, addEdit]);

  const editHandlerModal = (id: string, content: string) => {
    setEditOpen(!editOpen);
    setEditPost({
      ...editPost,
      id,
      content,
    });
  };

  const likeHandler = (post: string) => {
    getLikes({
      email: user?.email,
      post,
    }, 'posts').then(() => {
      setAddLike(!addLike);
    });
  };

  const handlerSubmit = () => {
    if (user?.email) {
      setForm({
        ...form,
        email: user?.email,
      });
      postCommentsPosts(form, 'posts').then(() => {
        setAddPost(!addPost);
        setForm({
          ...form,
          title: "",
          content: "",
          image: "",
        });
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email no es valido!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  const handlerLike = () => {
    getLikes({
      id: "63c6f11bf46e034dfcbeeae6",
      post: "63d1f32e866456f173d36227",
    }, 'posts')
      .then(res => res.json())
      .then(res => alert(res));
  };

  const handlerChangePost = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user?.email) {
      setForm({
        ...form,
        email: user?.email,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postCommentsPosts(form, "posts").then(response =>
      getCommentsPosts("posts")
        .then(res => res.json())
        .then(res => setAllPost(res))
    );

    setForm({
      ...form,
      title: "",
      content: "",
      image: "",
    });
  };

  const onDeletePost = (id: string) => {
    deleteCommentsPosts({
      email: form.email,
      idPost: id,
    }, 'posts').then(res =>
      getCommentsPosts('posts')
        .then(res => res.json())
        .then(res => setAllPost(res))
    );
  };

  const handlerSubmitEdit = async (content: string, id: string) => {
    await putCommentsPosts({ content }, id, 'posts').then(res => {
      setAddEdit(!addEdit);
    });
  };

  return [
    form,
    allPost,
    editOpen,
    editPost,
    {
      likeHandler,
      handlerLike,
      handlerSubmit,
      handlerSubmitEdit,
      handlerChangePost,
      submitPost,
      onDeletePost,
      setAllPost,
      editHandlerModal,
      setEditOpen,
      setEditPost,
    },
  ];
}
