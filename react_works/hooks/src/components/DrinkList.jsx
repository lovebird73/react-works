
// 리액트 Props - 매개변수 속tjd (prop) 이전달됨
const DrinkList =({drinks}) => {

    return(
        <div>
            < ul>
                {drinks.map((drink, index) => (
            <li key={index}>{drink}</li>
            ))}
            </ul>
         </div>   
    )
}

export default DrinkList;