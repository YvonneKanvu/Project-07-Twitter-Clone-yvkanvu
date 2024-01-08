import PageTitle from "../components/PageTitle";
import TopTweets from "../components/TopTweets";

const Header = () => {
    return ( 
        <div className="header">
            <PageTitle/>
            <TopTweets/>
        </div>
     );
}
 
export default Header;