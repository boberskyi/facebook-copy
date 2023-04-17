import styleMain from './main.module.css';
import {Marketplace} from "./Marketplace/Marketplace";
import {PostsFeed} from "./PostsFeed/PostsFeed";
import {Navigate, Route, Routes} from "react-router-dom";

export const Main = () => {
  return (
    <main className={styleMain.main}>
      <div className={"mainLeft"}></div>
      <div className={"mainCenter"}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<PostsFeed/>}/>
          <Route path="/marketplace" element={<Marketplace />}/>
          {/*<Route fallback={<LoadingSpinner />} />*/}
        </Routes>
      </div>
      <div className={"mainRight"}></div>
    </main>
  )
}