// eslint-disable-next-line
import React from 'react';

function TopList() {
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
          <li className="list-group-item">
            <div className="row ">
              <div className="col-6">#1</div>
            </div>
            <div className="row ">
              <div className="col-6">
                <a href="">BERITA TERKINI</a>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row ">
              <div className="col-6">#2</div>
            </div>
            <div className="row ">
              <div className="col-6">
                <a href="">BERITA TERKINI</a>
              </div>
            </div>
          </li>{' '}
          <li className="list-group-item">
            <div className="row ">
              <div className="col-6">#3</div>
            </div>
            <div className="row ">
              <div className="col-6">
                <a href="">BERITA TERKINI</a>
              </div>
            </div>
          </li>{' '}
          <li className="list-group-item">
            <div className="row ">
              <div className="col-6">#4</div>
            </div>
            <div className="row ">
              <div className="col-6">
                <a href="">BERITA TERKINI</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* <table>
        <thead>
          <tr>
            <td>
              <div className="row">
                <div className="col">
                  <h6>Berita</h6>
                </div>
                <div className="col">lihat </div>
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

export default TopList;
