import { useState } from "react"

export default function InputValueEx (){
    const [text , setText] = useState("");

    const handelInputChange = (e) => {
         setText(e.target.value);   

    }


    return(
        <div>
            <h2> 입력창 테스트
             </h2>
             <input 
                type="text"
                value={text}
                onChange={handleInputValue}
                placeholder="글자입력"
             />
             <h3> 입력값:{text}

             </h3>
        </div>
    )


}


