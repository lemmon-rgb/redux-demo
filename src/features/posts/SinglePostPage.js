import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactionButtons } from './ReactionButton';

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector(state => {
    console.log("🚀 ~ file: SinglePostPage.js ~ line 8 ~ SinglePostPage ~ state", state)
    return state.posts.find(post => post.id === postId)
  }
  )

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          编辑
        </Link>
      </article>
    </section>
  )
}