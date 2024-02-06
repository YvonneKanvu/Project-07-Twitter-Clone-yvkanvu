import { useState } from "react";
import Tweet from "./Tweet";
import DataSectionTweets from "../../Data.json";
// import TweetEditorInput from "./TweetEditorInput";

const Tweets = () => {
  const [colors, setColors] = useState(["#0000ff", "#00ff00", "#ff0000"]);
 const [tweets, setTweets] = useState([]);
//   function handleTweetSubmit(tweet) {
//     setTweets([...tweets, tweet]);
//   }

  return (
    <>
      {/* <div>
        <TweetEditorInput onSubmit={handleTweetSubmit} />
      </div> */}
      {DataSectionTweets.map((tweet, index) => (
        <Tweet tweet={tweet} key={index} />
      ))}
    </>
  );
};

export default Tweets;
