import one from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    let myPostsData = [
        {id: 1, message: 'Hello, world.', likes: '25'},
        {id: 2, message: 'It is my first post.', likes: '15'},
        {id: 3, message: "That's good network.", likes: '38'}
    ];
    let myPost = myPostsData
        .map((posts) => <Post message={posts.message} likes={posts.likes}/>);

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