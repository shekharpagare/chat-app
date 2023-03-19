import { chatArray } from "../../core-helper/constant";
import userIcon from "../../Assets/Images/userIcon.jpg";

const LeftMiddle = ({userName,setUsername}) =>{ 

  const CHAT_ARRAY = chatArray;
 
  const clickChat = (user) =>{
     setUsername(user.name);
  }
  return(
    <div>
      { CHAT_ARRAY.map(chat =>{
         return( 
          <div className={`chat-list ${chat.name === userName ? 'selected-chat' : ''}`} onClick={()=>clickChat(chat)}>
            <div className="chat-Name">
              <img className='profileImg' src={userIcon} alt="user" />
              <div>
                  <p1>{chat.name}</p1>
                  <p>{chat.lastMessage}</p>
              </div> 
            </div>
           </div>
         )
      })}

   </div>)
}

export default LeftMiddle;