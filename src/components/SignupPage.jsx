import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center   rounded 0 signup">
      <div className="w-50 mb-3 ">
        <h3 className="text-center text-decoration-underline">Sign Up</h3>
        <form>
          <div className="mb-1">
            <label htmlFor="name" className="fs-7">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="phonenumber" className="fs-7">
              Phone Number:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="fs-7">
              Email Address:
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Address"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="fs-7">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="confirm password" className="fs-7">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Confirm Password"
            />
          </div>
          <Link to="/register" className="btn btn-primary">
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
