import { Link } from 'react-router-dom'

const Feed = ({ post }: { post: IPost }) => {

  return (
    <Link className='feed' to={`post/${post.id || 1}`}>
    <article>
        <div className='container'>
          <h2>{post.title && post.title.length > 25 ? post.title.slice(0,25)+"...":post.title}</h2>
          <p>{post.body && post.body.length > 250 ? post.body.slice(0,250)+"...":post.body}</p>
        </div>
        {post.date && <p className='date'> {post.date} </p>}
        
    </article>
    </Link>
  )
}

export default Feed