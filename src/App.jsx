import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { AddEditPost } from './pages/AddEditPost'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'
import { PwReset } from './pages/PwReset'
import { SignInUp } from './pages/SignInUp'
import { Profile } from './pages/Profile'
import { NavBar } from './components/NavBar'
import { UserProvider } from './context/userContext'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='details/:id' element={<Details />} />
            <Route path='create' element={<AddEditPost />} />
            <Route path='update/:id' element={<AddEditPost />} />
            <Route path='signinup/:type' element={<SignInUp />} />
            <Route path='pwreset' element={<PwReset />} />
            <Route path='profile' element={<Profile />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </UserProvider>  
    </BrowserRouter>
  )
}

export default App
