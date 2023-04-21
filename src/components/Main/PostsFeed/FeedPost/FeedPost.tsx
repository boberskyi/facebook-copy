import {FC} from "react";
import {FeedPostStyled} from "./FeedPostStyles";

export type FeedPostType = {
  author: string,
  text: string,
  image: string
}

export const FeedPost:FC<FeedPostType> = ({author, text, image}) => {
  return (
    <FeedPostStyled>
      <div className={"postTop"}>
        <div className={"avatarPreview"}></div>
        <div className={"title"}>
          {author}
        </div>
        <div className={"time"}></div>
      </div>
      <div className={"postDescription"}>{text}</div>
      <img src={image} alt={author}/>
    </FeedPostStyled>
  )
}