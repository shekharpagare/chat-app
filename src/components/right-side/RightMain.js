import RightTop from "./RightTop";
import RightMiddle from "./Right-middle";

const RightMain = ({userName}) =>{

  return(<>
    <div>
        <div className="right-top">
            <RightTop user={userName }/>
        </div>
        <div className="right-middle">
            <RightMiddle user={userName }/>
        </div>
    </div>
  
  </>)
}
export default RightMain;