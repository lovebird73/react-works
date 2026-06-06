import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';

import UseEffectEx from './hook/UseEffectEx';
import SignIn from './hook/SignIn';


function App() {

  // 할 일 값  상태관리

  const [todos , setTodos] = useState([]);


  // 입력값 상태 관리
  const [inputValue , setInputValue] = useState("");

  // 입력값 변경 핸들러 함수

  const handelInputChange = (e) =>{
    // console.log(  "입력된 글자" ,e.target.value );
    setInputValue(e.target.value);
  }

  console.log( "리스트 크기", todos.length)

  // 할 일 추가 함수

  const handleAddTodo = () => {

      if (  inputValue.trim() === ''  ) {
        alert("할 일을 입력하세요") ;   
        return;

      }

      const newTodo = {
        id: todos.length +1 ,
        text : inputValue ,
        completed : false

      }
      setTodos([ ...todos ,  newTodo]);
      setInputValue(''); //입력 필드 초기화
  }

  // 할 일 완료 체크

  const handleToggleComplete = ( id) => {
    /*
      해당 id 를 가진 할일의 completed 상태를 토클하는 코드
      todos 배열을 순회하면서 id가 일치하는 할 일의 completed 값을 반전시킴
      id 가 일치하지 않는 할일은 그대로 유지
    */ 
    setTodos(
        todos.map(  (todo) => (
            todo.id === id ? {...todo , completed : !todo.completed} : todo
        ))
    )
  }

  return (
    <>
      <section id="app">
        {/* <h2>할일 관리</h2>
        <input 
           type ="text"
           value ={inputValue}
           onChange={handelInputChange}
           placeholder='할 일을 입력하세요'

         />
        <button   onClick={handleAddTodo}>추가</button> */}
        {/* <p>입력된 할일 :{inputValue}</p> */}
        {/* 할 일 목록 */}
        {/* <ul>
        {todos.map((todo  )=> (
            <li key ={todo.id}   className={todo.completed ? 'completed' :  ''} >
              <input 
                type= 'checkbox'
                checked={todo.checked}
                onChange={  ()=> handleToggleComplete(todo.id) }
                /> {todo.text}</li>

        ))}
        </ul> */}
        <SignIn/>
      </section>

    </>
  )

}

export default App
