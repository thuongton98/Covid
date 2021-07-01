import React from 'react'
import {useEffect} from 'react'
import {fetchthanhpho,fetchthegioi,fetchcanhiem} from '../../redux/action'
import {useDispatch,useSelector} from 'react-redux'


function Home(){
  
    const dispatch = useDispatch()
   
    useEffect(()=>{
      
        dispatch(fetchthanhpho())
        dispatch(fetchthegioi())
        dispatch(fetchcanhiem())
    },[dispatch])

   const thanhpho = useSelector(state=>state.get.thanhpho)
   const thegioi = useSelector(state=>state.get.thegioi)
   const canhiem = useSelector(state=>state.get.cacca)
   const wait = useSelector(state=>state.get.wait)
   console.log(wait)
   function showvietnam(e){
     
    
      return(
        <table>
      <tbody><tr>
          <th>Số Ca Nhiễm</th>
          <th>Đang Điều Trị</th>
          <th>Khỏi</th>
          <th>Tử Vong</th>
        </tr>
        <tr>
          <td>{new Intl.NumberFormat().format(e.infected)}</td>
          <td>{new Intl.NumberFormat().format(e.treated)}</td>
          <td>{new Intl.NumberFormat().format(e.recovered)}</td>
          <td>{new Intl.NumberFormat().format(e.deceased)}</td>
        </tr>
      </tbody></table>
      )
     
   }
   function showthegioi(e){
  
      return(
        <table>
        <tbody><tr>
            <th>Số Ca Nhiễm</th>
            <th>Mới xác nhận</th>
            <th>Khỏi</th>
            <th>Tử Vong</th>
          </tr>
          <tr>
            <td>{new Intl.NumberFormat().format(e.TotalConfirmed)}</td>
            <td>{new Intl.NumberFormat().format(e.NewConfirmed)}</td>
            <td>{new Intl.NumberFormat().format(e.TotalRecovered)}</td>
            <td>{new Intl.NumberFormat().format(e.TotalDeaths)}</td>
          </tr>
        </tbody></table>
       )
     
   }
   function showthanhpho(e,v){
  
      
       if(v.detail!==undefined&&e!==undefined){
        return(
          <table>
          <tbody><tr>
              <th>Thành Phố</th>
              <th>Tổng Ca</th>
              <th>Khỏi Bệnh</th>
              <th>Đang Điều trị</th>
              <th>Tử Vong</th>
            </tr>
            
              { v.detail.map((value,index)=>{
                const find = e.filter(function(value1){
                  return value.['hc-key'] === value1.['hec-key']
                })
                var x
                if(find[0]!==undefined){
                  x = find[0].name
                }else{
                  x = ''
                }
          return(
            <tr key={index}>
              <td>{x}</td>
              <td>{value.value}</td>
              <td>{value.socakhoi}</td>
              <td>{value.socadangdieutri}</td>
              <td>{value.socatuvong}</td>
            </tr>
            
          )
        })}
            
           
          </tbody></table>
         )
       
       }
       
     
    
   }

    return(
        <div>
        <nav>
          <div className="icon">
            <div className="icon-i">Covid-19</div>
            <div className="icon-search">
              <input type="text" placeholder="Search ....." />
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path d="M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z" /></svg>
            </div>
          </div>
          <ul className="nav-i">
            <li>More ....!!</li>
            <li>Contact</li>
          </ul>
        </nav>
        <section className="case">
          <div>
            <span>Việt Nam</span>
            {showvietnam(canhiem)}
            <div className="line" />
            <span className="word">Thế Giới</span>
            {showthegioi(thegioi)}
          </div>
        </section>
        <section className="all-case">
          <h3>Số Ca Nhiễm Các Thành Phố Ở Việt Nam</h3>
          <div>
           {showthanhpho(thanhpho,canhiem)}
          </div>
          <div className="line" />
        </section>
      
       
        <footer>   
          <a href="/">Thuong</a>
        </footer>
      </div>
    )
}

export default Home