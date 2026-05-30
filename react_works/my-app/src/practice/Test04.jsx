export default function Test04() {

    const handleInputChange  = (event) => {
        //console.log(event);
        console.log(event.target.value); 
    }

    const buttonOnClick  = () => {
        //console.log(event);
        let message = "클릭됨 버튼1"
        console.log(message); 
    }

    const doClick  = () => {
        //console.log(event);
        let message = "클릭됨 버튼2"
        console.log(message); 
    }

    return (
        <div>
            <h2>
            </h2>
            <button
                type ="button"
                onClick={buttonOnClick}
             > 버 튼
              </button> 
             <p>
             <button onClick={doClick}> 확인</button>      
              </p>  
        </div>

    )


}
