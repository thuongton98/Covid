import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'get',
    initialState: {
        thanhpho:[],
        thegioi:[],
        cacca:[],
    },
    reducers: {
    setthanhpho:(state, { payload })=>{
    
        state.thanhpho = payload.key
         
        },
    setthegioi:(state,{payload})=>{
       state.thegioi = payload.Global
    },
    setcacca:(state,{payload})=>{
        console.log(payload)
    }
    }
   
})

export const {setthanhpho,setthegioi,setcacca} = slice.actions

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
          .then(thegioi => {
           dispatch(setthegioi(thegioi))
            
          });
         
        
    
 
}
export const fetchcanhiem = ()=>dispatch=>{
    
    fetch('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST?fbclid=IwAR1UCKt-lM0mITqxyalzx-XdQ3cFYX51Il_7kU0X79sS5LDZwdIp7FFPAxg&utm_source=j2team&utm_medium=url_shortener')
          .then(res => res.json())
          .then(canhiem => {
           dispatch(setcacca(canhiem))
            
          });
         
        
    
 
}