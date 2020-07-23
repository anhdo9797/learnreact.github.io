import React, { useState } from "react";
import "../login/style.scss";
import { useHistory } from "react-router-dom";
import Loading from "../../loading";

export default ({}) => {
  let history = useHistory();

  const [input, setInput] = useState({
    useName: "",
    password: "",
    confirmPass: "",
  });
  const [loading, setLoading] = useState(false);

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Đăng kí thành công");
    }, 3000);
  };

  return (
    <div className="container-fluid background">
      <div className="inputField">
        <div className="wrapLabel">
          <h1>Đăng kí tài khoản</h1>
          <Loading isLoading={loading} />
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
            <input
              placeholder="Mật khẩu"
              type="password"
              onChange={(password) =>
                setInput({ ...input, password: password.target.value })
              }
            />
          </form>
          <form>
            <input
              placeholder="Nhập lại mật khẩu"
              type="password"
              onChange={(confirmPass) =>
                setInput({ ...input, confirmPass: confirmPass.target.value })
              }
            />
          </form>

          <div style={{ height: 30 }}>
            {input.confirmPass.length > 0 &&
            input.confirmPass !== input.password ? (
              <h4 className="error">Mật khẩu chưa khớp </h4>
            ) : null}
          </div>
          <button onClick={() => history.push("/")}>
            <h5>Nếu đã có tài khoản thì đăng nhập ở đây</h5>
          </button>
        </div>
        <div className="wrapButton">
          <button onClick={register}>Đăng kí</button>
        </div>
      </div>
    </div>
  );
};
