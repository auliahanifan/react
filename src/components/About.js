import React from 'react';
import LogoAlta from '../img/logo-ALTA.png';
import matthew from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import '../css/fromless.css';
import img_dot from '../img/img-dot.png'
import LogoAlta2 from '../img/logo-ALTA-v2.png'
import ic_fb from '../img/ic_fb.png'
import ic_twitter from '../img/ic-twitter.png'
import ic_instagram from '../img/ic-instagram.png'
import ic_linkedin from '../img/ic-linkedin.png'


function About() {
  return (
    <div >
      <header>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 col-sm-6 text-left">
                        <div class="header-logo">
                            <img src={LogoAlta} width="133.52px"/>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 align-items-center">
                        <div class="float-right">
                            <div class="header-menu">
                                    <nav>
                                            <ul>
                                            <li><a href="home.html">HOME</a></li>
                                            <li><a id="now" href="#">ABOUT</a></li>
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
    <div class="container-fluid about-me">
            <div class="container">
                    <div>
                        ABOUT ME.
                    </div>
            </div>
    </div>
    <div class="container aku">
        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div class="hello-me">
                        <p>Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
                        <p>Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                        <p>Here’s few technologies I’ve been working with recently :</p>
                    </div>
                </div>
                <div class="row">
                    <div class="table-skill">
                        <table>
                            <tbody>
                                <tr>
                                    <td>HTML & CSS</td>
                                    <td>Serverless</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>Programming</td>
                                    <td>Restful API</td>
                                    <td>Test-Driven Dev</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Javascript</td>
                                    <td>Software Testing</td>
                                </tr>
                                <tr>
                                    <td>Git & Github</td>
                                    <td>Single Page App</td>
                                    <td>UX/UI Designer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <div class="gambar">
                            <img class="gambar" src={matthew} width="249" height="248" />
                    </div>
                    <div class="dot-dot">
                            <img src={img_dot}/>
                    </div>
                </div>
            </div>
    </div>
    </div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-4 text-left">
                    <div class="footer-logo">
                        <img src={LogoAlta2} width="109.54px"/>
                    </div>
                </div>
                <div class="col-md-3 col-4 borderright1px" >
                    {/* style="border-right: 1px solid #FFFFFF;" */}
                    <h6>Social Media</h6>
                        <a href="#"><img src={ic_fb}/></a>
                        <a href="#"><img src={ic_twitter}/></a>
                        <a href="#"><img src={ic_instagram}/></a>
                        <a href="#"><img src={ic_linkedin}/></a>
                </div>
                <div class="col-md-3 col-4">
                    <div class="footer-copyright text-right">
                        <h6>Copyright © 2019 Alterra</h6>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default About;
