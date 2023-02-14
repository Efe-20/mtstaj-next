import React from "react";
import Link from "next/link";
import apiService from "@/common/services/api.service";

const BlogsDetails = () => {
  const getData = async () => {
    const data = await apiService.getBlogDetails();
    console.log(data);
    setData(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const [data, setData] = React.useState([]);

  return (
    <div>
      <div className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <div className="container">
          <div className="breadcrumb-inner"></div>
        </div>
      </div>
      <div className="blog-details-area section-gap-equal">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-8">
              <div className="page-title">
                <h2
                  data-aos="fade-up"
                  className="title"
                  id="blog-title"
                  style={{ marginTop: 80 }}
                >
                  Blog Details
                </h2>
              </div>
              <div className="blog-details-content">
                <div data-aos="fade-up" className="entry-content">
                  <h3 className="title">
                    How to Become Computer Working Days Software Engineer?
                  </h3>
                  <ul className="blog-meta">
                    <li>
                      <i className="icon-27" />
                      Oct 10, 2021
                    </li>
                  </ul>
                  <div className="thumbnail">
                    <img
                      src="/assets/images/blog/blog-large-1.jpg"
                      alt="Blog Image"
                    />
                  </div>
                </div>
                <p data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor inc idid unt ut labore et dolore magna
                  aliqua enim ad minim veniam, quis nostrud exerec tation
                  ullamco laboris nis aliquip commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit sed quia consequuntur magni
                  dolores.
                </p>
                <p data-aos="fade-up">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam.
                </p>
                <ul data-aos="fade-up">
                  <li>Aute irure dolor in reprehenderit</li>
                  <li>Occaecat cupidatat non proident sunt in culpa</li>
                  <li>Pariatur enim ipsam.</li>
                </ul>
                <blockquote data-aos="fade-up">
                  <p>
                    Lorem ipsum dolor amet con sectur elitadicing elit sed do
                    usmod tempor uincididunt enim minim veniam nostrud.
                  </p>
                  <h5 className="author">Simon Baker</h5>
                </blockquote>
                <h3 data-aos="fade-up" className="title">
                  The Complete Camtasia
                </h3>
                <p data-aos="fade-up">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam.
                </p>
                <div className="features-image">
                  <div data-aos="fade-up" className="row g-md-5">
                    <div className="col-6">
                      <div className="thumb">
                        <img
                          src="/assets/images/blog/features-1.jpg"
                          alt="Features Images"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="thumb">
                        <img
                          src="/assets/images/blog/features-2.jpg"
                          alt="Features Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p data-aos="fade-up">
                  Consectetur adipisicing elit, sed do eiusmod tempor inc idid
                  unt ut labore et dolore magna aliqua enim ad minim veniam,
                  quis nostrud exerec tation ullamco laboris nis aliquip commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit sed
                  quia consequuntur magni dolores.{" "}
                </p>
                <p data-aos="fade-up">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam.
                </p>
                <h3 data-aos="fade-up" className="title">
                  Intrinsic Motivation
                </h3>
                <p data-aos="fade-up">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam.
                </p>
                <ul data-aos="fade-up">
                  <li>Aute irure dolor in reprehenderit</li>
                  <li>Occaecat cupidatat non proident sunt in culpa</li>
                  <li>Pariatur enim ipsam.</li>
                </ul>
                <div className="blog-share-area">
                  <div className="row align-items-center">
                    <div className="col-md-7"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div data-aos="fade-left" className="edu-blog-sidebar">
                <div className="edu-blog-widget widget-latest-post">
                  <div className="inner">
                    <h4 className="widget-title">Latest Post</h4>
                    <div className="content latest-post-list">
                      <div className="latest-post">
                        <div className="thumbnail">
                          <Link href="/blogs/blogsDetails">
                            <img
                              src="/assets/images/blog/small-post-01.jpg"
                              alt="Blog Images"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <h6 className="title">
                            <Link href="/blogs/blogsDetails">
                              Instructional Design &amp; Adult Learners
                            </Link>
                          </h6>
                          <ul className="blog-meta">
                            <li>
                              <i className="icon-27" />
                              22 Nov, 2021
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="edu-blog-widget widget-categories">
                  <div className="inner">
                    <h4 className="widget-title">Categories</h4>
                    <div className="content">
                      <ul className="category-list">
                        <li>
                          <Link href="#">
                            Business Studies <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Computer Engineering <span>(7)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Medical &amp; Health<span>(2)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Software <span>(1)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Web Development <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Uncategorized <span>(9)</span>
                          </Link>
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
    </div>
  );
};

export default BlogsDetails;
