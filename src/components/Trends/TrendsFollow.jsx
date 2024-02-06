function TrendsFollow() {
    return ( 
        <div className="trendsFollow">
            <h5>Who to follow</h5>
            <div className="followNewyork">
                <img src="/images/Tweet-Profile-Photo.png" alt=""/>
                    <div className="followNewyorkDetail">
                           <div className="newYorkCertified">
                            <p>The New York Times</p>
                            <img src="/images/Verified.svg" alt=""/>
                           </div>       
                           <span>@mytimes</span>
                    </div>
                    <button className="newYorkButton">Follow</button> 
            </div>
            <div className="followCNN">
                <img src="/images/Profile-Photo (1).png" alt=""/>
                    <div className="followCNNDetail">
                           <div className="cnnCertified">
                            <p>CNN</p>
                            <img src="/images/Verified.svg" alt=""/>
                           </div>       
                           <span>@CNN</span>
                    </div>
                     <button className="cnnButton">Follow</button> 
            </div>
            <div className="followTwitter">
                <img src="/images/Tweeter.svg" alt=""/>
                    <div className="followtwitterDetail">
                           <div className="twitterCertified">
                            <p>Twitter</p>
                            <img src="/images/Verified.svg" alt=""/>
                           </div>       
                           <span>@Twitter</span>
                    </div>
                     <button className="twitterButton">Follow</button> 
            </div>
            <button className='buttonShow'>Show more</button>
        </div>
     );
}

export default TrendsFollow;