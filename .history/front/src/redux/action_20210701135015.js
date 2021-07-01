import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'get',
    initialState: {
        thanhpho:[],
       
    },
    reducers: {
    fetchthanhpho:state=>{
    
           state.thanhpho = 'ok'
         
        }
    }
})

export const {fetchthanhpho} = slice.actions

export default slice.reducer;