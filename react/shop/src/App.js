import './App.css';
import {Container,Nav,Navbar,Button,Dropdown  } from 'react-bootstrap';
import ShoesBox from './components/ShoesBox';
import EventPage from './pages/EventPage';
import data from './data';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './pages/DetailPage';
import OrorTest from './pages/OrorTest';
import axios from 'axios';

function App() {
  let navigate = useNavigate();
  let [shoesData, setShoesData] = useState(data);
  let [loading, setLoading] = useState(false);
  let [alertMore, setAlertMore] = useState(false);
  let [click, setClick] = useState(0);

  let handleClick = function(){
    setClick(click + 1);
  } 

  function moreProduct() {
    setLoading(true);

    let url;
    if ( click === 1 ) {
      url = 'https://codingapple1.github.io/shop/data2.json';
    } else if ( click === 2 ) {
      url = 'https://codingapple1.github.io/shop/data3.json';
    } else if ( click >= 3 ) {
        setLoading(false);
        setAlertMore(true);
      return;
    }  
    
    axios.get(url)
      .then((result)=>{
        let copy = [...shoesData, ...result.data];
        setShoesData(copy);
        setLoading(false);
      }).catch(()=>{
      console.log('실패');
      setLoading(false);
    })
    
  }

  useEffect(()=>{
    if ( click !== 0 ) {
      moreProduct();
    }
  },[click]);
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container style={{justifyContent:"flex-start"}}>
          <Navbar.Brand href="#home" style={{marginRight:"30px"}}>ReactShop</Navbar.Brand>
          <Button variant="danger" className="bt-menu" onClick={()=>{navigate('/')}}>홈</Button>
          <Button variant="danger" className="bt-menu" onClick={()=>navigate('/detail')}>상세페이지</Button>
          <Dropdown className="bt-menu">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              이벤트
            </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={()=>navigate('/event')}>이벤트</Dropdown.Item>
                <Dropdown.Item href="#" onClick={()=>navigate('/event/one')}>혜택 1</Dropdown.Item>
                <Dropdown.Item href="#" onClick={()=>navigate('/event/two')}>혜택 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {loading && <Loading />}
                {shoesData.map((items,i) => (
                  <ShoesBox items={items} i={i}></ShoesBox>
                  )
                )}
                {alertMore && <AlertMore />}
              </div>
            </div>
            <button onClick={()=>{
              handleClick();
            }}>버튼</button>
          </>
        }></Route>
        <Route path="/oror" element={<OrorTest /> }></Route>
        <Route path="/detail/:id" element={<DetailPage shoesData={shoesData} /> }></Route>
        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫주문시 혜택!</p>} /> 
          <Route path="two" element={<p>재주문시 혜택 더!</p>} /> 
        </Route>

        <Route path="*" element={ <div>없는페이지임</div> } />
      </Routes>

    </div>
  );
}

function Loading() {
  return (
    <div>
        로딩 중...
    </div>
  )
}

function AlertMore() {
  return (
    <div>
        상품이 없습니다.
    </div>
  )
}

export default App;
