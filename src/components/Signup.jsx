import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:" + email);
    console.log("Password:" + password);
    console.log("confirm password:" + confirmPassword)
  };

  return (
    <div className="d-flex bg-white align-items-center justify-content-center  container rounded 0 ">
      <form
        className="form-control form-outline border-0"
        onSubmit={handleSubmit}
      >
        <div className="form-group w-100 mb-2 mt-4">
          <label htmlFor="emial address">Emaild address</label>
          <input
            type="email"
            className="form-control mb-4 mt-2"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control mb-3 mt-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirm password" className="mt-2">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control mb-3 mt-2"
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
