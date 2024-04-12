import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Bookings } from "./bookings/booking";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Users } from "./components/Users";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import Dashboard from "./bookings/Dashboard";
import Register from "./components/Register";
import SignupPage from "./components/SignupPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />} path="/">
              <Route element={<Users />} path="/" />
              <Route element={<Bookings />} path="/bookings" />
              <Route element={<Dashboard/>} path="/dashboard"></Route>
              <Route element={<Register/>} path="/register"></Route>
              <Route element={<SignupPage/>} path="/signupForm"></Route>
            </Route>
          </Route>
          <Route element={<Login />} exact path="/login" />
          <Route element={<Signup />} path="/signup"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
