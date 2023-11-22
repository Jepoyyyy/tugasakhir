import "./about.css"
import React from 'react';
import gambar from "./jepa.jpg";
import { Link } from 'react-router-dom';

const about = () => {
  return (
    <div className="card-main">
      <div className="cardForProfile">
        <img src={gambar} alt="" className="photo" id="gambar" />
        <div className="description">
          <div className='profile-detail'>
            <p id="name">Manuel Zefanya Pardede</p>
            <p id="NIM">21120121140105</p>
            <p id="Kelompok">Kelompok 09</p>
            <p id="desc">Seorang Mahasiswa Teknik Komputer tahun ke-3 yang memiliki ketertarikan di bidang pengembangan web. 
              Membuat Progressive Website untuk menyelesaikan Tugas Akhir Praktikum Pemrograman Perangkat Bergerak</p>
          </div>
            
            
        </div>
      </div>
      <div className="link">
        <p>Profil :</p>
        <div className="link-button">
          <Link to="https://github.com/Jepoyyyy" target="_blank" rel="noopener noreferrer">
            <button className="github"><i class="fa-brands fa-github"></i> GitHub</button>
          </Link>
          <Link to="https://www.linkedin.com/in/manuelzefanya/" target="_blank" rel="noopener noreferrer">
            <button className="linkedin"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default about;
