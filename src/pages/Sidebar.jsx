
import React from 'react';
import TweeterTweet from '../components/TweeterTweet';
import HomeTweet from '../components/HomeTweet';
import ExploreTweet from '../components/ExploreTweet';
import Notifications from '../components/Notifications';
import Messages from '../components/Messages';
import Bookmarks from '../components/Bookmarks';
import Lists from '../components/Lists';
import Profile from '../components/Profile';
import More from '../components/More';
import ButtonTweet from'../components/ButtonTweet';
import Bradley from '../components/Bradley';
import ProfilTweet from "./PageProfil";
import Home from "./home";
function Sidebar() {
    return (
      <main className='sidebar' >
        <TweeterTweet/>
        <HomeTweet/>
        <ExploreTweet/>
        <Notifications/>
        <Messages/>
        <Bookmarks/>
        <Lists/>
        <Profile/>
        <More/>
        <ButtonTweet/>
        <Bradley/>
      </main>
      
    );
  }

  export default Sidebar;