import React, { useContext } from 'react';
import Header from '../components/Timeline/Header';
import TweetEditor from '../components/Timeline/TweetEditor';
import Tweets from '../components/Timeline/Tweets';
import { TweetsContext } from '../components/layout';



function Home() {
 
  return (
    <main className="timeline">
     <Header/>
     <TweetEditor/>
     <Tweets/> 
    </main>
  );
}

export default Home;