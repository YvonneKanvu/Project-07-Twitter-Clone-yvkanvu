import { useState } from "react";
import Tweet from "../components/Tweet";
import DataSectionTweets from "../Data.json";


const Tweets = () => {
   const [colors, setColors] = useState([ "#0000ff", "#00ff00", "#ff0000"]);
   
    return (
        <>
            {DataSectionTweets.map((tweet, index) => (
                <Tweet tweet={tweet} key={index} />
            ))}
        </>
    );
}

export default Tweets;