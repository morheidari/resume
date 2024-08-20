import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import SideBar from './components/sidebar'

function App() {

  return(<div className='app'><Header></Header><SideBar></SideBar><Main></Main></div>)
}

export default App
