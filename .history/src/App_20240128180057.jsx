import { useState } from 'react'

import styles from  './App.module.css'

import { Experience } from './components/Experience/Experience';
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import {Projects} from './components/Projects/Projects';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      
      <Navbar/> 
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App
