import React, { useState } from 'react';

const TweetEditorInput = ({handleChange}) => {
  const [tweetValue, setTweetValue] = useState('');

  function handleInputChange(e) {
    const value = e.target.value;
    setTweetValue(value);
    handleChange(value);
  }
// console.log(dataLength)
  return (  
    <input 
      value={tweetValue} 
      onChange={handleInputChange} 
      placeholder="What's happening?" 
      className="tweet-editor-input"
    />
  );
}

export default TweetEditorInput;