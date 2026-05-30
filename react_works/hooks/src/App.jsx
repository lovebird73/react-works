import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import Car from './components/Car'
import Drinks from './components/Drinks'
import Drinks2 from './components/Drinks2'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <section className="app">
          <h2>
           상태 관리 실습

          {/* <Drinks />  */}
          

          <Drinks2 />
          </h2>    
      </section>
    </div>
  )
}

export default App
