import React, {useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({name: '', surename: '',date:'',body:''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now(),

        }
        create(newPost)
        setPost({name: '', surename: '',date:'',body:''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.name}
                onChange={e => setPost({...post, name: e.target.value})}
                type="text"
                placeholder="Имя"
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <MyInput
                value={post.surename}
                onChange={e => setPost({...post, surename: e.target.value})}
                type="text"
                placeholder="Фамилия"
            />
            <MyInput
                value={post.date}
                onChange={e => setPost({...post, date: e.target.value})}
                type="text"
                placeholder="Дата рождения"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
