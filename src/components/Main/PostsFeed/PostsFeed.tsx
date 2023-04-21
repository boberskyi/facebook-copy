import {FeedPost} from "./FeedPost/FeedPost";
import {v1} from "uuid";

type PostsType = {
  id: string,
  avaAuthor: string,
  authorName: string,
  authorLink: string,
  postDate: string,
  postText: string,
  postImage: string,
  postReactions: any,
  postComments: any
}
export const PostsFeed = () => {
  const posts: PostsType[] = [
    {
      id: v1(),
      avaAuthor: '',
      authorName: 'Autor 1',
      authorLink: '',
      postDate: '',
      postText: 'Lorem ipsum',
      postImage: '',
      postReactions: '',
      postComments: ''
    },
    {
      id: v1(),
      avaAuthor: '',
      authorName: 'Autor 2',
      authorLink: '',
      postDate: '',
      postText: 'Lorem ipsum',
      postImage: '',
      postReactions: '',
      postComments: ''
    },
    {
      id: v1(),
      avaAuthor: '',
      authorName: 'Autor 3',
      authorLink: '',
      postDate: '',
      postText: 'Lorem ipsum',
      postImage: '',
      postReactions: '',
      postComments: ''
    },
    {
      id: v1(),
      avaAuthor: '',
      authorName: 'Autor 4',
      authorLink: '',
      postDate: '',
      postText: 'Lorem ipsum',
      postImage: '',
      postReactions: '',
      postComments: ''
    },
    {
      id: v1(),
      avaAuthor: '',
      authorName: 'Autor 5',
      authorLink: '',
      postDate: '',
      postText: 'Lorem ipsum',
      postImage: '',
      postReactions: '',
      postComments: ''
    },
    {
      id: v1(),
      avaAuthor: '',
      authorName: 'Autor 6',
      authorLink: '',
      postDate: '',
      postText: 'Lorem ipsum',
      postImage: '',
      postReactions: '',
      postComments: ''
    },
  ];
  return (
    <>
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