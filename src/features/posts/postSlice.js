import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'First Post',
    content: 'Hello',
    user: '0',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    user: '2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  }
]
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            data: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          }
        }
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const exisitingPost = state.find(post => post.id === postId)
      if (exisitingPost) {
        exisitingPost.reactions[reaction]++
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const exisitingPost = state.find(post => post.id === id)
      if (exisitingPost) {
        exisitingPost.title = title;
        exisitingPost.content = content;
      }
    }
  }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer

export const selectAllPosts = state => state.posts

export const selectPostById = (state, postId) => state.posts.find(post => post.id === postId)