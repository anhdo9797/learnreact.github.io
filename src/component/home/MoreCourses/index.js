import React from "react";
import "./style.scss";
import { Card } from "../../card";

export default ({ match }) => {
  return (
    <div className="backgroundPage">
      <h1>Thêm khóa học</h1>
      <Card />
    </div>
  );
};
