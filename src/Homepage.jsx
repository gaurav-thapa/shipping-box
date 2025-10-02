import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

const Homepage = () => {
  return (
    <div className='bg-gradient-to-t from-gray-950 to-gray-800 min-h-screen text-white'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Homepage