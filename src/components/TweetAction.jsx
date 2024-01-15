import { useState } from "react";

function TweetAction( {color, onClick }) {
  const [colors, setColors] = useState(["#0000ff", "#00ff00", "#ff0000"]);
  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = "#0000ff";
    setColors(newColors);
  };

    return ( 
      <div className="tweet-action" onClick={onClick} style={{ color: colors }}>
      <img src="src/images/Reply.svg" alt="" />
      {tweet.tweetComment}
  </div>
    )
}

export default TweetAction;