import React from "react";
import { useHistory } from "@docusaurus/router";
import Translate from "@docusaurus/Translate";
import "./styles.scss";

export default function CaseCard(props) {
  const { title, subTitle, date, desc, imgUrl, link } = props;
  const history = useHistory();

  return (
    <div
      className="case-card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imgUrl})`,
      }}
    >
      <div className="card-content">
        <h2 className="title" onClick={() => history.push(link)}>
          {title}
        </h2>
        <hr />
        {subTitle && <h3 className="sub">{subTitle}</h3>}
        <p className="desc">{desc}</p>
        <div className="bottom-section">
          <span className="date">{date}</span>
          <button className="button" onClick={() => history.push(link)}>
            <Translate>READ CASE STUDY</Translate>
          </button>
        </div>
      </div>
    </div>
  );
}
