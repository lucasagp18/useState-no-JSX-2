import { useState } from 'react'
import { Header } from './components/Header'
import { Poise } from './components/Poise'
import { Poise2 } from './components/Poise2'


function App() {

 console.log("funcionou")
  return (
    <>
      <Header/>
      
      <main>
      <Poise/>
      <Poise2/>
      </main>

    </>
  )
}

export default App
