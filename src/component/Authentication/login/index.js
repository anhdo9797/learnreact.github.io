import React, { useState } from "react";
import "./style.css";
import "./style.scss";
import facebook from "../../../assets/icon/facebook (1).png";
import google from "../../../assets/icon/google.png";
import twitter from "../../../assets/icon/twitter.png";
import { useHistory } from "react-router-dom";

export default ({}) => {
  let history = useHistory();
  const [input, setInput] = useState();

  const login = (message) => {
    alert(message);
  };

  const registerAccount = () => {
    history.push("/dang-ki");
  };

  const gotForgetPass = () => {
    history.push("/quen-mat-khau");
  };

  return (
    <div className="container-fluid background">
      <div className="inputField">
        <div className="wrapLabel">
          <h1>Đăng nhập</h1>
        </div>

        <div className="wrapInput">
          <div className="wrapMoreLogin">
            <button onClick={() => login("bạn đang đăng nhập bằng facebook")}>
              <img src={facebook} />
            </button>

            <button onClick={() => login("bạn đang đăng nhập với Email")}>
              <img src={google} />
            </button>
            <button onClick={() => login("bạn đang đăng nhập với twitter")}>
              <img src={twitter} />
            </button>
          </div>
          <h4>Hoặc</h4>
          <form>
            <input placeholder="Tên đăng nhập" />
          </form>
          <form>
            <input placeholder="Mật khẩu" type="password" />
          </form>
          <button onClick={gotForgetPass}>
            <h5>Quên mật khẩu ?</h5>
          </button>
          <br />
          <button onClick={registerAccount}>
            <h5>Vào đây để đăng kí tài khoản</h5>
          </button>
        </div>
        <div className="wrapButton">
          <button onClick={() => login("Đăng nhập")}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};
