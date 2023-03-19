import { useState } from "react";
import LeftMiddle from "./components/left-side/LeftMiddle";
import LeftTop from "./components/left-side/LeftTop";
import RightMain from "./components/right-side/RightMain";

const Main = () =>{
    const  [userName, setUsername] = useState('');

  return(
    <div>
       <div className="left-bar">
          <div className="left-top">
          <LeftTop />
          </div>
          <div className="left-bottom">
          <LeftMiddle userName={userName} setUsername={setUsername}/>
          </div>
       </div>
       <div className="right-bar">
         <RightMain userName={userName}/>
       </div>
    </div>
  )
}

export default Main;