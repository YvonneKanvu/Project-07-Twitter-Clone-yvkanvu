import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Trends from "../pages/Trends";
import data from '../Data.json'

export const UserContext = createContext();

function Layout() {
  const [tweet, setTweet] = useState(data);

  return (
    <UserContext.Provider value={{ tweet, setTweet }}>
      <Sidebar />
      <Outlet />
      <Trends />
    </UserContext.Provider>
  );
}

export default Layout;
