import {FeedPost} from "./FeedPost/FeedPost";
import {AddPostBlock} from "./AddPost/AddPost";
import {FC} from "react";
import {PostsType} from "../../../index";

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