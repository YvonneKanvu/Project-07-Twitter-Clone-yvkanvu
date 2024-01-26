import { useState } from "react";
import Tweet from "../components/Tweet";
import DataSectionTweets from "../data/DataSectionTweets";

const Tweets = () => {
   const [colors, setColors] = useState([ "#0000ff", "#00ff00", "#ff0000"]);
    const handleClick = (index) => {

   };

    return (
        <>
            {DataSectionTweets.map((tweet, index) => (
                <Tweet tweet={tweet} key={index} />
            ))}
        </>
    );
}

export default Tweets;