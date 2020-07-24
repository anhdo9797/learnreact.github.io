import React, { useState } from "react";
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
const listMenu = [
  { label: "Lập trình" },
  { label: "Kĩ năng" },
  { label: "Ngoại ngữ" },
  { label: "Âm nhạc" },
  { label: "Thiết kế" },
  { label: "Kinh doanh khởi nhiệp" },
  { label: "Multimedia" },
];

export default ({ match }) => {
  const [focusMenu, setFocusMenu] = useState("");
  return (
    <div className="backgroundPage containerRow ">
      <div className="Menu ">
        <ul>
          <div className="LabelMenu">Danh sách khóa học </div>
          {listMenu.map((e) => (
            <ItemMenu label={e.label} />
          ))}
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
