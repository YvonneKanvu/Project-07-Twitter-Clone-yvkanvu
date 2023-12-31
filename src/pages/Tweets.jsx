import DataSectionTweets from "../data/dataSectionTweets";
const Tweets = () => {
    return ( 
        <>
        {DataSectionTweets.map((tweet, index)=>(
        <div className="tweet" key={index}>
            <div className="tweet-avatar">
                <img src={tweet.tweetIcon} alt=""/>
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
                    {tweet.tweetImage && <div className="tweet-image">
                        <img src={tweet.tweetImage} alt="" />
                    </div>}
                </div>
                <div className="tweet-actions">
                    <div className="tweet-action">
                      <img src="src/images/Reply.svg" alt=""/>
                      <span>{tweet.tweetComment}</span>
                    </div>
                    <div className="tweet-action">
                      <img src="src\images\Retweet.svg" alt=""/>
                      <span>{tweet.tweetDiscution}</span>
                    </div>
                    <div className="tweet-action">
                      <img src="src\images\React.svg" alt=""/>
                      <span>{tweet.tweetLike}</span>
                    </div>
                    <div className="tweet-action">
                    <img src="src\images\Tweet-Replies.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>               
        ))}
        </> 
    );
} 
export default Tweets;
