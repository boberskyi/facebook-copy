import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {navLinksType, PostsType} from "./index";

type AppType = {
  navLinks: navLinksType[],
  posts: PostsType[]
}

const App:FC<AppType> = ({navLinks, posts}) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header navLinks={navLinks}/>
        <Main posts={posts}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
