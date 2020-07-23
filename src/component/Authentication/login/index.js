import React, { useState } from "react";
import "./style.css";
import "./style.scss";
import facebook from "../../../assets/icon/facebook (1).png";
import google from "../../../assets/icon/google.png";
import twitter from "../../../assets/icon/twitter.png";
import { useHistory, Redirect } from "react-router-dom";
import Loading from "../../loading";

export default ({}) => {
  let history = useHistory();
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);

  const alertMessage = (message) => {
    alert(message);
  };

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Đăng nhập thành công");
      history.push("/trang-chu");
    }, 2000);
  };

  return (
    <div className="container-fluid background">
      <div className="inputField">
        <div className="wrapLabel">
          <h1>Đăng nhập</h1>
          <Loading isLoading={loading} />
        </div>

        <div className="wrapInput">
          <div className="wrapMoreLogin">
            <button
              onClick={() => alertMessage("bạn đang đăng nhập bằng facebook")}
            >
              <img src={facebook} />
            </button>

            <button
              onClick={() => alertMessage("bạn đang đăng nhập với Email")}
            >
              <img src={google} />
            </button>
            <button
              onClick={() => alertMessage("bạn đang đăng nhập với twitter")}
            >
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
          <button onClick={() => history.push("/quen-mat-khau")}>
            <h5>Quên mật khẩu ?</h5>
          </button>
          <br />
          <button onClick={() => history.push("/dang-ki")}>
            <h5>Vào đây để đăng kí tài khoản</h5>
          </button>
        </div>
        <div className="wrapButton">
          <button onClick={login}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};
