import Feed from './Feed'
import { useStoreState } from "../hooks/useTypedHooks"

const Home = () => {
  const {posts, searchPost} = useStoreState(state => {
    return{posts:state.posts, searchPost:state.searchPost}
  })


  const filteredPosts = (): IPost[] => {
    return posts && posts.length > 0 ? posts.filter((v: IPost) => {
      return v.body?.toLowerCase().includes(searchPost.toLowerCase()) ||
        v.title?.toLowerCase().includes(searchPost.toString())
    }) : []
  }
  return (
    <>
    <main className='home'>
      {filteredPosts().reverse().map((v:IPost) => <Feed post={v} key={v.id} />)}
    </main>
    </>
  )
}

export default Home