import { Link } from "react-router-dom";
function TrendsFollow() {
  return (
    <div className="trendsFollow">
      <h5>Who to follow</h5>
      <div className="followNewyork">
        <Link to={"http://localhost:5173/2"}>
          <img src="/images/Tweet-Profile-Photo.png" alt="" />
        </Link>
        <div className="followNewyorkDetail">
          <div className="newYorkCertified">
            <p>The New York Times</p>
            <img src="/images/Verified.svg" alt="" />
          </div>
          <span>@mytimes</span>
        </div>
        <Link to={"http://localhost:5173/2"}>
          <button className="newYorkButton">Follow</button>
        </Link>
      </div>
      <div className="followCNN">
        <Link to={"http://localhost:5173/1"}>
          <img src="/images/Profile-Photo (1).png" alt="" />
        </Link>

        <div className="followCNNDetail">
          <div className="cnnCertified">
            <p>CNN</p>
            <img src="/images/Verified.svg" alt="" />
          </div>
          <span>@CNN</span>
        </div>
        <Link to={"http://localhost:5173/1"}>
          <button className="cnnButton">Follow</button>
        </Link>
      </div>
      <div className="followTwitter">
        <Link to={"http://localhost:5173/3"}>
          <img src="/images/Tweeter.svg" alt="" />
        </Link>

        <div className="followtwitterDetail">
          <div className="twitterCertified">
            <p>Twitter</p>
            <img src="/images/Verified.svg" alt="" />
          </div>
          <span>@Twitter</span>
        </div>
        <Link to={"http://localhost:5173/3"}>
          <button className="twitterButton">Follow</button>
        </Link>
      </div>
      <button className="buttonShow">Show more</button>
    </div>
  );
}

export default TrendsFollow;
