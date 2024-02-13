import React, { useState } from 'react';
const TweetEditorInput = ({handleChange}) => {
  const [tweetValue, setTweetValue] = useState('');

  function handleInputChange(e) {
    const value = e.target.value;
    setTweetValue(value);
    handleChange(value);
  }
  // type="text"
  // {...register("name", { required: true, pattern: /^[A-Za-z]{3,180}$/i })}
  // <form className="tweet-editor-form" onSubmit={handleSubmit(onSubmitForm)}>


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