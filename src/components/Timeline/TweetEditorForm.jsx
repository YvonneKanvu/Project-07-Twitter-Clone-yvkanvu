import React, { useState } from 'react';
import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";
import Tweets from './Tweets';
import DataSectionTweets from "../../Data.json";

const TweetEditorForm = () => {
    const [tweetValue, setTweetValue] = useState([]);
    const [tweets, setTweets] = useState([]);

    const handleChange = (value) => {
    setTweetValue(value);
             }
    const handleSubmit = () =>{
    const dataLength= DataSectionTweets.length
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
      DataSectionTweets.push(newTweet)
        // tweetValue.unshift(newTweet)
        
    }

    return ( 
           <form className="tweet-editor-form" onSubmit={handleSubmit} >
      <TweetEditorInput handleChange={handleChange} tweetValue={tweetValue} /> 
  <TweetEditorButtons tweetValue={tweetValue}/>
    {/* <button type="submit">Tweet</button>   */}

     </form>
    );
    }
 
export default TweetEditorForm;