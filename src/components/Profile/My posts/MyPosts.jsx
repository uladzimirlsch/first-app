import one from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let myPost =
        props.myPostData.map((posts) => <Post message={posts.message} likes={posts.likes}/>);

    return (
        <div className={one.itemBlock}>
            <h2>My Posts</h2>
            <div>
                <textarea>
                </textarea>
            </div>
            <div>
                <button>Add info</button>
                <button>Remove</button>
            </div>
            <div>
                {myPost}
            </div>
        </div>
    )

};
export default MyPosts;