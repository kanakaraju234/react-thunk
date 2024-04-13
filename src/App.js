import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Bookings } from "./bookings/booking";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Users } from "./components/Users";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import Appointment from "./bookings/Appointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />} path="/">
              <Route element={<Users />} path="/" />
              <Route element={<Bookings />} path="/bookings" />
              <Route element={<Appointment/>} path="/appointment"></Route>
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
