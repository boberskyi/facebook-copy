import {FeedPost} from "./FeedPost/FeedPost";

export const Main = () => {
  return (
    <main className={"main"}>
      <div className={"mainLeft"}></div>
      <div className={"mainCenter"}>
        <FeedPost title="Post 1"/>
        <FeedPost title="Post 2"/>
        <FeedPost title="Post 3"/>
        <FeedPost title="Post 4"/>
        <FeedPost title="Post 5"/>
        <FeedPost title="Post 6"/>
      </div>
      <div className={"mainRight"}></div>
    </main>
  )
}