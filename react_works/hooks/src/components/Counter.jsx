import { useState } from "react"

const Counter = () => {
    // 숫자 세기 상태 관리 선언 -- 초기화 숫자 0
    const [ count , setCount] = useState(0);

    const increament = () => {
        setCount(count+1)
    }

    const decreament = () => {
        setCount(count-1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
       <div>
            <h2>Counter</h2>
            <h3>현재 Count: {count} </h3>
            {/* <button onClick={()=> setCount(count+1)}>증가 </button>
            <button onClick={()=> setCount(count-1)}> 감소</button>
            <button onClick={()=> setCount(0)}> 초기화</button>     */}

            <button onClick={increament}>increament </button>
            <button onClick={decreament}> decreament</button>
            <button onClick={reset}> reset</button>    

            

       </div> 
    )
}

export default Counter