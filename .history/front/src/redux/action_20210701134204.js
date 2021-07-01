import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'get',
    initialState: {
        thanhpho:0,
       
    },
    reducers: {
    fetchthanhpho:state=>{
    
         state.thanhpho +=1
         
        }
    }
})

export const {fetchthanhpho} = slice.actions

export default slice.reducer;