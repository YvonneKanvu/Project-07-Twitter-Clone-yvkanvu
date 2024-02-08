import React, { useContext, useState } from "react";
import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";
import Tweets from "./Tweets";
import DataSectionTweets from "../../Data.json";
import { TweetsContext } from "../layout";

const TweetEditorForm = () => {
  // const TweetsContext = useContext(TweetsContext);
  const { tweets, currentUser: user, setTweets, tweetValue, setTweetValue } =
    useContext(TweetsContext);
  const handleChange = (value) => {
    setTweetValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataLength = DataSectionTweets.length;
    const newTweet = {
      id: dataLength + 1,
      tweetIcon: user.profilePicture,
      tweetTitle: user.username,
      tweetAutentic: user.isVerified,
      tweetIdentite: user.handle,
      tweetPoint: ".",
      tweetDate: "now",
      tweetInfo: tweetValue,
      tweetComment: "0",
      tweetDiscution: "0",
      tweetLike: "0",
    };
    setTweets([newTweet, ...tweets]);
    setTweetValue("");
  };

  return (
    <form className="tweet-editor-form" onSubmit={handleSubmit}>
      <TweetEditorInput handleChange={handleChange} />
      <TweetEditorButtons type="submit" tweetValue={tweetValue} />
      {/* <button type="submit">Tweet</button> Bouton de soumission */}
    </form>
  );
};

export default TweetEditorForm;
