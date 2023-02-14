import React, { useState } from "react";
import Link from "next/link";
import YoungTalentsInner from "./youngTalentsInner";
import apiService from "@/common/services/api.service";

const YoungTalents = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const data = await apiService.getYoungTalentPrograms();

      setData(data);
    };

    getData();
  }, []);

  return (
    <div>
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
            {data.map((item) => {
              return <YoungTalentCard item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function YoungTalentCard({ item }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="edu-team-grid team-style-2"
      >
        <div className="inner">
          <div className="thumbnail-wrap">
            <div className="thumbnail">
              <Link href="/young-talents/youngTalentsInner">
                <img src={item.img} alt="team images" />
              </Link>
            </div>
          </div>
          <div className="content">
            <h5 className="title">
              <Link href="/young-talents/youngTalentsInner">{item.name}</Link>
            </h5>
            <span className="designation">{item.job}</span>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoungTalents;
