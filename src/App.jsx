import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
import { ScrollProvider } from './Components/ScrollContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollProvider>
      <Header/>
      <Content/>
      <Footer/>
      </ScrollProvider>
    </>
  )
}

export default App
