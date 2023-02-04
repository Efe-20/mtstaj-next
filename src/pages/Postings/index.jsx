import React from "react";
import PostingsInner from "./postingsInner";
import Link from "next/link";

const Postings = () => {
  return (
    <div>
      <div className="edu-course-area course-area-1 section-gap-equal">
        <div data-aos-duration="2000" data-aos="fade-up" className="container">
          <div className="section-title section-center">
            <h2 className="title">Açık İlanlar</h2>
            <span className="shape-line">
              <i className="icon-19" />
            </span>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 order-lg-2">
              <div className="course-sidebar-2">
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="edu-course-widget widget-category"
                >
                  <div className="inner">
                    <h5 className="widget-title widget-toggle">Categories</h5>
                    <div className="content">
                      <div className="edu-form-check">
                        <input
                          type="checkbox"
                          id="cat-check1"
                          defaultChecked=""
                        />
                        <label htmlFor="cat-check1">
                          Art &amp; Design <span>(7)</span>
                        </label>
                      </div>
                      <div className="edu-form-check">
                        <input type="checkbox" id="cat-check2" />
                        <label htmlFor="cat-check2">
                          Development <span>(2)</span>
                        </label>
                      </div>
                      <div className="edu-form-check">
                        <input type="checkbox" id="cat-check3" />
                        <label htmlFor="cat-check3">
                          Business <span>(3)</span>
                        </label>
                      </div>
                      <div className="edu-form-check">
                        <input type="checkbox" id="cat-check4" />
                        <label htmlFor="cat-check4">
                          Marketing <span>(6)</span>
                        </label>
                      </div>
                      <div className="edu-form-check">
                        <input type="checkbox" id="cat-check5" />
                        <label htmlFor="cat-check5">
                          Academics <span>(2)</span>
                        </label>
                      </div>
                      <div className="edu-form-check">
                        <input type="checkbox" id="cat-check6" />
                        <label htmlFor="cat-check6">
                          Data Science <span>(9)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-pr--35 order-lg-1">
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-12.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <Link href="/Postings/postingsInner">
                        Java Programming Masterclass for Software Developers
                      </Link>
                    </h6>
                    <a href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </a>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-11.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <Link href="/Postings/postingsInner">
                        React - The Complete Guide (incl Hooks, React, Redux)
                      </Link>
                    </h6>
                    <Link href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </Link>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-14.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <Link href="/Postings/postingsInner">
                        Microsoft Excel - Excel from Beginner to Advanced
                      </Link>
                    </h6>
                    <Link href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </Link>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-13.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <Link href="/Postings/postingsInner">
                        Adobe Premiere Pro CC Master-class: Video Editing
                      </Link>
                    </h6>
                    <Link href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </Link>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-41.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <Link href="/Postings/postingsInner">
                        The Complete Camtasia Course for Content Creators
                      </Link>
                    </h6>
                    <Link href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </Link>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-42.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <a href="/Postings/postingsInner">
                        Build Responsive Real-World Websites with HTML &amp; CSS
                      </a>
                    </h6>
                    <Link href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </Link>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-43.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <Link href="/Postings/postingsInner">
                        C Programming For Beginners - Master the C Language
                      </Link>
                    </h6>
                    <Link href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </Link>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-44.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <a href="/Postings/postingsInner">
                        Vue - The Complete Guide (w/ Router, Composition API)
                      </a>
                    </h6>
                    <Link href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </Link>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="edu-course course-style-4 course-style-9"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/Postings/postingsInner">
                      <img
                        src="/assets/images/course/course-45.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div data-aos="fade-up" className="content">
                    <h6 className="title">
                      <Link href="/Postings/postingsInner">
                        Master Microservices with Spring Boot &amp; Spring Cloud
                      </Link>
                    </h6>
                    <Link href="/Postings/postingsInner">
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod
                        tempor incidid unt labore dolore magna.
                      </p>
                    </Link>
                    <div className="read-more-btn">
                      <Link href="/Postings/postingsInner"></Link>
                      <Link
                        className="edu-btn btn-border btn-medium"
                        href="/Postings/postingsInner"
                        style={{ backgroundColor: "#234b59", color: "#fff" }}
                      >
                        Learn More
                        <i className="icon-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postings;
