import { useState } from "react"


const   Like = () => {
    const [likeCount, setLikeCount] = useState(0);

    const doClick = ()=> {
        setLikeCount (likeCount+1);
    }

    return (
        <div>
            <h2>좋아요 버튼</h2>
            <p>
                <button 
                    onClick= "doClick"
                    
                 />
                 <p>   
                    좋아요 수 :{good}
                 </p>
            </p>


        </div>
   

    )
}  

export default Like