// import iconProfil from '../images/Profile.svg';
// import iconHome from '../images/Home-Fill.svg';
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
        <ul className='sidebar-ul'>
        <li><img src="/images/Logo.svg" alt=""/></li>
        <Link className="homeTweeter" to="/"><li><img src='/images/Profile.svg'/>Home</li></Link>
        <li><img src="/images/Explore.svg" alt=""/>
Explore</li>
        <li><img src="/images/Notifications.svg" alt=""/>
Notifications</li>
        <li><img src="/images/Messages.svg" alt=""/>
Messages</li>
        <li><img src="/images/Bookmarks.svg" alt=""/>
Bookmarks</li>
        <li><img src="/images/Lists (1).svg" alt=""/>
Lists</li>
       <Link className="profileTweeter"to={"/username"}><li><img src='/images/Home-Fill.svg'/>Profile</li></Link>
        <li><img src="/images/More.svg" alt=""/>
More</li>
        <li><button className='buttonTweeter'>Tweet</button>
</li>
       
        </ul>
        <div className='bradeley'>
          <img className='myProfileImage'src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LumumbaBruxelles1960.jpg/250px-LumumbaBruxelles1960.jpg"
 alt=""/>
          <div className='bradeleyO'> 
            <div>Yvonne Kanvu
                 <img src="/images/Cle.svg" alt=""/>
            </div>
             @yvonnek_
          </div>
          <img src="/images/More-2.svg" alt=""/>
        </div>
      </nav>
      
    );
  }

  export default Sidebar;