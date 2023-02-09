import React from "react";

import Banner from "./Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="features-area-2"
      >
        <div className="container">
          <div className="features-grid-wrap">
            <div className="features-box features-style-2 edublink-svg-animate">
              <div className="icon">
                <img
                  className="svgInject"
                  src="assets/images/animated-svg-icons/online-class.svg"
                  alt="animated icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <span>3020</span> Online Courses
                </h5>
              </div>
            </div>
            <div className="features-box features-style-2 edublink-svg-animate">
              <div className="icon">
                <img
                  className="svgInject"
                  src="assets/images/animated-svg-icons/instructor.svg"
                  alt="animated icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <span>Top</span>Instructors
                </h5>
              </div>
            </div>
            <div className="features-box features-style-2 edublink-svg-animate">
              <div className="icon certificate">
                <img
                  className="svgInject"
                  src="assets/images/animated-svg-icons/certificate.svg"
                  alt="animated icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <span>Online</span>Certifications
                </h5>
              </div>
            </div>
            <div className="features-box features-style-2 edublink-svg-animate">
              <div className="icon">
                <img
                  className="svgInject"
                  src="assets/images/animated-svg-icons/user.svg"
                  alt="animated icon"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <span>6000</span>Members
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="why-choose-area-2 section-gap-large">
        <div data-aos="fade-up" className="container edublink-animated-shape">
          <div className="section-title section-center">
            <h2 className="title">SENİN İÇİN NELER VAR?</h2>
            <span className="shape-line">
              <i className="icon-19" />
            </span>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <a href="/postings">
                <div className="why-choose-box features-box color-primary-style">
                  <div className="icon">
                    <i className="icon-45" />
                  </div>
                  <div className="content">
                    <h4 className="title">İlanlar</h4>
                    <p>
                      Şirketlerin güncel ilanlarına göz atabilir ve ilan
                      detaylarına ulaşabilirsin. Kendin için en uygun fırsatı
                      bul ve hemen başvur!
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/youngTalents">
                <div className="why-choose-box features-box color-secondary-style">
                  <div className="icon">
                    <i className="icon-46" />
                  </div>
                  <div className="content">
                    <h4 className="title">Genç Yetenek Programları</h4>
                    <p>
                      Genç yetenek programlarıyla kariyerini ve yeteneklerini
                      bir adım öteye taşıma şansı yakala!
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/blogs">
                <div className="why-choose-box features-box color-extra08-style">
                  <div className="icon">
                    <i className="icon-47" />
                  </div>
                  <div className="content">
                    <h4 className="title">Bloglar</h4>
                    <p>
                      Genç ve dinamik yazar ekibimizin bloglarını okuyabilir,
                      podcastleri dinleyerek gelişimine katkıda bulanabilirsin.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <ul className="shape-group">
            <li className="shape-5">
              <span />
            </li>
          </ul>
        </div>
        <ul className="shape-group">
          <li className="shape-1 scene">
            <span data-depth={1} />
          </li>
          <li className="shape-2 scene"></li>
          <li className="shape-3 scene">
            <span data-depth={-1} />
          </li>
          <li className="shape-4 scene"></li>
        </ul>
      </section>
      <div data-aos="fade-up" className="container">
        <div className="section-title section-center">
          <h2 className="title">AÇIK İLANLAR</h2>
          <span className="shape-line">
            <i className="icon-19" />
          </span>
        </div>
        <div className="row g-5">
          <div className="col-md-6 col-xl-3">
            <div className="edu-course shadow course-style-1 hover-button-bg-white">
              <div className="inner">
                <div className="thumbnail">
                  <a href="/postings/postingsInner">
                    <img
                      src="assets/images/course/course-07.jpg"
                      alt="Course Meta"
                    />
                  </a>
                  <div className="time-top">
                    <span className="duration">
                      <i className="icon-61" />4 Weeks
                    </span>
                  </div>
                </div>
                <div className="content">
                  <h6 className="title">
                    <a href="/postings/postingsInner">
                      Starting SEO as your Home Based Business
                    </a>
                  </h6>
                </div>
              </div>
              <div className="course-hover-content-wrapper"></div>
              <div className="course-hover-content">
                <div className="content">
                  <h6 className="title">
                    <a href="/postings/postingsInner">
                      Starting SEO as your Home Based Business
                    </a>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed
                    eiusmod tempor.
                  </p>
                  <a
                    href="/postings/postingsInner"
                    className="edu-btn btn-secondary btn-small"
                  >
                    Enrolled <i className="icon-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="edu-course shadow course-style-1 hover-button-bg-white">
              <div className="inner">
                <div className="thumbnail">
                  <a href="/postings/postingsInner">
                    <img
                      src="assets/images/course/course-04.jpg"
                      alt="Course Meta"
                    />
                  </a>
                  <div className="time-top">
                    <span className="duration">
                      <i className="icon-61" />3 Weeks
                    </span>
                  </div>
                </div>
                <div className="content">
                  <h6 className="title">
                    <a href="/postings/postingsInner">
                      Java Programming Masterclass for Software Developers
                    </a>
                  </h6>
                </div>
              </div>
              <div className="course-hover-content-wrapper"></div>
              <div className="course-hover-content">
                <div className="content">
                  <h6 className="title">
                    <a href="/postings/postingsInner">
                      Java Programming Masterclass for Software Developers
                    </a>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed
                    eiusmod tempor.
                  </p>
                  <a
                    href="/postings/postingsInner"
                    className="edu-btn btn-secondary btn-small"
                  >
                    Enrolled <i className="icon-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="edu-course shadow course-style-1 hover-button-bg-white">
              <div className="inner">
                <div className="thumbnail">
                  <a href="/postings/postingsInner">
                    <img
                      src="assets/images/course/course-05.jpg"
                      alt="Course Meta"
                    />
                  </a>
                  <div className="time-top">
                    <span className="duration">
                      <i className="icon-61" />8 Weeks
                    </span>
                  </div>
                </div>
                <div className="content">
                  <h6 className="title">
                    <a href="/Postings/postingsInner">
                      Building A Better World One Student At A Time
                    </a>
                  </h6>
                </div>
              </div>
              <div className="course-hover-content-wrapper"></div>
              <div className="course-hover-content">
                <div className="content">
                  <h6 className="title">
                    <a href="/Postings/postingsInner">
                      Building A Better World One Student At A Time
                    </a>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed
                    eiusmod tempor.
                  </p>
                  <a
                    href="/Postings/postingsInner"
                    className="edu-btn btn-secondary btn-small"
                  >
                    Enrolled <i className="icon-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="edu-course shadow course-style-1 hover-button-bg-#F0F4F5">
              <div className="inner">
                <div className="thumbnail">
                  <a href="/Postings/postingsInner">
                    <img
                      src="assets/images/course/course-06.jpg"
                      alt="Course Meta"
                    />
                  </a>
                  <div className="time-top">
                    <span className="duration">
                      <i className="icon-61" />6 Weeks
                    </span>
                  </div>
                </div>
                <div className="content">
                  <h6 className="title">
                    <a href="/Postings/postingsInner">
                      Master Your Personal Brand Like a Marketing Pro
                    </a>
                  </h6>
                </div>
                <div className="course-hover-content-wrapper"></div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <a href="/Postings/postingsInner">
                        Master Your Personal Brand Like a Marketing Pro
                      </a>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectur adipiscing elit sed
                      eiusmod tempor.
                    </p>
                    <a
                      href="/Postings/postingsInner"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Enrolled
                      <i className="icon-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-view-all">
            <a href="/Postings" className="edu-btn">
              Tüm Açık İlanlar
              <i className="icon-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="edu-blog-area blog-area-1 edu-section-gap">
        <div data-aos="fade-up" className="container">
          <div className="section-title section-center">
            <h2 className="title">ÖNE ÇIKAN BLOGLAR</h2>
            <span className="shape-line">
              <i className="icon-19" />
            </span>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="edu-blog blog-style-1">
                <div className="inner">
                  <div className="thumbnail">
                    <a href="/blogs/blogsDetails">
                      <img
                        src="assets/images/blog/blog-01.jpg"
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content position-top">
                    <div className="read-more-btn">
                      <a className="btn-icon-round" href="/blogs/blogsDetails">
                        <i className="icon-4" />
                      </a>
                    </div>
                    <div className="category-wrap"></div>
                    <h5 className="title">
                      <a href="/blogs/blogsDetails">
                        Become a Better Blogger: Content Planning
                      </a>
                    </h5>
                    <ul className="blog-meta">
                      <li>
                        <i className="icon-27" />
                        Oct 10, 2021
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet cons tetur adipisicing sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="edu-blog blog-style-1">
                <div className="inner">
                  <div className="thumbnail">
                    <a href="/blogs/blogsDetails">
                      <img
                        src="assets/images/blog/blog-02.jpg"
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content position-top">
                    <div className="read-more-btn">
                      <a className="btn-icon-round" href="/blogs/blogsDetails">
                        <i className="icon-4" />
                      </a>
                    </div>
                    <div className="category-wrap"></div>
                    <h5 className="title">
                      <a href="/blogs/blogsDetails">
                        How to Keep Workouts Fresh in the Morning
                      </a>
                    </h5>
                    <ul className="blog-meta">
                      <li>
                        <i className="icon-27" />
                        Oct 10, 2021
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet cons tetur adipisicing sed do
                      eiusmod ux tempor incid idunt labore dol oremagna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="edu-blog blog-style-1">
                <div className="inner">
                  <div className="thumbnail">
                    <a href="/blogs">
                      <img
                        src="assets/images/blog/blog-03.jpg"
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content position-top">
                    <div className="read-more-btn">
                      <a className="btn-icon-round" href="/blogs">
                        <i className="icon-4" />
                      </a>
                    </div>
                    <div className="category-wrap"></div>
                    <h5 className="title">
                      <a href="/blogs/blogsDetails">
                        Four Ways to Keep Your Workout Routine Fresh
                      </a>
                    </h5>
                    <ul className="blog-meta">
                      <li>
                        <i className="icon-27" />
                        Oct 10, 2021
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet cons tetur adipisicing sed do
                      eiusmod ux tempor incid idunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-view-all">
            <a href="/blogs" className="edu-btn">
              Tüm Açık Bloglar
              <i className="icon-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
