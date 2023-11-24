import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import * as users from "../../services/usersService";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target.elements.fullName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const token = generateToken();

    const options = {
      fullName: fullName,
      email: email,
      password: password,
      token: token,
    };

    const checkExist = await users.getUser(email);

    if (checkExist.length > 0) {
      alert("Tài khoản đã tồn tại!");
    } else {
      const result = await users.createUser(options);
      if (result) {
        navigate("/login");
        alert("Đăng ký thành công!");
      }
    }
  };

  return (
    <>
      <div className="form">
        <h3 className="inner-title">Register Account</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="button button-main">Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;