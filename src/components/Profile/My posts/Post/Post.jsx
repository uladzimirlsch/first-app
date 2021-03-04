import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div >
                <div>
                <img src={'https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg'} alt={''}/>
                </div>
                {props.message}
                <div>
                    Like {props.likes}
                </div>
            </div>
        </div>
    )
};

export default Post;