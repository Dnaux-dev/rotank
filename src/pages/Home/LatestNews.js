import React from "react";
import "./Home.css";

function LatestNews() {
  return (
    <div>
      <section className="latest-news">
        <div className="container-1">
          <h2>Latest News</h2>
          <div className="news-grid">
            <div className="news-card">
              <img src="news-image-1.jpg" alt="News 1" />
              <h3>VT The Netherlands acquires new tanker</h3>
              <p>
                VT The Netherlands has acquired a new tanker, the MTS Velden.
                The vessel will be used for inland shipping operations in the
                Netherlands and Germany.
              </p>
            </div>
            <div className="news-card">
              <img src="news-image-2.jpg" alt="News 2" />
              <h3>VT The Netherlands opens new office in Rotterdam</h3>
              <p>
                VT The Netherlands has opened a new office in Rotterdam to
                support its growing operations in the region. The office will
                serve as the company's main hub for its European operations.
              </p>
            </div>
            <div className="news-card">
              <img src="news-image-3.jpg" alt="News 3" />
              <h3>VT The Netherlands launches new sustainability initiative</h3>
              <p>
                VT The Netherlands has launched a new sustainability initiative
                to reduce its carbon footprint and promote environmental
                protection. The company aims to achieve zero emissions by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestNews;
