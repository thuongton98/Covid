import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'get',
    initialState: {
        thanhpho:[],
       
    },
    reducers: {
    fetchthanhpho:(e)=>{
    
        console.log(e)
         
        }
    }
})

export const {fetchthanhpho} = slice.actions

export default slice.reducer;

export const fetchPosts = ()=>dispatch=>{
    
    fetch('https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST?fbclid=IwAR1o7kdFhs5VHsR2q1m5EBhIG0cCSyLHg8D8xpbtSKKvngtpSUWMGWWGn5c&utm_source=j2team&utm_medium=url_shortener')
          .then(res => res.json())
          .then(thanhpho => {
            dispatch(fetchthanhpho(thanhpho))
            
          });
         
        
    
 
}