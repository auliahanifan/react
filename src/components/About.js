import React from 'react';
import matthew from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import '../css/fromless.css';
import img_dot from '../img/img-dot.png';
import HeaderAlta from '../header/HeaderAlta';
import FooterAlta from '../footer/FooterAlta';

function About() {
  return (
    <div>
      <HeaderAlta />
      <div className="container-fluid about-me">
        <div className="container">
          <div>ABOUT ME.</div>
        </div>
      </div>
      <div className="container aku">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="hello-me">
                <p>
                  Hello! I’m Anne Sullivan, a full-stack engineer
                  based in Malang, IDN who enjoys building things that
                  live on the internet. I develop exceptional websites
                  and web apps that provide intuitive, pixel-perfect
                  user interfaces with efficient and modern backends.
                </p>
                <p>
                  Shortly after graduating from Alterra Academy, I
                  joined the engineering team at Alterra where I work
                  on a wide variety of interesting and meaningful
                  projects on a daily basis.
                </p>
                <p>
                  Here’s few technologies I’ve been working with
                  recently :
                </p>
              </div>
            </div>
            <div className="row">
              <div className="table-skill">
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
          <div className="col-md-4">
            <div className="text-center">
              <div className="gambar">
                <img
                  className="gambar"
                  src={matthew}
                  width="249"
                  height="248"
                />
              </div>
              <div className="dot-dot">
                <img src={img_dot} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAlta />
    </div>
  );
}

export default About;
