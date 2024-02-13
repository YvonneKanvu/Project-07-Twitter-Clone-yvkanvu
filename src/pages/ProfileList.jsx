import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import DataSectionTweets from "../Data.json";
import Tweets from "../components/Timeline/Tweets";

function ProfilList() {
  const { users } = useParams();

  const user = DataSectionTweets.profiles.find((e) => e.tweetTitle === users);
  console.log(user);

  return (
    <div className="timeline">
      <div className="utilisateurProfil">
        {/* <Link to="/">  */}
        <a href="http://localhost:5173/">
          <Icon className="fleshReturn" icon="ph:arrow-left-bold" />
        </a>

        {/* </Link> */}
        <h1>{user.tweetTitle}</h1>
      </div>
      <div className="baniereprofilList">
        <img
          src={user.tweetIcon}
          className="utilisateurImage"
          alt="utilisateurImage"
        />
      </div>
      <button className="utilisateurButton">Editeur profil</button>
      <div className="utilisateurInfo">
        <h1>{user.tweetTitle}</h1>
        <span>{user.tweetIdentite}</span>
       <img src= {user.tweetAutentic} className="utilisateurVerified" alt="utilisateurVerified"/>
        <span>
          <Icon icon="uiw:date" /> joined {user.tweetDate}
        </span>
      </div>
      <div className="utilisateurFollow">
        <p>
          {user.following} Following {user.followers} Followers
        </p>
      </div>
    </div>
  );
}

export default ProfilList;
