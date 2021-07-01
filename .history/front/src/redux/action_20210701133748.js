import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'get',
    initialState: {
        thanhpho:[],
       
    },
    reducers: {
    
        add : state => {
            state.value +=1;
        },
          
         
        
    }
})

export const {add} = slice.actions

export default slice.reducer;