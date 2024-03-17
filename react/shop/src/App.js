import './App.css';
import {Container,Nav,Navbar,Button,Dropdown  } from 'react-bootstrap';
import ShoesBox from './components/ShoesBox';
import EventPage from './pages/EventPage';
import data from './data';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './pages/DetailPage';

function App() {
  let [shoesData] = useState(data);
  let navigate = useNavigate();

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
                {shoesData.map((items,i) => (
                  <ShoesBox items={items} i={i}></ShoesBox>
                  )
                )}
              </div>
            </div>
          </>
        }></Route>
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

export default App;
