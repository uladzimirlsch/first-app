import styles from "./Post.module.css"
import {PostType} from "../../../../types/types";
import React, {FC} from "react";
import {Dropdown} from "antd";
import {useDispatch} from "react-redux";
import {DownOutlined} from "@ant-design/icons";
import {menu} from "./Delete";

type PropsType = {
    post: PostType
}

const Post: FC<PropsType> = ({post}) => {

    const dispatch = useDispatch()

    const deletePost = (postId: number) => {
        dispatch({type: 'DELETE_POST', postId})
    }

    return (
        <div className={styles.item}>
            {post.post}
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link"
                   onClick={(_event: React.MouseEvent<HTMLElement>) => deletePost}><DownOutlined/>
                </a>
            </Dropdown>
        </div>
    )
};

export default Post;