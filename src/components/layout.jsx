import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Trends/Trends";
import data from '../Data.json'

export const UserContext = createContext();

function Layout() {
  const [tweet, setTweet] = useState(data);
  const [tweetValue, setTweetValue] = useState('');


  return (
    <UserContext.Provider value={{ tweet, setTweet, tweetValue, setTweetValue }}>
      <Sidebar />
      <Outlet />
      <Trends />
    </UserContext.Provider>
  );
}

export default Layout;
