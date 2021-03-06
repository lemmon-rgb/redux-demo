import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postSlice';

/**
 * 
 * @returns 这显示了完整的 Redux 数据流周期：
  使用 useSelector 从 store 读取初始帖子列表并渲染 UI
  我们 dispatch 了包含新帖子条目数据的 postAdded action
  postsReducer 监听到了 postAdded 动作，并用新条目更新了 posts 数组
  Redux store 告诉 UI 一些数据已经改变
  帖子列表读取更新后的帖子数组，并重新渲染 UI 以显示新帖子
 */
export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  console.log(title, content, userId)
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e =>  setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(
          title,
          content,
          userId,
        )
      )
      setTitle('');
      setContent('');
    }
  }

  const usersOptions = users.map(user => (
    <option value={user.id} value={user.id}>{user.name}</option>
  ))

  return (
    <section>
      <h2>添加新帖子</h2>
      <form>
        <label htmlFor="postTitle">帖子标题：</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">作者：</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          {/* <option value=""></option> */}
          {usersOptions}
        </select>
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={title && content && userId}>保存帖子</button>
      </form>
    </section>
  )
}