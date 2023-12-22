import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../hooks/useTypedHooks';

const EditPost = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const {id} = useParams();
  const navigate = useNavigate();

  const posts = useStoreState(state => state.posts);
  const _patchPost = useStoreActions(action => action.patchPost);

  useEffect(() => {
    let isMounted = true;
    isMounted && posts.length > 0 && posts.map((v:IPost) => v.id == id && (
        setTitle(v.title || ""),
        setBody(v.body || "")
    ));
    return () => {isMounted = false;}
  },[posts])

  const patchPost = async (post: IPost) => {
    _patchPost(post)
    navigate("/");
  }

  return (
    <form className='newPost' onSubmit={e => 
    {e.preventDefault(); patchPost({id:Number(id), title: title, body: body});}}>

      <section>
        <label htmlFor='titleInput'>Başlık: </label>
        <input
          id='titleInput'
          aria-label='Title Input'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          minLength={1}
        ></input>
      </section>

      <section>
        <label htmlFor='titleInput'>İçerik: </label>
        <textarea
          id='bodyInput'
          aria-label='Body Input'
          rows={10}
          value={body}
          required
          minLength={1}
          onChange={e => setBody(e.target.value)}
        ></textarea>
      </section>

      <button type='submit'>Tamamla</button>

    </form>
  )
}

export default EditPost