import { useState } from "react";

const UserList =() => {

    const users = [
        {id:1 , name : "홍길동"},
        {id:2 , name : "이순신"},
    ]
    
    const carts =['두부' , '바나나' , '쌀']


    return (
        <div>

            <h2>UserList</h2>
                < ul>
                {users.map( (user) => (
                    <li key={index}>{users}</li>
                 ))}
                </ul>

            <h2>장바구니</h2>
            <ul>
                {carts.map((carts, index) => (
                   <li key={index}>{carts}</li>     
                )) }
            </ul>
        </div>
    )
}

export default UserList;