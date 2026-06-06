/* 프로필 사진을 보여주는 컴퍼넌트
// props 로 person 객체를 받아서 
// imageUrl 과 name 을 사용하여 프로필 사진을 보여줌 */

const Avatar = ( {person} ) => {
    return (
        <div >
            {/* <h2> 여기에 프로필 사진 </h2> */}
            <img 
                className="avatar"
                src ={person.imageUrl} 
                alt={person.name} 
                width = {400}
            />
        </div>
    )
}

export default Avatar;
