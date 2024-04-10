import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../components/Layout.css";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="layout border-end col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div className="d-flex flex-column align-items-sm-start align-items-center px-3 pt-2 text-black min-vh-100">
              <a
                href="/"
                className="w-100 text-start  pb-2 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <i class="logo bi bi-globe fs-1"></i>
                {/* <image src={logo} /> */}
              </a>
              <ul
                className="w-100 nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-black"
                id="menu"
              >
                <li
                  className={`nav-list nav-item w-100 px-1 ${
                    location.pathname === "/" && "nav-active-list"
                  } `}
                >
                  <Link
                    to="/"
                    className={`nav-link align-middle px-0 ${
                      location.pathname === "/" ? "text-white" : "text-black"
                    }`}
                  >
                    <i class="bi bi-people fs-4"></i>
                    <span className="ms-2 d-none d-sm-inline">Users</span>
                  </Link>
                </li>
                <li className="nav-list nav-item w-100 px-1">
                  <Link
                    to="/bookings"
                    className="nav-link align-middle px-0 text-black"
                  >
                    <i className="fs-4 bi-house"></i>
                    <span className="ms-2 d-none d-sm-inline">Bookings</span>
                  </Link>
                </li>
              </ul>
              <hr />
              <div className="pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-black text-decoration-none"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  <span className="d-none d-sm-inline mx-1">Logout</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col py-3">
            <Outlet />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
