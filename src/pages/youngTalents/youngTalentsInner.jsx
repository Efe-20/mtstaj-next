import Link from "next/link";
import React from "react";

const YoungTalentsInner = () => {
  return (
    <div>
      <>
        <div className="edu-breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-inner">
              <div className="page-title">
                <h1
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="title"
                >
                  Instructor Details
                </h1>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <li className="shape-1">
              <span />
            </li>
            <li className="shape-2 scene">
              <img
                data-depth={2}
                src="/assets/images/about/shape-13.png"
                alt="shape"
              />
            </li>
            <li className="shape-3 scene">
              <img
                data-depth={-2}
                src="/assets/images/about/shape-15.png"
                alt="shape"
              />
            </li>
            <li className="shape-4">
              <span />
            </li>
            <li className="shape-5 scene">
              <img
                data-depth={2}
                src="/assets/images/about/shape-07.png"
                alt="shape"
              />
            </li>
          </ul>
        </div>
        <div className="edu-team-details-area section-gap-equal">
          <div className="container">
            <div className="row row--40">
              <div className="col-lg-4">
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="team-details-thumb"
                >
                  <div className="thumbnail">
                    <img src="/assets/images/team/team-18.webp" alt="team" />
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="team-details-content"
                >
                  <div className="main-info">
                    <h3 className="title">Edward Narton</h3>
                    <span className="designation">Developer and Teacher</span>
                  </div>
                  <div className="bio-describe">
                    <h4 className="title">About Me</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit sed do eius
                      mod tempor incidid labore dolore magna aliqua. enim ad
                      minim eniam quis nostrud exercitation ullamco laboris nisi
                      aliquip ex commodo consequat. duis aute irure dolor in
                      repreed ut perspiciatis unde omnis iste natus error sit
                      voluptat em acus antium.
                    </p>
                    <p>
                      doloremque laudantium totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi arch itecto beatae
                      vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="edu-course-area course-area-1 edu-section-gap bg-lighten01">
          <div className="container">
            <div className="section-title section-center">
              <h2 data-aos="fade-up" data-aos-duration="2000" className="title">
                My Popular Courses
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="row g-5"
            >
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="edu-course course-style-1 hover-button-bg-white">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/courses">
                        <img
                          src="/assets/images/course/course-07.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="time-top">
                        <span className="duration">
                          <i className="icon-61" />7 Weeks
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href="#">
                          The Complete Camtasia Course for Content Creators
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-hover-content-wrapper">
                    <button className="wishlist-btn">
                      <i className="icon-22" />
                    </button>
                  </div>
                  <div className="course-hover-content-wrapper">
                    <button className="wishlist-btn">
                      <i className="icon-22" />
                    </button>
                  </div>
                  <div className="course-hover-content">
                    <div className="content">
                      <h6 className="title">
                        <Link href="/courses">
                          The Complete Camtasia Course for Content Creators
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eiusmod tempor.
                      </p>
                      <Link
                        href="/courses"
                        className="edu-btn btn-secondary btn-small"
                      >
                        Enrolled <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="edu-course course-style-1 hover-button-bg-white">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/courses">
                        <img
                          src="/assets/images/course/course-04.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="time-top">
                        <span className="duration">
                          <i className="icon-61" />9 Weeks
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href="#">
                          Starting SEO as your Home Based Business
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-hover-content-wrapper"></div>
                  <div className="course-hover-content">
                    <div className="content">
                      <h6 className="title">
                        <Link href="/courses">
                          Starting SEO as your Home Based Business
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eiusmod tempor.
                      </p>
                      <Link
                        href="/courses"
                        className="edu-btn btn-secondary btn-small"
                      >
                        Enrolled <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="edu-course course-style-1 hover-button-bg-white">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/courses">
                        <img
                          src="/assets/images/course/course-05.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="time-top">
                        <span className="duration">
                          <i className="icon-61" />4 Weeks
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href="#">
                          Building A Better World One Student At A Time
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-hover-content-wrapper">
                    <button className="wishlist-btn">
                      <i className="icon-22" />
                    </button>
                  </div>
                  <div className="course-hover-content">
                    <div className="content">
                      <h6 className="title">
                        <Link href="/courses">
                          Building A Better World One Student At A Time
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eiusmod tempor.
                      </p>
                      <Link
                        href="/courses"
                        className="edu-btn btn-secondary btn-small"
                      >
                        Enrolled <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="edu-course course-style-1 hover-button-bg-white">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/courses">
                        <img
                          src="/assets/images/course/course-06.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="time-top">
                        <span className="duration">
                          <i className="icon-61" />4 Weeks
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href="#">
                          Java Programming Masterclass for Software Developers
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-hover-content-wrapper">
                    <button className="wishlist-btn">
                      <i className="icon-22" />
                    </button>
                  </div>
                  <div className="course-hover-content">
                    <div className="content">
                      <h6 className="title">
                        <Link href="/courses">
                          Java Programming Masterclass for Software Developers
                        </Link>
                      </h6>
                      <div className="course-rating"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eiusmod tempor.
                      </p>
                      <Link
                        href="/courses"
                        className="edu-btn btn-secondary btn-small"
                      >
                        Enrolled <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="edu-course course-style-1 hover-button-bg-white">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/courses">
                        <img
                          src="/assets/images/course/course-24.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="time-top">
                        <span className="duration">
                          <i className="icon-61" />8 Weeks
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href="#">
                          Angular &amp; NodeJS - The MEAN Stack Guide [2021
                          Edition]
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-hover-content-wrapper"></div>
                  <div className="course-hover-content">
                    <div className="content">
                      <h6 className="title">
                        <Link href="/courses">
                          Angular &amp; NodeJS - The MEAN Stack Guide [2021
                          Edition]
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eiusmod tempor.
                      </p>
                      <ul className="course-meta"></ul>
                      <Link
                        href="/courses"
                        className="edu-btn btn-secondary btn-small"
                      >
                        Enrolled <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="edu-course course-style-1 hover-button-bg-white">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/courses">
                        <img
                          src="/assets/images/course/course-25.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="time-top">
                        <span className="duration">
                          <i className="icon-61" />3 Weeks
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href="#">
                          The Complete React Developer Course (Hooks and Redux)
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-hover-content-wrapper">
                    <button className="wishlist-btn">
                      <i className="icon-22" />
                    </button>
                  </div>
                  <div className="course-hover-content">
                    <div className="content">
                      <Link
                        href="/courses"
                        style={{ color: "#fff", fontWeight: 600 }}
                      >
                        The Complete React Developer Course (Hooks and Redux)
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eiusmod tempor.
                      </p>
                      <ul className="course-meta">
                        <Link
                          href="/courses"
                          className="edu-btn btn-secondary btn-small"
                        >
                          Enrolled
                          <i className="icon-4" />
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="edu-course course-style-1 hover-button-bg-white">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/courses">
                        <img
                          src="/assets/images/course/course-26.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="time-top">
                        <span className="duration">
                          <i className="icon-61" />3 Weeks
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href="#">
                          Build an app with ASPNET Core &amp; Angular from
                          Scratch Begainer
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-hover-content-wrapper"></div>
                  <div className="course-hover-content">
                    <div className="content">
                      <h6 className="title">
                        <Link href="/courses">
                          Build an app with ASPNET Core &amp; Angular from
                          Scratch Begainer
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eiusmod tempor.
                      </p>
                      <Link
                        href="/courses"
                        className="edu-btn btn-secondary btn-small"
                      >
                        Enrolled <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="edu-course course-style-1 hover-button-bg-white">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/courses">
                        <img
                          src="/assets/images/course/course-27.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="time-top">
                        <span className="duration">
                          <i className="icon-61" />3 Weeks
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link href="#">
                          Become a WordPress Developer: Unlocking Power with
                          Code
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="course-hover-content-wrapper">
                    <button className="wishlist-btn">
                      <i className="icon-22" />
                    </button>
                  </div>
                  <div className="course-hover-content">
                    <div className="content">
                      <h6 className="title">
                        <Link href="/courses">
                          Become a WordPress Developer: Unlocking Power with
                          Code
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed
                        eiusmod tempor.
                      </p>
                      <Link
                        href="/courses"
                        className="edu-btn btn-secondary btn-small"
                      >
                        Enrolled <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default YoungTalentsInner;
