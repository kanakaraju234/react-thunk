import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/Reducers/UserReducer";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  console.log("user", user);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = user;
    dispatch(signUp({ ...rest, created_at: new Date(), token: "newtoken" }));
       setUser({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
       navigate("/login")
    
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log("onchange" , user)
  };

  return (
    <div className="d-flex bg-white align-items-center justify-content-center  container rounded 0 ">
      <form
        className="form-control form-outline border-0"
        onSubmit={handleSubmit}
      >
        <div className="form-group w-100 mb-2 mt-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            className="form-control mb-4 mt-2"
            placeholder="Enter Name"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            className="form-control mb-4 mt-2"
            placeholder="Enter Phone Number"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="emial address">Emaild address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control mb-4 mt-2"
            placeholder="Enter Email"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            className="form-control mb-3 mt-2"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="confirm password" className="mt-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            placeholder="Confirm Password"
            className="form-control mb-3 mt-2"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
