import React from "react";
import Link from "next/link";
import YoungTalentsInner from "./youngTalentsInner";

const YoungTalents = () => {
  return (
    <div>
      <>
        <div className="edu-team-area team-area-2 edu-section-gap">
          <div className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19" />
          <div className="container">
            <div className="section-title section-center">
              <h2 className="title">Genç Yetenek Programları</h2>
              <span className="shape-line">
                <i className="icon-19" />
              </span>
            </div>
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="edu-team-grid team-style-2"
                >
                  <div className="inner">
                    <div className="thumbnail-wrap">
                      <div className="thumbnail">
                        <Link href="/youngTalents/youngTalentsInner">
                          <img
                            src="assets/images/team/team-05.webp"
                            alt="team images"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href="/youngTalents/youngTalentsInner">
                          Jane Seymour
                        </Link>
                      </h5>
                      <span className="designation">Teacher</span>
                      <p>
                        Consectetur adipisicing elit, sed do eius mod tempor
                        incididunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="edu-team-grid team-style-2"
                >
                  <div className="inner">
                    <div className="thumbnail-wrap">
                      <div className="thumbnail">
                        <Link href="/youngTalents/youngTalentsInner">
                          <img
                            src="assets/images/team/team-06.webp"
                            alt="team images"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href="/youngTalents/youngTalentsInner">
                          Edward Norton
                        </Link>
                      </h5>
                      <span className="designation">Teacher</span>
                      <p>
                        Consectetur adipisicing elit, sed do eius mod tempor
                        incididunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="edu-team-grid team-style-2"
                >
                  <div className="inner">
                    <div className="thumbnail-wrap">
                      <div className="thumbnail">
                        <Link href="/youngTalents/youngTalentsInner">
                          <img
                            src="assets/images/team/team-07.webp"
                            alt="team images"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href="/youngTalents/youngTalentsInner">
                          Penelope Cruz
                        </Link>
                      </h5>
                      <span className="designation">Teacher</span>
                      <p>
                        Consectetur adipisicing elit, sed do eius mod tempor
                        incididunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="edu-team-grid team-style-2"
                >
                  <div className="inner">
                    <div className="thumbnail-wrap">
                      <div className="thumbnail">
                        <Link href="/youngTalents/youngTalentsInner">
                          <img
                            src="assets/images/team/team-16.webp"
                            alt="team images"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href="/youngTalents/youngTalentsInner">
                          Michael Douglas
                        </Link>
                      </h5>
                      <span className="designation">Teacher</span>
                      <p>
                        Consectetur adipisicing elit, sed do eius mod tempor
                        incididunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="edu-team-grid team-style-2"
                >
                  <div className="inner">
                    <div className="thumbnail-wrap">
                      <div className="thumbnail">
                        <Link href="/youngTalents/youngTalentsInner">
                          <img
                            src="assets/images/team/team-17.webp"
                            alt="team images"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href="/youngTalents/youngTalentsInner">
                          Hilary Swank
                        </Link>
                      </h5>
                      <span className="designation">Teacher</span>
                      <p>
                        Consectetur adipisicing elit, sed do eius mod tempor
                        incididunt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="edu-team-grid team-style-2"
                >
                  <div className="inner">
                    <div className="thumbnail-wrap">
                      <div className="thumbnail">
                        <Link href="/youngTalents/youngTalentsInner">
                          <img
                            src="assets/images/team/team-18.webp"
                            alt="team images"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href="/youngTalents/youngTalentsInner">
                          Steve Martin
                        </Link>
                      </h5>
                      <span className="designation">Teacher</span>
                      <p>
                        Consectetur adipisicing elit, sed do eius mod tempor
                        incididunt
                      </p>
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

export default YoungTalents;
