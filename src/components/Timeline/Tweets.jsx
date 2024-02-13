import { useContext, useState } from "react";
import Tweet from "./Tweet";
import DataSectionTweets from "../../Data.json";
import { TweetsContext } from "../layout";
// import TweetEditorInput from "./TweetEditorInput";

const Tweets = () => {
  const [colors, setColors] = useState(["#0000ff", "#00ff00", "#ff0000"]);
  const { tweets } = useContext(TweetsContext);

  return (
    <>
      {/* <div>
        <TweetEditorInput onSubmit={handleTweetSubmit} />
      </div> */}
      {tweets.map((tweet, index) => (
        <Tweet tweet={tweet} key={index} />
      ))}
    </>
  );
};

export default Tweets;
