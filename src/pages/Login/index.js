import * as users from "../../services/usersService";
import { setCookie } from "../../helpers/cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthen } from "../../actions/authentication";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const data = await users.getUser(email, password);
    if (data.length > 0) {
      const time = 1;
      setCookie("id", data[0].id, time);
      setCookie("fullName", data[0].fullName, time);
      setCookie("email", data[0].email, time);
      setCookie("token", data[0].token, time);
      dispatch(checkAuthen(true));
      navigate("/");
      alert("Đăng nhập thành công!");
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác!");
    }
  };

  return (
    <>
      <div className="form">
        <h3 className="inner-title">Login Quiz</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="button button-main">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
