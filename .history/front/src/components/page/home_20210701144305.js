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
     console.log(v.detail&&v.detail['hc-key'])
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
        <section className="alert">
          <h3>DIỄN BIẾN DỊCH</h3>
          <div>
            <h4>05:55 01/07/2021</h4>
            <h4>THÔNG BÁO VỀ 189 CA MẮC MỚI  (BN16864-17052)</h4>
            <p>Ghi nhận trong nước tại TP. Hồ Chí Minh (158), Tiền Giang (16), Phú Yên (8 ), Hưng Yên (6), Vĩnh Long (1); trong đó 188 ca được phát hiện trong khu cách ly hoặc khu đã được phong toả.</p>
            <p>- 6 CA BỆNH (BN16864-BN16869) ghi nhận tại tỉnh Hưng Yên là các trường hợp F1, đã được cách ly từ trước. Kết quả xét nghiệm ngày 30/6/2021 dương tính với SARS-CoV-2. Hiện đang cách ly, điều trị tại Bệnh viện Bệnh Nhiệt đới Trung ương cơ sở Đông Anh.</p>
            <p>- 8 CA BỆNH (BN16870-BN16877) ghi nhận tại tỉnh Phú Yên là các trường hợp F1 trong khu cách ly, khu vực đã được phong tỏa. Kết quả xét nghiệm ngày 29/6/2021 dương tính với SARS-CoV-2.</p>
            <p>- 158 CA BỆNH (BN16878-BN17035) ghi nhận tại TP. Hồ Chí Minh là các trường hợp trong khu cách ly, khu vực đã được phong tỏa. Kết quả xét nghiệm dương tính với SARS-CoV-2.          </p>
            <p>- 1 CA BỆNH (BN17036) ghi nhận tại tỉnh Vĩnh Long: nữ, 27 tuổi, địa chỉ tại huyện Trà Ôn, tỉnh Vĩnh Long; có tiền sử đi về từ TP. Hồ Chí Minh đã chủ động khai báo y tế. Kết quả xét nghiệm ngày 30/6/2021 dương tính với SARS-CoV-2.</p>
            <p>- 16 CA BỆNH (BN17037-BN17052) ghi nhận tại tỉnh Tiền Giang là các trường hợp F1, đã được cách ly. Kết quả xét nghiệm ngày 29/6/2021 dương tính với SARS-CoV-2.</p>
          </div>
          <button>Add Alert</button>
        </section>
        <footer>   
          <a href="/">Thuong</a>
        </footer>
      </div>
    )
}

export default Home