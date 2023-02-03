import { useForoHome } from "./hooks/useForoHome";
import { Foro_card } from "../Foro_card";
import Foro_editPost from "../EditPost/Foro_editPost";
//------- USUARIO HELPER ----------
import FilterPanel from "../FIlter_panel";
import Foro_createPost from "../Foro_createPost";
import { useAuth0 } from '@auth0/auth0-react';
//---------------

export default function ForoHome() {
  //-------CUSTOM HOOK-------
  const [
    form,
    commentary,
    allPost,
    editOpen,
    editPost,
    allPostRespaldo,
    searchInput,
    selectedTag,
    previewTag,
    {
      likeHandler,
      handlerSubmit,
      handlerSubmitEdit,
      handlerChangePost,
      onDeletePost,
      onDeleteComment,
      editHandlerModal,
      setEditOpen,
      handlerChangeComment,
      submitComment,
      likeCommentHandler,
      setallPostRespaldo,
      onChangeSearch,
      handleFilterByTitle,
      resetFilter,
      handleTags,
      handleFilterByCategory,
      HandlerpreviewTags,
      handlerQuitPreview
    },
  ]: any = useForoHome();
  //-------CUSTOM HOOK-------

  const {user, isAuthenticated} = useAuth0()

  console.log(searchInput)

  return (
    <div className='foro_home_container'>
      {editOpen && (
        <Foro_editPost
          onSave={handlerSubmitEdit}
          id={editPost.id}
          content={editPost.content}
          onClose={setEditOpen}
        />
      )}
      <div className='foro_posts_container'>
        {
          isAuthenticated&&
          <Foro_createPost
          selectedTag={selectedTag}
          handleTags={handleTags}
          form={form}
          handlerChangePost={handlerChangePost}
          handlerSubmit={handlerSubmit}
          previewTag={previewTag}
          HandlerpreviewTags={HandlerpreviewTags}
          handlerQuitPreview={handlerQuitPreview}
        />
        }
        

        {
        
        allPost.length?
        allPost?.map((post: any) => (
          <Foro_card
            commentary={commentary}
            handlerChangeComment={handlerChangeComment}
            submitComment={submitComment}
            key={post._id}
            id={post._id}
            title={post.title}
            content={post.content}
            img={post.image}
            post={post}
            author={post.author.userName || post.author.username}
            email={post.author.email}
            userId={post.author._id}
            comments={post.comments}
            likes={post.likes}
            onDeletePost={onDeletePost}
            onLikePost={likeHandler}
            onEdit={editHandlerModal}
            created={post.created}
            onDeleteComment={onDeleteComment}
            likeCommentHandler={likeCommentHandler}
            category={post.category}
            
          />
        )):
        <img className="foro_home_loaderGif" src="https://usagif.com/wp-content/uploads/loading-25.gif" alt="loader" />
      }
      </div>

      <FilterPanel
      handleFilterByCategory={handleFilterByCategory} resetFilter={resetFilter} handleFilterByTitle={handleFilterByTitle} onChangeSearch={onChangeSearch} searchInput={searchInput} />
    </div>
  );
}
