// 임시 데이타 생성

import { useState } from "react";

const users =[
    {username: 'user1', password:'user1111'},
    {username: 'user2', password:'user2222'},
    {username: 'admin', password:'admin0000'},
    
]

const SignIn =() =>{

    const[formData , setFormData] = useState({
        username : '',
        password :''
    })

    // 입력 필드 상태관리

    const handelInputChange = (e) => {
        const {name , value} =    e.target;
        //console.log(e);
        setFormData({
            ...formData ,
            [name]: value
        })
    }   

    const handelSubmit = (e) => {
        e.preventDefault();  // 기본 동작을 막음

        console.log("전송데이타:" , formData);
        const {username, password} = formData;

        const matched = users.find(  (user) => (
            user.username === username  && user.password == password
        ) )

        setResult(matched ?  'success' : 'fail')
        
    }   

    // 로그인 결과 상태 관리


    const [result , setResult] = useState(null)

    return (
        <div>
            <h2>로그인</h2>
            <form  onSubmit={handelSubmit}>
                <p>
                    <input 
                        type ="text"
                        name ="username"
                        value={formData.username}
                        onChange={handelInputChange}
                        placeholder="아이디를 입력하세요"

                    />
                </p>
                                <p>
                    <input 
                        name ="password"
                        type ="password"
                        value={formData.password}
                        onChange={handelInputChange}
                        placeholder="아이디를 입력하세요"

                    />
                </p>

                <button type="submit">
                    로그인
                </button>
            </form>
            {/* 결과 메시지 출력 */}
            {result  === 'success'  && (
                <p style={{color:'blue'}}> 로그인 되었습니다. </p>
            )}
            {result  === 'fail'  && (
                <p style={{color:'red'}}> 아디디 또는 비밀번호가 일치하지 않습니다. </p>
            )}
        </div>
    )
}


export default SignIn;