import { Link } from 'react-router-dom'
import { useStoreState,useStoreActions } from '../hooks/useTypedHooks';

const Nav = () => {
  const searchPost = useStoreState(state => state.searchPost);
  const setSearchPost = useStoreActions(actions => actions.setSearchPost);
  
  return (
    <nav>
      <input 
      role='searchingInput'
      type="text"
      aria-label='Searching Input'
      value={searchPost}
      onChange={(e) => setSearchPost(e.target.value)}
      placeholder='Post aramaya başlayın..'
      />
      <div className='pages'>
        <Link className='page' to={"/"}>Home</Link>
        <Link className='page' to={"post"}>Post</Link>
        <Link className='page' to={"about"}>About</Link>
      </div>
    </nav>
  )
}

export default Nav