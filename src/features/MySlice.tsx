import { createSlice } from "@reduxjs/toolkit";
import { ArticleState } from "../Type";
const initialState:ArticleState={
    articles:[
        {id:0,title:'My Article' , body:'Lorem ipsum dolor sit amet consectetur. Ab, minus?'}
    ]
}

const MySlice=createSlice({
    name:'MySlice',
    initialState,
    reducers:{
        ADD_ARTICLE:(state,action)=>{
            state.articles.push({id:state.articles.length,...action.payload})
        },
        REMOVE_ARTICLE:(state,action)=>{
            state.articles.splice(action.payload,1)
        }
    }

})

export default MySlice.reducer;
export const { ADD_ARTICLE,REMOVE_ARTICLE } = MySlice.actions