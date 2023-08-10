import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Career from './components/career/Career'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <div className='spacing'></div>
      <Career/>
      <Footer/>
    </>
  )
}

export default App
