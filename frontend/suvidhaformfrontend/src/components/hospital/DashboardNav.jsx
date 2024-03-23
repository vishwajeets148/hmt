import React, { useEffect, useState } from "react";
import "./Hospital.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardNav = () => {
  const navigate = useNavigate();
  const baseurl = process.env.REACT_APP_BASEURL;
  const [data, setData] = useState({});
  useEffect(() => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    // Make sure ID and token are available
    if (id && token) {
      const fetchData = async () => {
        try {
          // Make API call with the user ID
          const response = await axios.get(`${baseurl}/hospital/${id}`);
          setData(response.data);
          localStorage.setItem('hospital', JSON.stringify(response.data));
        } catch (error) {
          console.error('API call failed:', error);
        }
      };

      fetchData();
    } else {
      console.error('ID or token not available in local storage');
    }
  }, []);

  const getLogoSrc = () => {
    if (data && data.hospital && data.hospital.logo) {
      const base64 = btoa(String.fromCharCode.apply(null, data.hospital.logo.data));
      return `data:image/png;base64,${base64}`;
    }
    return null;
  };
  // Remove the empty dependency array to trigger the effect after every render

  // // Access the user data from the location state
  // const userData = location.state ? location.state.user : null;
  // console.log(userData);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const storedPatientDetails = JSON.parse(
  //     localStorage.getItem("patientDetails")
  //   );
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("patientDetails"); // Corrected the removal of localStorage item
    navigate("/login");
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (

    <div className="dashboard">

      <div className="container bg-white ">
        {/* Sidebar Start */}
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-light navbar-light">
            <Link to="" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">
                <i className="fa fa-hashtag me-2"></i>Suvidha Form
              </h3>
            </Link>
            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img
                  className="rounded-circle"
                  src={getLogoSrc()}
                  // src="../assets/dashboard/img/user.jpg" // Assuming you have a variable named `logo` with the image URL
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div className="ms-3">
                <h6 className="mb-0 text-primary">
                  {/* <b>{data?.hospital?.name}</b> */}
                  {data && data.hospital && (

                    <b>{data.hospital.name}</b>

                  )}
                  {!data && <p>Loading...</p>}
                </h6>
              </div>
            </div>
            <div className="navbar-nav w-100">
              {/* <Link to="/hospital/dashboard" className="nav-item nav-link">
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </Link> */}
              <Link to="/hospital/formManager" className="nav-item nav-link">
                <i className="fa fa-keyboard me-2"></i>Forms
              </Link>

              <Link to="/hospital/patient" className="nav-item nav-link">
                <i className="fa fa-th me-2"></i>New Patients
              </Link>

            </div>
          </nav>
          {/* <button className="btn btn-danger" onClick={logout}> Logout</button> */}
        </div>
        {/* Sidebar End */}

        {/* Content Start */}

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid ">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav align-items-center ms-auto">
              {/* <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-envelope me-lg-2"></i>
                  <span className="d-none d-lg-inline-flex">Message</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="../assets/dashboard/img/user.jpg" // Assuming you have a variable named `logo` with the image URL
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">
                          Jhon send you a message
                        </h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src={getLogoSrc()}
                        // src="../assets/dashboard/img/user.jpg" // Assuming you have a variable named `logo` with the image URL
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">
                          Jhon send you a message
                        </h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">
                    See all message
                  </a>
                </div>
              </div> */}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    className="rounded-circle"
                    src={getLogoSrc()}
                    // src="../assets/dashboard/img/user.jpg" // Assuming you have a variable named `logo` with the image URL
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <span className="d-none d-lg-inline-flex">
                    {data && data.hospital && (

                      <p>{data.hospital.email}</p>

                    )}
                    {!data && <p>Loading...</p>}
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  {/* <Link href="#" className="dropdown-item">
                    My Profile
                  </Link>
                  <Link href="#" className="dropdown-item">
                    Settings
                  </Link> */}
                  <button
                    onClick={handleLogout}
                    className="dropdown-item btn btn-danger"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </nav>
       
      </div>
    </div>
  );
};
export default DashboardNav;
