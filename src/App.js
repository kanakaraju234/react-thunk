import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Users } from "./components/Users";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />} path="/">
              <Route element={<Users />} path="/users" />
            </Route>
          </Route>
          <Route element={<Login />} exact path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
