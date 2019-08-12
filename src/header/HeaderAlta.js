// eslint-disable-next-line
import React from 'react';
import LogoAlta from '../img/logo-ALTA.png';
import '../css/fromless.css';

function HeaderAlta() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6 text-left">
            <div className="header-logo">
              <img src={LogoAlta} width="133.52px" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 align-items-center">
            <div className="float-right">
              <div className="header-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="home.html">HOME</a>
                    </li>
                    <li>
                      <a id="now" href="#">
                        ABOUT
                      </a>
                    </li>
                    <li>
                      <a href="#">EXPERIENCE</a>
                    </li>
                    <li>
                      <a href="contact.html">CONTACT</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderAlta;
//
