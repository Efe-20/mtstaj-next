import React from "react";
import Link from "next/link";
import BlogDetails from "./blogsDetails";
import apiService from "@/common/services/api.service";

const Blogs = () => {
  const getData = async () => {
    const data = await apiService.getBlogs();
    console.log(data);
    setData(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const [data, setData] = React.useState([]);
  return (
    <div>
      <div className="edu-breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-inner"></div>
        </div>
        <ul className="shape-group">
          <li className="shape-1"></li>
          <li className="shape-2 scene"></li>
          <li className="shape-3 scene"></li>
          <li className="shape-4"></li>
          <li className="shape-5 scene">
            <img
              data-depth={2}
              src="/assets/images/about/shape-07.png"
              alt="shape"
            />
          </li>
        </ul>
      </div>
      <section className="section-gap-equal">
        <div className="container">
          <div className="section-title section-center">
            <h2 data-aos="fade-up" data-aos-duration="2000" className="title">
              Bloglar
            </h2>
            <span data-aos="fade-up" className="shape-line">
              <i className="icon-19" />
            </span>
          </div>
          <div className="row row--30">
            <div className="col-lg-8">
              {data.map((item) => (
                <BigBlogCard item={item} />
              ))}
            </div>
            <div className="col-lg-4">
              {data.map((item) => {
                return <SmallBlogCard item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function BigBlogCard({ item }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="edu-blog blog-style-list"
    >
      <div className="inner">
        <div className="thumbnail">
          <Link href="/blogs/blogsDetails">
            <img src={item.img} alt="Blog Images" />
          </Link>
        </div>
        <div className="content">
          <h5 className="title">
            <Link href={item.slug}>{item.title}</Link>
          </h5>
          <ul className="blog-meta">
            <li>
              <i className="icon-27" />
              Oct 10, 2021
            </li>
          </ul>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function SmallBlogCard({ item }) {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      className="edu-blog-sidebar"
      style={{ marginTop: 0 }}
    >
      <div className="edu-blog-widget widget-search">
        <div className="inner">
          <h4 className="widget-title">Search</h4>
          <div className="content">
            <form className="blog-search" action="#">
              <button className="search-button">
                <i className="icon-2" />
              </button>
              <input type="text" placeholder="Search" />
            </form>
          </div>
        </div>
      </div>
      <div className="edu-blog-widget widget-latest-post">
        <div className="inner">
          <h4 className="widget-title">Latest Post</h4>
          <div className="content latest-post-list">
            <div className="latest-post">
              <div className="thumbnail">
                <Link href="/blogs/blogsDetails">
                  <img src={item.img} alt="Blog Images" />
                </Link>
              </div>
              <div className="post-content">
                <h6 className="title">
                  <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
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
  );
}

export default Blogs;
