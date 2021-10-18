import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  // 根据日期时间字符串，对帖子安装时间倒序进行排序
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          查看
        </Link>
      </article>
    )
  })

  return (
    <section className="post-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}