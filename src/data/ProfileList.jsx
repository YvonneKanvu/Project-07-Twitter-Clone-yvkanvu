import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import DataSectionTweets from "./DataSectionTweets";

function ProfilList() {
    const {id} = useParams()

    const user = DataSectionTweets.find((e)=> e.id == id)
    console.log(DataSectionTweets[0])

  return (
    <div className="timeline">
      <div className="utilisateurProfil">
        {/* <Link to="/">  */}
        <a href="http://localhost:5173/">
          <Icon className="fleshReturn" icon="ph:arrow-left-bold" />
        </a>

        {/* </Link> */}
        <h1>{user.name}</h1>
      </div>
      <div className="baniere">
        <img
          src={user.tweetIcon}
          className="utilisateurImage"
          alt="utilisateurImage"
        />
      </div>
      <button className="utilisateurButton">Editeur profil</button>
      <div className="utilisateurInfo">
        <h1>{user.name}</h1>
        <span>@{user.username}</span>
        <span>
          <Icon icon="uiw:date" /> joined {user.joinDate}
        </span>
      </div>
      <div className="utilisateurFollow">
        <p>{user.following} Following {user.followers} Followers</p>
      </div>
      {user && (
        <div className="userTweets">
          <h4>{user.tweetTitle}</h4>
          <p>{user.tweetBody}</p>
        </div>
      )}
      
    </div>
  );
}

export default ProfilList;
