import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function PageProfil() {
  return (
    <div className="timeline">
      <div className="utilisateurProfil">
        {/* <Link to="/">  */}
        <a href="http://localhost:5173/">
          <Icon className="fleshReturn" icon="ph:arrow-left-bold" />
        </a>

        {/* </Link> */}
        <h1>Yvonne Kanvu</h1>
      </div>
      <div className="baniere">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LumumbaBruxelles1960.jpg/250px-LumumbaBruxelles1960.jpg"
          className="utilisateurImage"
          alt="utilisateurImage"
        />
      </div>
      <button className="utilisateurButton">Editeur profil</button>
      <div className="utilisateurInfo">
        <h1>Yvonne Kanvu</h1>
        <span>@yvkanvu</span>
        <span>
          <Icon icon="uiw:date" /> joined September
        </span>
      </div>
      <div className="utilisateurFollow">
        <p>0 Following 0 Followers</p>
      </div>
      <div>
        <ul className="utilisateurActivity">
          <li>Posts</li>
          <li>Replies</li>
          <li>Media</li>
          <li>Likes</li>
        </ul>
      </div>
    </div>
  );
}

export default PageProfil;
