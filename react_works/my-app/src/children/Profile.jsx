import Avatar from "./Avatar";
import profilePhoto  from "../assets/person.jpg"
import Card from "./Card";

// 프로필 페이지를 보여주는 컴퍼넌트
const Profile = () => {
    return (
        <Card>
            {/* <h2>Card UI 구현</h2> */}
            <Avatar 
                person ={{
                    name: '토마스' ,
                    imageUrl : profilePhoto
                }}
            />
            </Card>
        
    )
}

export default Profile;
