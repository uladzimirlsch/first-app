import styles from "./Post.module.css"
import {PostType} from "../../../../types/types";
import {FC} from "react";

type PropsType = {
    post: PostType
}

const Post: FC<PropsType> = ({post}) => {
    return (
        <div className={styles.item}>
            <div >
                <div>
                <img src={'https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg'} alt={''}/>
                </div>
                {post.post}
            </div>
        </div>
    )
};

export default Post;