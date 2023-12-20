import "./style/main.scss";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Missing from './components/Missing';
import About from './components/About';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';
import { useStoreActions } from "./hooks/useTypedHooks";
import { useEffect } from "react";


const App3 = () => {

  const fetchPosts = useStoreActions((action) => action.fetchPosts);

  useEffect(() => {
    let isMounted = true;
    isMounted && fetchPosts()
    return () => { isMounted = false; }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />} />

        <Route path='post' >

          <Route index element={<NewPost />} />

          <Route path=':id' >
            <Route index element={<PostPage />} />
            <Route path='edit' element={<EditPost />} />
          </Route>

        </Route>

        <Route path='about' element={<About />} />
        <Route path='*' element={<Missing />} />

      </Route>
    </Routes>
  )
}

export default App3