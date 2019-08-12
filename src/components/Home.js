import React from 'react';
import LogoAlta from '../img/logo-ALTA.png';
import '../css/fromless.css';
import matthew from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

function Home() {
    return (
      <div >
        <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-7">
                    <div className="header-logo text-left">
                        <img src={LogoAlta} width="133.52px"/>
                    </div>
                </div>
                <div className="col-12 col-md-5 align-items-center">
                    <div className="float-right">
                        <div className="header-menu">
                            <nav>
                                <ul>
                                    <li><a id="now" href="#">HOME</a></li>
                                    <li><a href="about-me.html">ABOUT</a></li>
                                    <li><a href="#">EXPERIENCE</a></li>
                                    <li><a href="contact.html">CONTACT</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="content asik">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="profpic">
                        <div className="">
                                <img src={matthew} alt="profpic"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="bio">
                            <h3>Hi, my name is</h3>
                            <h1>Anne Sullivan</h1>
                            <h2>I build things for the web</h2>
                            <button type="button" className="btn btn-warning">Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
      </div>
    );
  }
  
  export default Home;
  