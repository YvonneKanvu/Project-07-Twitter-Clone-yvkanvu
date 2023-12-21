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
                    <div className="tweet-image">
                        <img src={tweet.tweetImage} alt="" />    
                    </div>
                </div>
                <div className="tweet-actions">
                    <img className="tweet-action" src="src/images/Reply.svg" alt=""/>
                      <span>57</span>
                     <img className="tweet-action" src="src\images\Retweet.svg" alt=""/>
                      <span>144</span>
                     <img className="tweet-action" src="src\images\React.svg" alt=""/>
                      <span>184</span>
                     <img className="tweet-action" src="src\images\Tweet-Replies.svg" alt=""/>      
                </div>
            </div>
        </div>               
        ))}
        </> 
    );
}
 
export default Tweets;
