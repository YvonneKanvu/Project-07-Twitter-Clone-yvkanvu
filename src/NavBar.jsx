import { Link } from "react-router-dom";
function NavBar() {
    return ( 
        <nav>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/HomeTweet">HomeTweet</Link></li>
                <li><Link to="/Profil">Profil</Link></li>
                <li><Link to="/ProfilTweet">ProfilTweet</Link></li>
            </ul>
        </nav>
     );
}

export default NavBar;