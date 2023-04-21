import {FeedPost} from "./FeedPost/FeedPost";
import {AddPostBlock} from "./AddPost/AddPost";
import {PostsType} from "../../../App";
import {FC} from "react";

type PostsFeedType = {
  posts: PostsType[]
}

export const PostsFeed:FC<PostsFeedType> = ({posts}) => {

  return (
    <>
      <AddPostBlock/>
      {posts.map(post => {
        return (
          <FeedPost
            key={post.id}
            author={post.authorName}
            text={post.postText}
            image={post.postImage}
          />
        )
      })}
    </>
  )
}