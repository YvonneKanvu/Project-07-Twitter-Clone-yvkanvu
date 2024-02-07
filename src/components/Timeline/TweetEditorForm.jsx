import React, { useContext, useState } from 'react';
import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";
import Tweets from './Tweets';
import { TweetsContext } from '../layout';

// import DataSectionTweets from "./Data.json";


const TweetEditorForm = () => {
    const [tweetValue, setTweetValue] = useState('');
    // const [tweets, setTweets] = useState([]);
    const tweetsContext = useContext(DataSectionTweets);
    const handleChange = (value) => {
    setTweetValue(value);
             }
             console.log(tweetsContext);
    const handleSubmit = (event) =>{
    event.preventDefault();
      const dataLength= tweetsContext.length;
      console.log(tweetsContext)
    const newTweet =  {
     "id": dataLength+1,
     "tweetIcon": "/images/Tweet-Profile-Photo.png",
    "tweetTitle": "The New York Times",
    "tweetAutentic": "tweetAutentic",
     "tweetIdentite": "@nytimes",
     "tweetPoint": ".",
     "tweetDate": "2h",
     "tweetInfo":tweetValue,
    "tweetImage": "/images/tweet-image.png",
    "tweetComment": "19",
     "tweetDiscution": "48",
     "tweetLike": "482"
     }
      tweetsContext.push(newTweet);
        // tweetValue.unshift(newTweet)
        
    }

    return ( 
           <form className="tweet-editor-form" onSubmit={handleSubmit} >
      <TweetEditorInput handleChange={handleChange} /> 
  <TweetEditorButtons  tweetValue={tweetValue}/>
    {/* <button type="submit">Tweet</button>   */}
     </form>
    );
    }
 
export default TweetEditorForm;