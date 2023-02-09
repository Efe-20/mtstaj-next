import Link from "next/link";
import React from "react";

const PostingsInner = () => {
  return (
    <div>
      <>
        <div className="edu-breadcrumb-area breadcrumb-style-3">
          <div className="container">
            <div className="breadcrumb-inner">
              <div className="page-title">
                <h1
                  data-aos-duration="2000"
                  data-aos="fade-right"
                  className="title"
                >
                  Global Education Fall Meeting for Everyone
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
        <section className="edu-section-gap course-details-area">
          <div className="container">
            <div className="row row--30">
              <div className="col-lg-8">
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="course-details-content"
                >
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation"></li>
                    <li className="nav-item" role="presentation"></li>
                    <li className="nav-item" role="presentation"></li>
                    <li className="nav-item" role="presentation"></li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="overview"
                      role="tabpanel"
                      aria-labelledby="overview-tab"
                    >
                      <div className="course-tab-content">
                        <div className="course-overview">
                          <h3 className="heading-title">Course Description</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor inc idid unt ut labore
                            et dolore magna aliqua enim ad minim veniam, quis
                            nostrud exerec tation ullamco laboris nis aliquip
                            commodo consequat duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur enim ipsam.
                          </p>
                          <p className="mb--60">
                            Excepteur sint occaecat cupidatat non proident sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam.
                          </p>
                          <h5 className="title">What You’ll Learn?</h5>
                          <ul className="mb--60">
                            <li>
                              Learn to use Python professionally, learning both
                              Python 2 &amp; Python 3!
                            </li>
                            <li>
                              Build 6 beautiful real-world projects for your
                              portfolio (not boring toy apps)
                            </li>
                            <li>
                              Understand the Theory behind Vue.js and use it in
                              Real Projects
                            </li>
                            <li>
                              Create responsive, accessible, and beautiful
                              layouts
                            </li>
                          </ul>
                          <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor
                            inc idid unt ut labore et dolore magna aliqua enim
                            ad minim veniam quis nostrud exerec tation ullamco
                            laboris nis aliquip commodo consequat duis aute
                            irure dolor.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="carriculam"
                      role="tabpanel"
                      aria-labelledby="carriculam-tab"
                    >
                      <div className="course-tab-content">
                        <div className="course-curriculam">
                          <h3 className="heading-title">Course Curriculum</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor inc idid unt ut labore
                            et dolore magna aliqua enim ad minim veniam, quis
                            nostrud exerec tation ullamco laboris nis aliquip
                            commodo consequat.
                          </p>
                          <div className="course-lesson">
                            <p>
                              Advanced story telling techniques for writers:
                              Personas, Characters &amp; Plots
                            </p>
                            <ul>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Introduction
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Course Overview
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Local Development
                                  Environment Tools
                                </div>
                                <div className="badge-list">
                                  <span className="badge badge-primary">
                                    0 Question
                                  </span>
                                  <span className="badge badge-secondary">
                                    10 Minutes
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Course Exercise /
                                  Reference Files
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Code Editor
                                  Installation (Optional if you have one)
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Embedding PHP in
                                  HTML
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="course-lesson">
                            <h5 className="title">Week 5-8</h5>
                            <p>
                              Advanced story telling techniques for writers:
                              Personas, Characters &amp; Plots
                            </p>
                            <ul>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Defining Functions
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" />
                                  Function Parameters
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Return Values From
                                  Functions
                                </div>
                                <div className="badge-list">
                                  <span className="badge badge-primary">
                                    0 Question
                                  </span>
                                  <span className="badge badge-secondary">
                                    10 Minutes
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Global Variable and
                                  Scope
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" />
                                  Newer Way of creating a Constant
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                              <li>
                                <div className="text">
                                  <i className="icon-65" /> Constants
                                </div>
                                <div className="icon">
                                  <i className="icon-68" />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="instructor"
                      role="tabpanel"
                      aria-labelledby="instructor-tab"
                    >
                      <div className="course-tab-content">
                        <div className="course-instructor">
                          <div className="thumbnail">
                            <img
                              src="/assets/images/course/author-01.png"
                              alt="Author Images"
                            />
                          </div>
                          <div className="author-content">
                            <h6 className="title">Edward Norton</h6>
                            <span className="subtitle">Founder &amp; CEO</span>
                            <p>
                              Consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt labore et dolore magna aliqua
                              enim minim veniam quis nostrud exercitation ulla
                              mco laboris nisi ut aliquip ex ea commodo
                              consequat. duis aute irure dolor in reprehenderit
                              in voluptate.
                            </p>
                            <ul className="social-share">
                              <li>
                                <a href="#">
                                  <i className="icon-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-linkedin2" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <div className="course-tab-content">
                        <div className="course-review">
                          <div className="comment-area">
                            <h3 className="heading-title">Reviews</h3>
                            <div className="comment-list-wrapper">
                              <div className="comment">
                                <div className="thumbnail">
                                  <img
                                    src="/assets/images/blog/comment-01.jpg"
                                    alt="Comment Images"
                                  />
                                </div>
                                <div className="comment-content">
                                  <h5 className="title">Haley Bennet</h5>
                                  <span className="date">Oct 10, 2021</span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </p>
                                </div>
                              </div>
                              <div className="comment">
                                <div className="thumbnail">
                                  <img
                                    src="/assets/images/blog/comment-02.jpg"
                                    alt="Comment Images"
                                  />
                                </div>
                                <div className="comment-content">
                                  <h5 className="title">Simon Baker</h5>
                                  <span className="date">Oct 10, 2021</span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </p>
                                </div>
                              </div>
                              <div className="comment">
                                <div className="thumbnail">
                                  <img
                                    src="/assets/images/blog/comment-03.jpg"
                                    alt="Comment Images"
                                  />
                                </div>
                                <div className="comment-content">
                                  <h6 className="title">Richard Gere</h6>
                                  <span className="date">Oct 10, 2021</span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comment-form-area">
                            <h3 className="heading-title">Write a Review</h3>
                            <form className="comment-form">
                              <div className="row g-5">
                                <div className="form-group col-lg-6">
                                  <input
                                    type="text"
                                    name="comm-title"
                                    id="comm-title"
                                    placeholder="Review Title"
                                  />
                                </div>
                                <div className="form-group col-lg-6">
                                  <input
                                    type="text"
                                    name="comm-name"
                                    id="comm-name"
                                    placeholder="Reviewer name"
                                  />
                                </div>
                                <div className="form-group col-12">
                                  <input
                                    type="email"
                                    name="comm-email"
                                    id="comm-email"
                                    placeholder="Reviewer email"
                                  />
                                </div>
                                <div className="form-group col-12">
                                  <textarea
                                    name="comm-message"
                                    id="comm-message"
                                    cols={30}
                                    rows={5}
                                    placeholder="Review summary"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-sidebar-3 sidebar-top-position">
                  <div
                    data-aos-duration="2000"
                    data-aos="fade-left"
                    className="edu-course-widget widget-course-summery"
                  >
                    <div className="inner">
                      <div className="thumbnail">
                        <img
                          src="/assets/images/course/course-46.jpg"
                          alt="Courses"
                        />
                        <a
                          href="https://www.youtube.com/watch?v=PICj5tr9hcc"
                          className="play-btn video-popup-activation"
                          target={"_blank"}
                        >
                          <i className="icon-18" />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="widget-title">Course Includes:</h4>
                        <ul className="course-item">
                          <li>
                            <span className="label">
                              <i className="icon-62" />
                              Instrutor:
                            </span>
                            <span className="value">Edward Norton</span>
                          </li>
                          <li>
                            <span className="label">
                              <i className="icon-61" />
                              Duration:
                            </span>
                            <span className="value">3 weeks</span>
                          </li>
                          <li>
                            <span className="label">
                              <img
                                className="svgInject"
                                src="/assets/images/svg-icons/books.svg"
                                alt="book icon"
                              />
                              Lessons:
                            </span>
                            <span className="value">8</span>
                          </li>
                          <li>
                            <span className="label">
                              <i className="icon-63" />
                              Enrolled:
                            </span>
                            <span className="value">65 students</span>
                          </li>
                          <li>
                            <span className="label">
                              <i className="icon-59" />
                              Language:
                            </span>
                            <span className="value">English</span>
                          </li>
                          <li>
                            <span className="label">
                              <i className="icon-64" />
                              Certificate:
                            </span>
                            <span className="value">Yes</span>
                          </li>
                        </ul>
                        <div className="share-area">
                          <h4 className="title">Share On:</h4>
                          <ul className="social-share">
                            <li>
                              <a
                                href="https://www.facebook.com/MTStajProgramlari"
                                target={"_blank"}
                              >
                                <i className="icon-facebook" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/MTStaj"
                                target={"_blank"}
                              >
                                <i className="icon-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/company/mtstajprogramlari/?viewAsMember=true"
                                target={"_blank"}
                              >
                                <i className="icon-linkedin2" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/channel/UCTd_1ukC4dY-2NyHdI5tFEw"
                                target={"_blank"}
                              >
                                <i className="icon-youtube" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="gap-bottom-equal">
          <div data-aos="fade-up" className="container">
            <div className="section-title section-left">
              <h3 className="title">More Courses for You</h3>
            </div>
            <div className="row g-5">
              <div className="col-12 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="edu-course course-style-5 inline"
                  data-tipped-options="inline: 'inline-tooltip-1'"
                >
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href="/postings/postingsInner">
                        <img
                          src="/assets/images/course/course-15.jpg"
                          alt="Course Meta"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <a href="/postings/postingsInner">
                          Healthy Sushi Roll - Japanese Popular Cooking Class
                        </a>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod ex
                        tempor.
                      </p>
                      <ul className="course-meta"></ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="edu-course course-style-5 inline"
                  data-tipped-options="inline: 'inline-tooltip-2'"
                >
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="/postings/postingsInner">
                        <img
                          src="/assets/images/course/course-16.jpg"
                          alt="Course Meta"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <a href="/postings/postingsInner">
                          Nutrition Kitchen - Basics of Cooking for Busy People
                        </a>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod ex
                        tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="edu-course course-style-5 inline"
                  data-tipped-options="inline: 'inline-tooltip-3'"
                >
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="/postings/postingsInner">
                        <img
                          src="/assets/images/course/course-17.jpg"
                          alt="Course Meta"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <a href="/postings/postingsInner">
                          Vegan Thai Cooking Classes Popular Vegan Recipes
                        </a>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectur elit sed eiusmod ex
                        tempor.
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

export default PostingsInner;
