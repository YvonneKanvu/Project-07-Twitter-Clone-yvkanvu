import { Icon } from "@iconify/react";


function PageProfil() {
    
        return (
             <div className="timeline">
                <h1 className="utilisateurProfil">Yvonne Kanvu</h1>
                <Icon className="fleshReturn" icon="ph:arrow-left-bold" />
                <div className="baniere"> 
                  <img  src="src\images\Bitmap.png"className="utilisateurImage" alt="" />
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
                    <p>0 Following    0 Followers</p>
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