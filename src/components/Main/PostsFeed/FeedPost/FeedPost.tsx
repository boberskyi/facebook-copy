import {FC} from "react";

export type FeedPostType = {
  title: string
}

export const FeedPost:FC<FeedPostType> = ({title}) => {
  return (
    <div className={"post"}>
      <div className={"postTop"}>
        <div className={"avatarPreview"}></div>
        <div className={"title"}>
          {title}
        </div>
        <div className={"time"}></div>
      </div>
      <div className={"postDescription"}></div>
      <div className={"postImage"}></div>
    </div>
  )
}