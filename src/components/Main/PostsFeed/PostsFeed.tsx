import {FeedPost} from "./FeedPost/FeedPost";
import {AddPostBlock} from "./AddPost/AddPost";
import {FC} from "react";
import {PostsType} from "../../../redux/state";

type PostsFeedType = {
  posts: PostsType[]
  addPost: (postText: string) => void
}

export const PostsFeed:FC<PostsFeedType> = ({posts,addPost}) => {

  return (
    <>
      <AddPostBlock addPost={addPost}/>
      {posts.map(post => {
        return (
          <FeedPost
            key={post.id}
            author={post.author.name}
            text={post.post.text}
            image={post.post.image}
          />
        )
      })}
    </>
  )
}