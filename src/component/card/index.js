import React from "react";
import "./style.scss";
import { Button, Row } from "react-bootstrap";

import heartIcon from "../../assets/icon/heart.png";
const image = "../../assets/image/html.jpg";

export const Card = ({ price, teacher, label, image }) => {
  return (
    <div className="Card">
      <div className="wrapImage">
        <img src={image} className="coverImage" />
        <div className="middle">
          <div className="wrapPrice">
            <h4>Giá: </h4>
            <h4 style={{ color: "red", marginLeft: -100 }}>{price} đ</h4>
            <button>
              <img src={heartIcon} width="20" height="20" />
            </button>
          </div>
          <ul>
            <li>Giảng viên: Thầy Giáo Huấn </li>
            <li>Giờ: 300h </li>
            <li>Kĩ năng đạt được: hoàn thành 1 trang web với HTML</li>
          </ul>
        </div>
      </div>

      <div className="title">
        <h3>{label} </h3>
        <h3 style={{ fontSize: 15, marginTop: 0 }}>Giảng viên: {teacher}</h3>
      </div>
      <div className="wrapButton">
        <button className="outline">Xem thêm</button>
        <button className="inline">Thêm khóa học</button>
      </div>
    </div>
  );
};
