import { useState } from "react";
import Tweet from "../components/Tweet";
import TweetAction from "../components/TweetAction";
import DataSectionTweets from "../data/dataSectionTweets";

const Tweets = () => {
   const [colors, setColors] = useState([ "#0000ff", "#00ff00", "#ff0000"]);
    const handleClick = (index) => {

   };

    return (
        <>
            {DataSectionTweets.map((tweet, index) => (
                <Tweet tweet={tweet} key={index} />
            ))}
          {colors.map((colors, index) => (
          <TweetAction key={index} color={colors} onClick={() => handleClick(index)} />
      ))}
        </>
    );
}

export default Tweets;