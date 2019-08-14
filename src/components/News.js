import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
import Header from '../header/Header';
import TopList from '../top_list/TopList';
import TopArticle from '../top_article/TopArticle';
import axios from 'axios';

const apiKey = '993a620765884d3fb2d99590b3b2b683';
const baseUrl = 'https://newsapi.org/v2/';
const newsUrl = `${baseUrl}everything?q=indonesia&apiKey=${apiKey}`;

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      keyword: 'tech',
      isiLogin: false,
    };
  }

  eventChange = event => {
    const self = this;
    event.preventDefault();
    this.setState({ keyword: event.target.value });
    var urlBaru = `${baseUrl}everything?q=${
      this.state.keyword
    }&apiKey=${apiKey}`;

    axios.get(urlBaru).then(function(response) {
      self
        .setState({ listNews: response.data.articles })
        .catch(function(error) {
          console.log(error);
        });
    });
    console.log(event.target.value);
    console.log(urlBaru);
    // this.state.listNews.map(() => {
    //   console.log('a');
    // });
  };

  componentDidMount = () => {
    console.log('apa');
    const self = this;
    axios.get(newsUrl).then(function(response) {
      self
        .setState({ listNews: response.data.articles })
        .catch(function(error) {
          console.log(error);
        });
    });
  };

  render() {
    // console.log('render');
    // console.log(this.state.listNews);
    // console.log(this.state.listNews.title);
    return (
      <div>
        <Header searchChange={this.eventChange} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-5">
              <TopList data={this.state.listNews} />
            </div>
            <div className="col-7">
              <TopArticle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
