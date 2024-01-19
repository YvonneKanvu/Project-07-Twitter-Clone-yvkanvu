import { useState } from "react";
const [count, setCount] = useState(0)
const [commentAction,setCommentAction]= useState(false)

function ActionComment() {
  const handleClick = ()=>{
    if (count === 0){
    setCount ( count + 1);
    setCommentAction(true);
    }else(commentAction===commentAction);{
      setCount(count - 1);
      setCount(false);
    };

    return ( 
      <button className="tweet-action"> onClick={handleClick}
      {count}
  </button>
    )
}

export default ActionComment