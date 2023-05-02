import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {stateType} from "./redux/state";

type AppType = {
  state: stateType
  addPost: (postText: string) => void
}

const App:FC<AppType> = ({state,addPost}) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header navLinks={state.navLinks}/>
        <Main
          posts={state.posts}
          addPost={addPost}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
