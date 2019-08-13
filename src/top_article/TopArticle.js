// eslint-disable-next-line
import React from 'react';
// import gambar from './gambar.jpg';
import axios from 'axios';

const apiKey = '993a620765884d3fb2d99590b3b2b683';
const baseUrl = 'https://newsapi.org/v2/';
const topHeadlineUrl = `${baseUrl}top-headlines?country=us&apiKey=${apiKey}`;

class TopArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
    };
  }

  componentDidMount = () => {
    const self = this;
    axios.get(topHeadlineUrl).then(function(response) {
      self
        .setState({ headlines: response.data.articles })
        .catch(function(error) {
          console.log(error);
        });
    });
  };

  render() {
    return (
      <div>
        {this.state.headlines.map((item, index) => {
          if (index < 1) {
            return (
              <div className="card" style={{ width: '100%' }}>
                <img
                  src={item.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content}</p>
                  <a href={item.url} className="btn btn-primary">
                    Selengkapnya
                  </a>
                </div>
              </div>
            );
          }
        })}
        {/* <table>
        <thead>
          <tr>
            <td>
              <div classNameName="row">
                <div classNameName="col">
                  <h6>Berita</h6>
                </div>
                <div classNameName="col">lihat </div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table> */}
      </div>
    );
  }
}

export default TopArticle;
