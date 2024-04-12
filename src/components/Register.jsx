import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center rounded  register ">
      <div className=" p-3 rounded w-30 ">
        <form>
          <h3 className="text-center text-decoration-underline">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email " className="fs-7">
              Email Address:
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded 0 mb-3 mt-1"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="fs-7">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded 0 mt-1"
            />
          </div>
          <div>
            <input
              type="checkbox"
              className="custom-control custom-checkbox ms-1"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
            <span>
              <a>Forgot Password?</a>
            </span>
          </div>
          <button type="button" className="btn btn-primary w-100 mt-3">
            Sign In
          </button>

          <div className="text-center mt-3">
            <p>
              Not a member?<Link to="/signupForm">Register</Link>
            </p>
            <p>or sign up with:</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
