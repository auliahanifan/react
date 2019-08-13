import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
import Header from './header/Header';
import TopList from './top_list/TopList';
import TopArticle from './top_article/TopArticle';
import axios from 'axios';

// function App() {
//   return (
// <div>
//   <Header />
//   <div className="container">
//     <div className="row justify-content-center">
//       <div className="col-5">
//         <TopList />
//       </div>
//       <div className="col-7">
//         <TopArticle />
//       </div>
//     </div>
//   </div>
// </div>
//   );
// }
const apiKey = '993a620765884d3fb2d99590b3b2b683';
const baseUrl = 'https://newsapi.org/v2/';
const newsUrl = `${baseUrl}everything?q=bitcoin&apiKey=${apiKey}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      username: '',
      isiLogin: false,
    };
  }

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
    console.log('render');
    console.log(this.state.listNews);
    console.log(this.state.listNews.title);
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-5">
              <TopList />
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

export default App;
