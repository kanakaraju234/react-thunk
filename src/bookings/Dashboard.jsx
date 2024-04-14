import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";

const Dashboard = () => {

  return (
    <div>
      <div className="shadow-sm p-1 d-flex justify-content-between mt-1 bg-darklight rounded border border-3">
        <div>
          <h2 className="fs-1 ">Welocome</h2>
          <p>we have summarized your activity information</p>
        </div>
        <a href="#" className="btn btn-primary btn-lg m-4 me-2">
          <i className="bi bi-plus  "></i>
          <span className="me-2 fs-4">Create Master Booking</span>
        </a>
      </div>

      <div className="d-flex justify-content-between ">
        <div className="col-md-5   mt-3">
          <div className="p-3 bg-darklight rounded border border-2 shadow-sm d-flex justify-content-around align-items-center rounded">
            <i
              className="bi bi-clock fs-2 "
              style={{ marginBottom: "90px" }}
            ></i>
            <div>
              <span className="fs-5 ms-1 " style={{ fontWeight: "bold" }}>
                Timesheet Submission
              </span>
              <h2 className="mt-5" style={{ float: "right" }}>
                View
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-5  m-2 mt-3">
          <div className="p-3 bg-darklight rounded border border-2 shadow-sm d-flex justify-content-around align-items-center rounded">
            <i
              className="bi bi-check-circle fs-2 "
              style={{ marginBottom: "90px" }}
            ></i>
            <div>
              <span className="fs-5 ms-5 " style={{ fontWeight: "bold" }}>
                Timesheet Confirmation
              </span>
              <h2 className="mt-5" style={{ float: "right" }}>
                View
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-4   mt-3">
          <div className="p-3 bg-darklight rounded border border-2 shadow-sm d-flex justify-content-around align-items-center rounded">
            <i
              className="bi bi-exclamation-circle fs-2 "
              style={{ marginBottom: "90px", marginLeft: "" }}
            ></i>
            <div>
              <span
                className="fs-4  "
                style={{ fontWeight: "bold", marginLeft: "20px" }}
              >
                Resolve Dispute
              </span>
              <h2 className="mt-5" style={{ marginLeft: "270px" }}>
                View
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
