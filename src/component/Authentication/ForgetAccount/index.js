import React, { useState } from "react";
import "../login/style.scss";
import { useHistory } from "react-router-dom";

export default ({}) => {
  let history = useHistory();

  const [input, setInput] = useState({
    useName: "",
    password: "",
    confirmPass: "",
  });

  const goLogin = () => {
    history.push("/");
  };

  return (
    <div className="container-fluid background">
      <div className="inputField">
        <div className="wrapLabel">
          <h1>Tìm tài khoản</h1>
        </div>

        <div className="wrapInput">
          <form>
            <input
              placeholder="Tên đăng nhập"
              value={input.useName}
              onChange={(useName) =>
                setInput({ ...input, useName: useName.target.value })
              }
            />
          </form>
          <form>
            <input placeholder="Email đăng kí" />
          </form>
          <form>
            <input placeholder="Số điện thoại" />
          </form>
          <button onClick={() => history.push("/")}>
            <h5>Đăng nhập với tài khoản khác </h5>
          </button>
          <br />
          <button onClick={() => history.push("/dang-ki")}>
            <h5>Đăng kí tài khoản mới</h5>
          </button>
        </div>
        <div className="wrapButton">
          <button>Tìm tài khoản</button>
        </div>
      </div>
    </div>
  );
};
