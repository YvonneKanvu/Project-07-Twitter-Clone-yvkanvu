import { useState } from "react";
import Tweet from "../components/Tweet";
import TweetAction from "../components/TweetAction";
import DataSectionTweets from "../data/dataSectionTweets";

const Tweets = () => {
    const [colors, setColors] = useState([ "#0000ff", "#00ff00", "#ff0000"]);
    const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = "#0000ff";
    setColors(newColors);
  };

    return (
        <>
            {DataSectionTweets.map((tweet, index) => (
                <Tweet tweet={tweet} key={index} />
            ))}
             {/* <div className="tweet-actions">
      {colors.map((color, index) => (
        <TweetAction key={index} color={color} onClick={() => handleClick(index)} />
      ))}
    </div>  */}

        </>
    );
}

export default Tweets;