import { useState } from 'react'

import styles from  './App.module.css'

import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import {Projects} from './components/Projects/Projects';
import {Contact} from './components/Contact/Contact';
import { Experiences } from './components/Experiences/Experiences';
import {Experience} from'./components/Experience/Experience';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      
      <Navbar/> 
      <Hero/>
      <About/>
      <Experiences/>
      <Experience/>
      
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
