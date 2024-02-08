import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import LoginForm from './LoginForm.jsx'
//import SignUpForm from './SignUpForm.jsx'
import UserBase from './UserBase'
import UserTable from './UserTable'

function App() {
    const [state, setState] = useState({
        currentPost: null
 });
  return (
    <>
      <UserBase/>

    </>
  )
}

export default App
