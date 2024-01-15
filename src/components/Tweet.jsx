import { useState } from "react";

function Tweet({tweet}) {
    const [colors, setColors] = useState('');
    const [colors2, setColors2] = useState('');
    const [colors3, setColors3] = useState('');



    const handleClic1 = () => { setColors('#0000ff') }
    const handleClic2 = () => { setColors2('#00ff00') }
    const handleClic3 = () => { setColors3('#ff0000') }


    return <div className="tweet">

        <div className="tweet-avatar">
            <img src={tweet.tweetIcon} alt="" />
        </div>
        <div className="tweet-content">
            <div className="tweet-body">
                <div className="tweet-title">
                    <span className="tweet-title-author">{tweet.tweetTitle}</span>
                    <span className="tweet-title-details"><img src={tweet.tweetAutentic} alt="" /></span>
                    <span className="tweet-title-details">{tweet.tweetIdentite}</span>
                    <span className="tweet-title-details">{tweet.tweetPoint}</span>
                    <span className="tweet-title-details">{tweet.tweetDate}</span>
                </div>
                <div className="tweet-text">
                    {tweet.tweetInfo}
                </div>
                <div className="tweet-image">
                    <img src={tweet.tweetImage} alt="" />
                </div>
            </div>
            <div className="tweet-actions">
                <div className="tweet-action" onClick={handleClic1} style={{ color: colors }}>
                    <img src="src/images/Reply.svg" alt="" />
                    {tweet.tweetComment}
                </div>
                <div className="tweet-action" onClick={handleClic2} style={{ color: colors2 }}>
                    <img src="src\images\Retweet.svg" alt="" />
                    {tweet.tweetDiscution}
                </div>
                <div className="tweet-action" onClick={handleClic3} style={{ color: colors3 }}>
                    <img src="src\images\React.svg" alt="" />
                    {tweet.tweetLike}
                </div>
                <div className="tweet-action">
                    <img src="src\images\Tweet-Replies.svg" alt="" />
                </div>
            </div> 
        </div>
    </div>
}

export default Tweet;