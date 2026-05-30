import { useState } from "react";

const Drinks2 = () => {
    
    const [ drinks ,setDrinks] =useState([]);
    
    const [inputValue , setInputValue] = useState("");

    // 입력값 변경 함수

    const inputValueChange = (e)=> {
        setInputValue(e.target.value);
    }

    const addDrink = () => {
        const newDrink =inputValue;
    
        setDrinks([...drinks,newDrink]);
        setInputValue("");
    }

    return (
        <div>
            <h2>음료 관리</h2>
            <input 
                type= "text" 
                placeholder="음료 이름을 넣으세요"
                value = {inputValue}
                onChange={inputValueChange}
            />
             {/* <p> 음료: {inputValue}</p>    */}
             <button onClick={addDrink}>음료 추가</button>


             <ul>{drinks.map((drink, index) =>(
                   <li key ={index}>{drink}</li> 
             ))}
             </ul>
        </div>
    )
}

export default Drinks2 ;