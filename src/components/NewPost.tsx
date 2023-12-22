import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStoreActions } from '../hooks/useTypedHooks';

const NewPost = () => {
  const navigate = useNavigate();
  const _addPost = useStoreActions((ac) => ac.addPost);

  const addPost = async (title: string, body: string) => {
    _addPost({ title: title, body: body });
    navigate("/");
  }

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form className='newPost' onSubmit={e => { e.preventDefault(); addPost(title, body); }}>

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

      <button type='submit'>Gönder</button>

    </form>
  )
}

export default NewPost