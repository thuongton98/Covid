import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'get',
    initialState: {
        thanhpho:[],
        thegoi:[],
    },
    reducers: {
    setthanhpho:(state, { payload })=>{
    
        state.thanhpho = payload.key
         
        },
    setthegioi:(state,{payload})=>{
        state.thegoi = payload.key
    }
    }
})

export const {setthanhpho,setthegioi} = slice.actions

export default slice.reducer;

export const fetchthanhpho = ()=>dispatch=>{
    
    fetch('https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST?fbclid=IwAR1o7kdFhs5VHsR2q1m5EBhIG0cCSyLHg8D8xpbtSKKvngtpSUWMGWWGn5c&utm_source=j2team&utm_medium=url_shortener')
          .then(res => res.json())
          .then(thanhpho => {
            dispatch(setthanhpho(thanhpho))
            
          });
         
        
    
 
}
export const fetchthegioi = ()=>dispatch=>{
    
    fetch('https://api.covid19api.com/summary')
          .then(res => res.json())
          .then(thegoi => {
            dispatch(setthegioi(thegoi))
            
          });
         
        
    
 
}