import styleMain from './main.module.css';
import {Marketplace} from "./Marketplace/Marketplace";
import {PostsFeed} from "./PostsFeed/PostsFeed";

export const Main = () => {
  return (
    <main className={styleMain.main}>
      <div className={"mainLeft"}></div>
      <div className={"mainCenter"}>
        <PostsFeed />

        <Marketplace />
      </div>
      <div className={"mainRight"}></div>
    </main>
  )
}