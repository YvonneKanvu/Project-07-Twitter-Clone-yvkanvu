import { Link } from "react-router-dom";

const Avatar = () => {
    return (
        <Link to={"/username"}>

        <div className="avatar">
           <img src="/images/profile-photo.png" alt=""  />
        </div>
     </Link>
  
        );
    }  
export default Avatar;