import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated, selectPostById } from './postSlice';

export const EditPostForm = ({ match }) => {
  const { postId } = match.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const post = useSelector(state => selectPostById(state, postId))
  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content
        }),
        history.push('/post/${postId}')
      )
      setTitle('');
      setContent('');
    }
  }

  return (
    <section>
      <h2>编辑帖子</h2>
      <form>
        <label htmlFor="postTitle">帖子标题：</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>保存帖子</button>
      </form>
    </section>
  )
}