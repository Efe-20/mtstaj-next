import React from "react";
import Link from "next/link";
import { useState } from "react";

const Postings = () => {
  const [mockData, setMockData] = useState([]);
  const [limit, setLimit] = useState(9);

  fetch("https://country-state-city.alikaan-net.workers.dev/test")
    .then((response) => response.json())
    .then((res) =>
      res.length > limit
        ? () => {
            res.length = limit;
            return res;
          }
        : res
    )

    .then((data) => setMockData(data))
    .catch((error) => console.log(error));

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
              {mockData.map((item) => {
                return (
                  <div
                    data-aos="fade-up"
                    className="edu-course course-style-4 course-style-9"
                  >
                    <div className="inner">
                      <div className="thumbnail">
                        <Link href="/postings/postingsInner">
                          <img
                            src="/assets/images/course/course-12.jpg"
                            alt="Course Meta"
                          />
                        </Link>
                      </div>
                      <div data-aos="fade-up" className="content">
                        <h6 className="title">
                          <Link href="/postings/postingsInner">
                            {item.name}
                          </Link>
                        </h6>
                        <a href="/postings/postingsInner">
                          <p>{item.iso2}</p>
                        </a>
                        <div className="read-more-btn">
                          <Link href="/postings/postingsInner"></Link>
                          <Link
                            className="edu-btn btn-border btn-medium"
                            href="/postings/postingsInner"
                            style={{
                              backgroundColor: "#234b59",
                              color: "#fff",
                            }}
                          >
                            Learn More
                            <i className="icon-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postings;
