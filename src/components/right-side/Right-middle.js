import { useEffect, useState } from "react";
import { userMessageArray } from "../../core-helper/constant";

const RightMiddle = ({user}) =>{

  const [messageList,setMessageList] = useState([]);
  const USERS_MESSAGE_ARRAY = userMessageArray;

  useEffect(()=>{
    const array = USERS_MESSAGE_ARRAY?.filter(data=>data.userName === user);
    setMessageList(array[0]?.messageArray);
  },[user]);

  return(<>
    { messageList && messageList.map(message=>{
      return <div>
        <div className="message-container">
        <p className={`message ${message.isSend ? 'sendMessage' : 'receiveMessage'}` }>
         {message.text}
        </p>
        </div>
        </div>
    })}
  </>)
}
export default RightMiddle;