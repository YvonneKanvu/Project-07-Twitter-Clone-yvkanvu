import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Trends/Trends";
// import data from '../Data.json'
import data from '../Data.json'
// import TweetEditorInput from "./Timeline/TweetEditorInput";

export const TweetsContext = createContext(null);

function Layout() {
  const [tweets, setTweets] = useState(data.tweets);
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [profiles,setProfiles] = useState(data.profiles)
  const [tweetValue, setTweetValue] = useState('');
  
  // const handleChange = (value) => {
  //   setTweetValue(value);
  // };


  return (
    <TweetsContext.Provider value={{ currentUser,profiles,tweets, setTweets, tweetValue, setTweetValue }}>
      <Sidebar />
      <Outlet />
      <Trends />
    </TweetsContext.Provider>
  );
}

export default Layout;
