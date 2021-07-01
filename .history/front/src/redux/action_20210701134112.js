import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'get',
    initialState: {
        thanhpho:[],
       
    },
    reducers: {
    fetchthanhpho:state=>{
    
           console.log('x')
         
        }
    }
})

export const {thanhpho} = slice.actions

export default slice.reducer;