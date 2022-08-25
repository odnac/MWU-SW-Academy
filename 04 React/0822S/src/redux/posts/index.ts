import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

export interface Post {
    id: number
    userId: number
    title: string
    body: string
}

export interface PostsState {
    data: Post[]
    loading: boolean
}

export const fetchAllPost = createAsyncThunk('posts/fetchAllPost', async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
})

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id: number) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data
})

export const deletePostById = createAsyncThunk('posts/deletePostById', async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return { id }
})

export const posts = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        loading: false
    } as PostsState,
    reducers:{},
    extraReducers: {
        [fetchAllPost.pending.type]: (state: PostsState) => {
            state.data = []
            state.loading = true
        },
        [fetchAllPost.fulfilled.type]: (state: PostsState, action: PayloadAction<Post[]>) => {
            state.data = action.payload
            state.loading = false
        },
        [fetchPostById.fulfilled.type]: (state: PostsState, action: PayloadAction<Post>) => {
            const index = state.data.findIndex(post => post.id === action.payload.id)
            if(index === -1){
                state.data.push(action.payload)
            } else{
                state.data[index] = action.payload
            }
            state.loading = false
        },
        [deletePostById.fulfilled.type]: (state: PostsState, action: PayloadAction<Pick<Post, 'id'>>) => {
            const index = state.data.findIndex(post => post.id === action.payload.id)
            if(index !== -1){
                state.data.splice(index, 1)
            } 
        }
    }
})