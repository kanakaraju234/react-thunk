import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Users } from "./components/Users";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { Signup } from "./components/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />} path="/">
              <Route element={<Users />} path="/" />
            </Route>
          </Route>
          <Route element={<Login />} exact path="/login" />
          <Route element={<Signup/>} path="/signup"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
