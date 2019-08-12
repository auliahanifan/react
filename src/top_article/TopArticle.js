// eslint-disable-next-line
import React from 'react';
import gambar from './gambar.jpg';
function TopArticle() {
  return (
    <div>
      <div class="card" style={{ width: '100%' }}>
        <img src={gambar} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">21 Menit yang Lumpuhkan Ibu Kota</h5>
          <p class="card-text">
            Penghabisan akhir pekan Minggu (4/8) lalu berubah menjadi
            mimpi buruk bagi warga di tiga provinsi--DKI Jakarta, Jawa
            barat dan Banten. Listrik padam berjam-jam dalam skala
            luas. Aliran listrik yang terputus menyebabkan beberapa
            insiden fatal bahkan hingga merenggut nyawa.
          </p>
          <a href="#" class="btn btn-primary">
            Selengkapnya
          </a>
        </div>
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

export default TopArticle;
