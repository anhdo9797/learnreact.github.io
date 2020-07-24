import React from "react";
import "./style.scss";
import { Card } from "../../card";
import { listCourses } from "../../../data/listCourses";
import next from "../../../assets/icon/next.png";

const ItemMenu = ({ label }) => {
  return (
    <li>
      <button className="itemMenu">
        {label}
        <img src={next} width="10" height="10" />
      </button>
    </li>
  );
};

export default ({ match }) => {
  return (
    <div className="backgroundPage containerRow ">
      <div className="Menu ">
        <ul>
          <div className="LabelMenu">Danh sách khóa học </div>
          <ItemMenu label="Lập trình" />
          <ItemMenu label="Kĩ năng" />
          <ItemMenu label="Ngoại ngữ" />
          <ItemMenu label="Âm nhạc" />
          <ItemMenu label="Thiết kế" />
          <ItemMenu label="Kinh doanh khởi nhiệp" />
          <ItemMenu label="Multimedia" />
        </ul>
      </div>
      <div className="showList">
        {listCourses.map((e, i) => (
          <Card
            price={e.price}
            label={e.label}
            image={e.image}
            teacher={e.teacher}
          />
        ))}
      </div>
    </div>
  );
};
