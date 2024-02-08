import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Trends/Trends";
import data from '../Data.json'

export const TweetsContext = createContext(null);

function Layout() {
  const [tweets, setTweets] = useState(data.tweets);
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [tweetValue, setTweetValue] = useState('');


  return (
    <TweetsContext.Provider value={{ currentUser, tweets, setTweets, tweetValue, setTweetValue }}>
      <Sidebar />
      <Outlet />
      <Trends />
    </TweetsContext.Provider>
  );
}

export default Layout;
