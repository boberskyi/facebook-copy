import styleMain from './main.module.css';
import {Marketplace} from "./Marketplace/Marketplace";
import {PostsFeed} from "./PostsFeed/PostsFeed";
import {Navigate, Route, Routes} from "react-router-dom";
import {Events} from "./Events/Events";
import {Groups} from "./Groups/Groups";

export const Main = () => {
  return (
    <main className={styleMain.main}>
      <div className={styleMain.mainLeft}>
        <div className={styleMain.mainLRWrapper}>

      </div>
    </div>
  <main className={styleMain.mainCenter}>
    <Routes>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/" element={<PostsFeed/>}/>
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
</main>
)
}