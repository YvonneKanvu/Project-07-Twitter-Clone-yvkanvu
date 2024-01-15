import { useState } from "react";

function TweetAction() {
  // const [colors, setColor] = useState("");
  const [count, setCount] = useState(0)

  const handleClick = ()=>{
    if (count === 0){
    setCount ( count + 1)
    }else{
      setCount(count - 1)
    }
    
  }

    return ( 
      <div>
      
  </div>
    )
}

export default TweetAction;