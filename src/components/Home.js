import React from 'react';
import LogoAlta from '../img/logo-ALTA.png';
import '../css/fromless.css';
import matthew from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import HeaderAlta from '../header/HeaderAlta';
import Header from '../header/Header';

function Home() {
  return (
    <div>
      <HeaderAlta />
      <div className="content asik">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="profpic">
                <div className="">
                  <img src={matthew} alt="profpic" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="bio">
                <h3>Hi, my name is</h3>
                <h1>Anne Sullivan</h1>
                <h2>I build things for the web</h2>
                <button type="button" className="btn btn-warning">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
