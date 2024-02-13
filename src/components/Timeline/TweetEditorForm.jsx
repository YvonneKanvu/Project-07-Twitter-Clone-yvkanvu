import React, { useContext, useState } from "react";
import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";
import Tweets from "./Tweets";
import DataSectionTweets from "../../Data.json";
import { TweetsContext } from "../layout";
import { useForm } from "react-hook-form";

const TweetEditorForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const {
    tweets,
    currentUser: user,
    setTweets,
    tweetValue,
    setTweetValue,
  } = useContext(TweetsContext);
  // const handleChange = (value) => {
  //   setTweetValue(value);
  // };
  const onSubmitForm = (data) => {
    console.log(data);
    alert(`${data.name} tweet ajouté `);
  };

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
      <TweetEditorInput handleChange={handleChange}  />
      <TweetEditorButtons type="submit" tweetValue={tweetValue} />
      {/* <button type="submit">Tweet</button> Bouton de soumission */}
      {/* {errors.name && errors.name.type === "required" && ( */}
        {/* <span>Ce champ est obligatoire</span> */}
      {/* )} */}
      {/* {errors.name && errors.name.type === "pattern" && ( */}
        {/* <span> */}
          {/* Le tweet ne doit pas dépasser 180 caractères et doit commencer par une */}
          {/* lettre */}
        {/* </span> */}
      {/* )} */}
    </form>
  );
}

export default TweetEditorForm;