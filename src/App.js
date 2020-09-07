import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Row, Col, Form } from "react-bootstrap"

import SideBar from "./components/sidebar"
import Home from "./pages/home"

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {
  return (
    <Router>
      <SideBar />
      <Route exact path="/" component={Home} />
      <div id="footer">

        <Row style={{margin:"0px 0px"}}>
          <Col xs={3}><div className="action">
            <a href="#" className="previous jcarousel-prev"><i className="fa fa-step-backward"></i></a>
            <a href="#" className="play"><i className="fa fa-play-circle fa-fw" style={{ color: "#007bff" }}></i></a>
            <a href="#" className="next jcarousel-next"><i className="fa fa-step-forward"></i></a>
          </div></Col>
          <Col xs={6}>
            <div className="length">
              <Row style={{marginTop: "10px"}}>
                <Col xs={1}></Col>
                <Col xs={5} >
                  <div className="music" style={{color: "black"}}> Music Name <span style={{color:"grey"}}> -Artist Name</span></div>
                </Col>
                <Col xs={1}></Col>
                <Col xs={2} className="d-flex" style={{justifyContent: "space-around"}}>
                <a href="#" ><i className="fa fa-microphone grey"></i></a>
            <a href="#" ><i className="fa fa-heart fa-fw grey" ></i></a>
            <a href="#" ><i className="fa fa-plus grey"></i></a>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <Row>
                <Col xs={1}><label for="fader" style={{ float: "right" }}>1:00</label></Col>
                <Col xs={8}>
                        <Form.Control type="range" />
                  </Col>
                <Col xs={1}><output for="fader" className="duration"> 1:00</output></Col>
              </Row>
            </div>
          </Col>
          <Col xs={3} className="d-flex" style={{justifyContent: "space-around",alignItems: "center"}}>
            <a href="#" ><i className="fa fa-random grey"></i></a>
            <a href="#" ><i className="fa fa-sync-alt fa-fw grey" ></i></a>
            <a href="#" ><i className="fa fa-volume-up grey"></i></a>
            <div className="">
              <img src="http://i.imgur.com/Hw7sWGU.png" width="40" height="40" style={{borderRadius:"5px"}}/>
              
            </div>
            <a className="grey">Queue</a>
          </Col>
        </Row>


      </div>
    </Router>
  );
}

export default App;
