// eslint-disable-next-line
import React from 'react';
// import axios from 'axios';

const apiKey = '993a620765884d3fb2d99590b3b2b683';
const baseUrl = 'https://newsapi.org/v2/';
const newsUrl = `${baseUrl}everything?q=bitcoin&apiKey=${apiKey}`;

class TopList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listNews: this.props.data,
  //     headlines: [],
  //   };
  // }

  // componentDidMount = () => {
  //   console.log('apa');
  //   const self = this;
  //   axios.get(newsUrl).then(function(response) {
  //     self
  //       .setState({ listNews: response.data.articles })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   });
  // };

  render() {
    return (
      <div>
        <div className="card" style={{ width: '100%' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="row justify-content-between">
                <div className="col-6">
                  <a href="">BERITA TERKINI</a>
                </div>
                <div className="col-4">
                  <a href="">lihat semua</a>
                </div>
              </div>
            </li>

            {this.props.data.map((item, index) => {
              if (index < 5) {
                console.log(index);
                return (
                  <li
                    className="list-group-item"
                    key={index.toString()}
                  >
                    <div className="row ">
                      <div className="col-6">{index + 1}</div>
                    </div>
                    <div className="row ">
                      <div className="col-12">
                        <a href={item.url}>{item.title}</a>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopList;
