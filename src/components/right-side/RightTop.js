import userIcon from "../../Assets/Images/userIcon.jpg";

const RightTop = ({user}) =>{
    return(<>
     <div className="profile-container">
        <img className='profileImg' src={userIcon} alt="user" />
        {user || 'shekhar'}
     </div>
      
    </>)

}
export default RightTop;