import styleMain from './main.module.css';
import {Marketplace} from "./Marketplace/Marketplace";
import {PostsFeed} from "./PostsFeed/PostsFeed";
import {Navigate, Route, Routes} from "react-router-dom";
import {Events} from "./Events/Events";
import {Groups} from "./Groups/Groups";
import {PostsType} from "../../App";
import {FC} from "react";

type MainType = {
  posts: PostsType[]
}

export const Main:FC<MainType> = ({posts}) => {
  return (
    <div className={styleMain.main}>
      <div className={styleMain.mainLeft}>
        <div className={styleMain.mainLRWrapper}>
      </div>
    </div>
  <main className={styleMain.mainCenter}>
    <Routes>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/" element={<PostsFeed posts={posts}/>}/>
      <Route path="/marketplace" element={<Marketplace/>}/>
      <Route path="/groups" element={<Groups/>}/>
      <Route path="/events" element={<Events/>}/>
      {/*<Route fallback={<LoadingSpinner />} />*/}
    </Routes>
  </main>
  <div className={styleMain.mainRight}>
    <div className={styleMain.mainLRWrapper}>

    </div>
  </div>
</div>
)
}