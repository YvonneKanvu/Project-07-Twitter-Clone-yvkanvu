import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Tweet({ tweet }) {
  const [colorsComment, setColorsComment] = useState("");
  const [colorsRetweet, setColorsRetweet] = useState("");
  const [colorsLike, setColorsLike] = useState("");
  // const [countComment, setCountComment] = useState(2);
  // const [countRetweet, setCountRetweet] = useState(77);
  const [countLike, setCountLike] = useState(45);
  const [verified, setverified] = useState(false);

  const handleClicComment = () => {
    setColorsComment("#0000ff");
    // if (verified == true) {
      // setCountComment(countComment - 1);
    // } else {
      // setCountComment(countComment + 1);
    // }
    // setverified(!verified);
  };
  const handleClicRetweet = () => {
    setColorsRetweet("#00ff00");
  //   if (verified == true) {
  //     setCountRetweet(countRetweet - 1);
  //   } else {
  //     setCountRetweet(countRetweet + 1);
  //   }
  //   setverified(!verified);
  };

  const handleClicLike = () => {
    setColorsLike("#ff0000");
    if (verified == true) {
      setCountLike(countLike - 1);
    } else {
      setCountLike(countLike + 1);
    }
    setverified(!verified);
  };
  // <console.log(tweet);

  return (
    <div className="tweet">
      <div className="tweet-avatar">
          <Link to={`/${tweet.id}`}>
        <img src={tweet.tweetIcon} alt="tweetIcon" />
          </Link>
      </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            {/* <Link to={`/${tweet.id}`}> */}
              <span className="tweet-title-author ">{tweet.tweetTitle}</span>
            {/* </Link> */}
            <span className="tweet-title-details">
              <img src={tweet.tweetAutentic} alt="" />
            </span>
            <span className="tweet-title-details">{tweet.tweetIdentite}</span>
            <span className="tweet-title-details">{tweet.tweetPoint}</span>
            <span className="tweet-title-details">{tweet.tweetDate}</span>
          </div>
          <div className="tweet-text">{tweet.tweetInfo}</div>
            <div className="tweet-image">
             <img src={""+tweet.tweetImage} alt="" />
            </div>
        </div>

        <div className="tweet-actions">
          <div
            className="tweet-action commentaire "
            onClick={handleClicComment}
            style={{ color: colorsComment }}
          >
            <span className="coment">
              <Icon
                icon="basil:comment-solid"
                style={{ color: colorsComment }}
              />
            </span>
            {/* <img src="src/images/Reply.svg" alt="" /> */}
            <span>{tweet.tweetComment}</span>
          </div>
          <div
            className="tweet-action discution"
            onClick={handleClicRetweet}
            style={{ color: colorsRetweet }}
          >
            <span className="discut">
              <Icon icon="ei:retweet" style={{ color: colorsRetweet }} />
            </span>
            <span>{tweet.tweetDiscution}</span>
          </div>
          <div
            className="tweet-action aime"
            onClick={handleClicLike}
            style={{ color: colorsLike }}
          >
            <span className="like">
              <Icon icon="icon-park-solid:like" style={{ color: colorsLike }} />
            </span>
            {/* <img src="src\images\React.svg" alt="" /> */}
            <span> {countLike}</span>
          </div>
          <div className="tweet-action">
            <img src="src\images\Tweet-Replies.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
