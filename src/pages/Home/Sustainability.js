import React from 'react';
import './Home.css';

function Sustainability() {
  return (
    <section className="sustainability">
      <div className="container">
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Sustainability" />
        </div>
        <div className="content">
          <h2>Sustainable & responsible</h2>
          <p>VT Group values safety and sustainability with great importance. Our internal safety procedures and systems are based on our "zero spills – no incidents" objectives.</p>
          <div className="icons">
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" alt="Quality" />
              <span>Quality</span>
            </div>
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2491/2491921.png" alt="Safety" />
              <span>Safety</span>
            </div>
            <div className="icon">
              <img src="https://cdn-icons-png.flaticon.com/512/4185/4185148.png" alt="Sustainability" />
              <span>Sustainability</span>
            </div>
          </div>
          <button className="btn btn-primary">OUR INNOVATION</button>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;

