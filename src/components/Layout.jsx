import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Users</span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none"
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
