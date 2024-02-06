import React, { useState } from 'react';

const TweetEditorInput = () => {
  const [tweetValue, setTweetValue] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setTweetValue(value);
    console.log(value);
  }
// console.log(dataLength)
  return (  
    <input 
      value={tweetValue} 
      onChange={handleChange} 
      placeholder="What's happening?" 
      className="tweet-editor-input"
    />
  );
}

export default TweetEditorInput;