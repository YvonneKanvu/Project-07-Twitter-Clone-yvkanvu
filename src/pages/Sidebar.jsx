import iconProfil from '../images/Profile.svg';
import iconHome from '../images/Home-Fill.svg';
import React from 'react';
import { Link } from 'react-router-dom';
// import TweeterTweet from '../components/TweeterTweet';
// import HomeTweet from '../components/HomeTweet';
// import ExploreTweet from '../components/ExploreTweet';
// import Notifications from '../components/Notifications';
// import Messages from '../components/Messages';
// import Bookmarks from '../components/Bookmarks';
// import Lists from '../components/Lists';
// import Profile from '../components/Profile';;
// import More from '../components/More';
// import ButtonTweet from'../components/ButtonTweet';
// import Bradley from '../components/Bradley';
//  import ProfilTweet from "./PageProfil";
// import Home from "./home";
function Sidebar() {
    return (
      <nav className='sidebar' >
        <ul>
        <li>TweeterTweet</li>
        <Link to="/"><li><img src={iconHome}/>Home</li></Link>
        <li>ExploreTweet</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Bookmarks</li>
        <li>Lists</li>
       <Link to={"/username"}><li><img src={iconProfil}/>Profile</li></Link>
        <li>More</li>
        <li>ButtonTweet</li>
        <li>Bradley</li>
        </ul>
      </nav>
      
    );
  }

  export default Sidebar;