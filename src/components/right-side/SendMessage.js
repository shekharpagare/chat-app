import { useState } from "react";

const SendMessage = ({messageList,setMessageList}) =>{
    const [messageText,setMessageText] = useState({text:'',isSend:true});

    const handleChange = (event) =>{
      setMessageText({...messageText,text:event.target.value}) 
      console.log('event',event.target.value);
    }
    const handleSubmit = () =>{
        setMessageList([...messageList,messageText]);
    };

  return(<>
   <div className="send-container">
       <div className="send-list">
       <input type="text" placeholder="enter message here" className="inputType" value={messageText.text}
       onChange={handleChange}/>
       <button onClick={handleSubmit}>Send</button>
       </div>
   </div>
    
  </>)
};
export default SendMessage;