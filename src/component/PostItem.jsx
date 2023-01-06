import React from 'react';
import MyButton from "./ui/button/MyButton";

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.name} {props.post.surename} {props.post.date}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post_btns">
                    <MyButton onClick={()=>props.remove(props.post)}>Удалить</MyButton>

                </div>

            </div>
        </div>
    );
};

export default PostItem;