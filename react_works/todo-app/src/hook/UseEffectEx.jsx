import { useEffect, useState } from "react";

const UseEffectEx = () => {
    const [name , setName] = useState('');
    const [age , setAge]   = useState(0);

    /*
    
    */
    useEffect( ()=>{
             console.log("렌더링") ;
    } ,[name])
    return (
        <div>
            <h2>사용자 정보</h2>    
            <input 
                tyhpe="text"
                placeholder="이름 입력"
                onChange={  (e) => setName(e.target.value) }
            
            />
            <p>이름:  {name}</p>

            <br></br>    

            <input 
                type="number"
                placeholder="나이 입력"
                onChange={  (e) => setAge(e.target.value) }
            
            />
            <p>나이:  {age}</p>


        </div>

    )
}

export default UseEffectEx;