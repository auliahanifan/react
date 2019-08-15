import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
import Header from '../header/Header';
import TopList from '../top_list/TopList';
import TopArticle from '../top_article/TopArticle';
import axios from 'axios';
import { connect } from 'unistore/react';
import { actions } from '../store';

const apiKey = '993a620765884d3fb2d99590b3b2b683';
const baseUrl = 'https://newsapi.org/v2/';
const newsUrl = `${baseUrl}everything?q=indonesia&apiKey=${apiKey}`;

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleSignOut = () => {
  //   this.props.setLogin(false);
  //   console.log('ini login', this.props.is_login);
  //   this.props.history.push('/');
  // };

  eventChange = event => {
    event.preventDefault();
    axios
      .get(
        'https://newsapi.org/v2/everything?q=' +
          event.target.value +
          `&apiKey=${apiKey}`,
      )
      .then(response => {
        this.props.setValue(response.data.articles);
        console.log(response);
        // console.log(this.state.data);
      })
      .catch(error => {
        console.log('terdapat eror ini :', error);
      });
  };

  componentDidMount = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=' +
          this.props.endpoint +
          `&from=2019-08-14&sortBy=publishedAt&apiKey=${apiKey}`,
      )
      .then(response => {
        this.props.setValue(response.data.articles);
        console.log(response);
        // console.log(this.state.data);
      })
      .catch(error => {
        console.log('terdapat eror ini :', error);
      });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.endpoint !== this.props.endpoint) {
      axios
        .get(
          'https://newsapi.org/v2/everything?q=' +
            this.props.endpoint +
            `&from=2019-08-14&sortBy=publishedAt&apiKey=${apiKey}`,
        )
        .then(response => {
          this.props.setValue(response.data.articles);
          console.log(response);
          // console.log(this.state.data);
        })
        .catch(error => {
          console.log('terdapat eror ini :', error);
        });
    }
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
              <TopList data={this.props.values} />
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

// export default News;

export default connect(
  'email, full_name, is_login, values, keyword',
  actions,
)(News);
