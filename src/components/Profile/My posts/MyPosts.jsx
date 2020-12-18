import one from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={`${one.item} ${one.active}`}>
            My Posts
            <div>
                <textarea>
                </textarea>
            </div>
            <div>
                <button>Add info</button>
                <button>Remove</button>
            </div>
            <div>
            <Post message={'Hello, world'} likes={'25'}/>
            <Post message={'It is my first post'} likes={'15'}/>
            <Post/>
            </div>
        </div>
    )

}
export default MyPosts;