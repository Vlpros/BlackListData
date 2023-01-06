import './App.css';
import React, {useEffect, useMemo, useRef, useState} from "react";
import './styles/app.css'
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import MySelect from "./component/ui/select/MySelect";
import MyInput from "./component/ui/input/MyInput";
import PostFilter from "./component/PostFilter";
import MyModal from "./component/ui/MyModal/MyModal";
import MyButton from "./component/ui/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostServise";
import {getPageCount, getPagesArray} from "./component/utils/pages";
import {BrowserRouter,Route} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";

function App() {
return(
    <BrowserRouter>


    </BrowserRouter>
)

}

export default App;
