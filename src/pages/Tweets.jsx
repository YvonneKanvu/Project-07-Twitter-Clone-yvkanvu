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
                <di className="tweet-body">
                    <div className="tweet-title">
                        <span className="tweet-title-author">{tweet.tweetTitle}</span>
                        <span className="tweet-title-author">{tweet.tweetTitle}</span>
                        <span className="tweet-title-author">{tweet.tweetTitle}</span>
                        <span className="tweet-title-author">{tweet.tweetTitle}</span>
                        <span className="tweet-title-author">{tweet.tweetTitle}</span>
                    </div>
                    <div className="tweet-text">
                    {tweet.tweetInfo}
                    </div>
                    <div className="tweet-image">
                        
                    </div>
                </di>
                <di className="tweet-actions">
                </di>
            </div>
        </div>               

        ))}
        </> 
    );
}
 
export default Tweets;
