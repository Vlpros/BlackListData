import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = (props) => {
    if(!props.posts.length){
        return (
            <h1>База пуста</h1>
        )
    }
    return (
        <div>
            <h1>База BlackList</h1>
            <TransitionGroup>
                {props.posts.map((post)=>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'>
                        <PostItem remove={props.remove} post={post} />
                    </CSSTransition>

                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;