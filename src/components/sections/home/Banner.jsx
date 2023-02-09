import React from "react";


const Banner = () => {
  return (
    <div>
      <div className="hero-banner hero-style-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-right"  data-aos-delay="800" className="banner-content">
                <h1>
                  En Uygun
                  <span style={{ color: "#234b59" }}> MT&amp;STAJ</span>{" "}
                  Programları,
                  <br />
                  Eğitimleri ve Çok Daha Fazlası!
                </h1>
                <p>
                  MT&amp;Staj Programları’yla en uygun kariyer fırsatlarını bir
                  arada bulabilir; çeşitli haberler ve profesyonel yaşama dair
                  tavsiyelerle farklı bakış açılarına sahip olabilirsin!
                </p>
                <div>
                  <a
                    href="/postings"
                    className="edu-btn"
                    style={{ backgroundColor: "#234b59", borderRadius: 10 }}
                  >
                    Açık İlanlar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-thumbnail">
                <div>
                  <img data-aos="fade-left"
                    data-aos-delay="500"
                    src="assets/images/banner/girl-1.png"
                    alt="Girl Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
