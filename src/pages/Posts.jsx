import React, {useEffect, useMemo, useRef, useState} from "react";
import '../styles/app.css'
import PostList from "../component/PostList";
import PostForm from "../component/PostForm";
import MySelect from "../component/ui/select/MySelect";
import MyInput from "../component/ui/input/MyInput";
import PostFilter from "../component/PostFilter";
import MyModal from "../component/ui/MyModal/MyModal";
import MyButton from "../component/ui/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import axios from "axios";
import PostService from "../API/PostServise";
import {getPageCount, getPagesArray} from "../component/utils/pages";

function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal , setModal]= useState(false);
    const [totalPages,setTotalPages]=useState(0)
    const [limit, setLimit]=useState(5)
    const [page,setPage]=useState(1)
    const sortedAndSearchedPosts=usePosts(posts,filter.sort,filter.query);

    const [isPostLoading, setIsPostLoading] = useState (false)
    let pagesArray = getPagesArray(totalPages)



    async function fetchPosts(){
        setIsPostLoading(true)
        const response=await PostService.getAll(limit,page)
        setPosts(response.data)
        const totalCount=response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
        setIsPostLoading(false)

    }
    console.log(totalPages)

    useEffect(()=>{
            fetchPosts()
        },[page]
    )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage=(page)=>{
        setPage(page)

    }
    return (
        <div className="App">
            <button onClick={fetchPosts}>give posts</button>
            <MyButton style={{marginTop:30}} onClick={()=>setModal(true)}>Создать пользователя</MyButton>


            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <div>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}/>

            </div>
            {isPostLoading
                ?<h1>Идет загрузка...</h1>
                :<div> {posts.length !== 0
                    ? <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
                    : <h1>База пуста</h1>
                }
                </div>
            }
            <div className='page__wrapper'>
                {pagesArray.map(p=>
                    <span
                        onClick={()=>changePage(p)}
                        key={p}
                        className={page===p ? 'page page__current':'page'}>
                        {p}
                    </span>
                )}
            </div>

        </div>
    );
}

export default Posts;
