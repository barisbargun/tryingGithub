import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Layout = () => {
  
 
  return (
    <div>
      <Header title='Post Page'/>
      <Nav/>
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout