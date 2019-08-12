// eslint-disable-next-line
import React from 'react';
import ic_fb from '../img/ic_fb.png';
import ic_twitter from '../img/ic-twitter.png';
import ic_instagram from '../img/ic-instagram.png';
import ic_linkedin from '../img/ic-linkedin.png';
import LogoAlta2 from '../img/logo-ALTA-v2.png';
import '../css/fromless.css';

function FooterAlta() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-4 text-left">
            <div className="footer-logo">
              <img src={LogoAlta2} width="109.54px" />
            </div>
          </div>
          <div className="col-md-3 col-4 borderright1px">
            {/* style="border-right: 1px solid #FFFFFF;" */}
            <h6>Social Media</h6>
            <a href="#">
              <img src={ic_fb} />
            </a>
            <a href="#">
              <img src={ic_twitter} />
            </a>
            <a href="#">
              <img src={ic_instagram} />
            </a>
            <a href="#">
              <img src={ic_linkedin} />
            </a>
          </div>
          <div className="col-md-3 col-4">
            <div className="footer-copyright text-right">
              <h6>Copyright © 2019 Alterra</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterAlta;
//
