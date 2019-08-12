import React from 'react';
import LogoAlta from '../img/logo-ALTA.png';
import '../css/fromless.css';
import matthew from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

function Home() {
    return (
      <div >
        <header>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-7">
                    <div class="header-logo text-left">
                        <img src={LogoAlta} width="133.52px"/>
                    </div>
                </div>
                <div class="col-12 col-md-5 align-items-center">
                    <div class="float-right">
                        <div class="header-menu">
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
    <div class="content asik">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="profpic">
                        <div class="">
                                <img src={matthew} alt="profpic"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="bio">
                            <h3>Hi, my name is</h3>
                            <h1>Anne Sullivan</h1>
                            <h2>I build things for the web</h2>
                            <button type="button" class="btn btn-warning">Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
      </div>
    );
  }
  
  export default Home;
  