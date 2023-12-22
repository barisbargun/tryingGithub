import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../hooks/useTypedHooks';

const PostPage = () => {
  const [post, setPost] = useState<IPost>();

  const posts = useStoreState((state) => state.posts);
  const _deletePost = useStoreActions((action) => action.deletePost);

  const deletePost = async (id: number) => {
      _deletePost({id:id});
      navigate("/");
  }

  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    isMounted && setPost(posts.find((v:IPost) => v.id == id)); 
    return () => {isMounted = false; setPost(undefined)}
  },[posts])

  const navigate = useNavigate();
  return (
    <main className='postPage'>
      {post && 
      <>
      <div className='postInfo'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className='buttons'>
      <button 
      role='patchPost'
      className='patchPost' 
      aria-label='Paatch Post'
      onClick={() => navigate(`/post/${id}/edit`)}>Edit</button>
      
      <button 
      role='deletePost'
      className='deletePost' 
      aria-label='Remove Post'
      onClick={() => deletePost(Number(id))}>Sil</button>
      </div>
      
      </>
      }
      
    </main>
  )
}

export default PostPage