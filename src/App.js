import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
import Header from './header/Header';
import TopList from './top_list/TopList';
import TopArticle from './top_article/TopArticle';

function App() {
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

export default App;
