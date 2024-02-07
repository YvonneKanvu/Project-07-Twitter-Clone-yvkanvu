import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Trends/Trends";
import data from '../Data.json'

export const TweetsContext = createContext(null);

function Layout() {
  const [tweet, setTweet] = useState(data);
  const [tweetValue, setTweetValue] = useState('');


  return (
    <TweetsContext.Provider value={{ tweet, setTweet, tweetValue, setTweetValue }}>
      <Sidebar />
      <Outlet />
      <Trends />
    </TweetsContext.Provider>
  );
}

export default Layout;
