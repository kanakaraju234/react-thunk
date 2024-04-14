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
  const [errors,setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("user", user);

  const handleSubmit = (e) => {
    e.preventDefault();
// validating have to do here 

                   const validationErrors = {};
           if (!user.name.trim()) {
  validationErrors.name = "Name is required";
}
if (!user.phoneNumber.trim()) {
  validationErrors.phoneNumber = "Phone number is required";
} else if (!/^\d{10}$/.test(user.phoneNumber)) {
          validationErrors.phoneNumber = "Invalid phone number";
}
if (!user.email.trim()) {
            validationErrors.email = "Email is required";
           }else if (!/\S+@\S+\.\S+/.test(user.email)) {
  validationErrors.email = "Invalid email address";
}
    if (!user.password.trim()) {
      validationErrors.password = "Password is required";
        } else if (user.password.length < 6) {
  validationErrors.password = "Password must be at least 6 characters or  above";
}
// cpassword  && password should be same
            if (user.confirmPassword !== user.password) {
            validationErrors.confirmPassword = "Password do not match";
}

// if everything is right 
if (Object.keys(validationErrors).length === 0) {
  const { confirmPassword, ...rest } = user;
  dispatch(signUp({ ...rest, created_at: new Date(), token: "newtoken" }));
  setUser({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  alert('Form submitted successfully!');
  navigate("/login");
} else {
  setErrors(validationErrors);
}

// first i have to try 

  };
// validation  upto here

// up to here janu

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="d-flex bg-white align-items-center justify-content-center container rounded 0 h-25 ">
      <form
        className="form-control form-outline border-0"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center">Signup</h1>
        <div className="form-group w-100 mb-2 mt-4">
          {/* name */}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            className="form-control mb-4 mt-2"
            placeholder="Enter Name"
            onChange={(e) => handleChange(e)}
          />
           {errors.name && <div className="text-danger">{errors.name}</div>}
           {/* num */}
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            className="form-control mb-4 mt-2"
            placeholder="Enter Phone Number"
            onChange={(e) => handleChange(e)}
          />
            {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
            {/* email */}
          <label htmlFor="emial address">Emaild address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control mb-4 mt-2"
            placeholder="Enter Email"
            onChange={(e) => handleChange(e)}
          />
   {errors.email && <div className="text-danger">{errors.email}</div>}
    {/* // password */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            className="form-control mb-3 mt-2"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
 {errors.password && <div className="text-danger">{errors.password}</div>}
 {/* here cPassword */}
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
 {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
          <button type="submit" className="btn btn-primary  mt-3 w-100 mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
