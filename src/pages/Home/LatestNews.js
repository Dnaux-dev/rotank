import React from 'react';
import './Home.css';

function LatestNews() {
  return (
    <section className="latest-news">
      <div className="container-1">
        <h2>Latest News</h2>
        <div className="news-grid">
          <div className="news-content">
            <h3>Work for an independent tanker operator with a committed workforce</h3>
            <p>VT is an independent company with committed employees. Many have been living a maritime existence from generation to generation. Through innovation and skilled services, VT offers optimal support for transport and bunkering with highly skilled personnel and equipment to provide.</p>
            <button className="btn btn-primary">WORK FOR VT GROUP: OUR JOBS</button>
          </div>
          <div className="news-video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;

