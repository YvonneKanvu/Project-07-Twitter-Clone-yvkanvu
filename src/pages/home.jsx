import React, { useContext } from 'react';
import Header from './Header';
import TweetEditor from './TweetEditor';
import Tweets from './Tweets';
import { UserContext } from '../components/layout';



function Home() {
  const { tweet, setTweet } = useContext(UserContext)
 
  return (
    <main className="timeline">
     <Header/>
     <TweetEditor/>
     <Tweets/> 
    </main>
  );
}

export default Home;