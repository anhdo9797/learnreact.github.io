import React, { useState } from "react";
import { Link, NavLink, Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Profile from "./Profile";
import MyCourse from "./MyCourse";
import MoreCourses from "./MoreCourses";

const routers = [
  {
    ulr: "thong-tin-tai-khoan",
    label: "Thông tin cá nhân",
  },
  {
    ulr: "khoa-hoc-cua-toi",
    label: "Khóa học của tôi",
  },
  {
    ulr: "them-khoa-hoc",
    label: "Thêm khóa học",
  },
];

export default ({ match }) => {
  const [typeFocus, setFocusType] = useState("");
  return (
    <div>
      <nav class="wrapMenu" role="navigation">
        <ul className="ulrNav">
          {routers.map((item, index) => (
            <li
              key={index}
              className={item.ulr === typeFocus ? "focusTag" : null}
            >
              <Link className="link" to={`${match.url}/${item.ulr}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Route
        path={`${match.path}/:name`}
        exact
        render={({ match }) => {
          if (match.params.name === "thong-tin-tai-khoan") {
            setFocusType(match.params.name);
            console.log(typeFocus);
            return <Profile match={match} />;
          } else if (match.params.name === "them-khoa-hoc") {
            setFocusType(match.params.name);
            return <MoreCourses match={match} />;
          } else {
            setFocusType(match.params.name);
            return <MyCourse match={match} />;
          }
        }}
      />
    </div>
  );
};
