import { useState } from 'react'
import Season from './components/season'
import './App.css'
import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Test01 from './practice/Test01'
import Test03 from './practice/Test03'
import Test02 from './practice/Test02'
import Example03 from './components/Example03'
import InputValue from './components/InputValue'
import Test04 from './practice/Test04'
import Dog from './components/Dog'
import Dog2 from './components/Dog2'

import Box from './children/Box'
import Profile from './children/Profile'

function MyButton (){
  return (
    <>
      
      <h3><p> 버튼 컴포넌트</p></h3>      
      <button>목록보기</button>
    </>
  )
}

function App() {
  // 변수 출력시 중괄호 사용

  return (
    <div>
      <section id="center">
        
        {/* <h2>리액트 시작하기</h2>  */}

        {/*<Season />*/ }

        {/* <Example01/> */}

        {/* <Example03 /> */}

        {/* < InputValue /> */}
        {/* <  Test04 /> */}
        {/* props 연습 */}
        {/* < Dog 
            breed ="말티즈"
            age ={2}
        />
        < Dog2 
            breed ="웰시코기"
            age ={5}
        /> */}
        
        <Profile />
      </section>
      <section id ="subCenter" >
        {/* <h2> JSX 문법 배우기</h2> */}
        <MyButton />
       </section> 
    </div>
  )
}

export default App
