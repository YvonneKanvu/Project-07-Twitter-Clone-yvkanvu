import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";
const TweetEditorForm = () => {
    return ( 
        <div className="tweet-editor-form">
            <TweetEditorInput/>
            <TweetEditorButtons/>

        </div>
     );
}
 
export default TweetEditorForm;