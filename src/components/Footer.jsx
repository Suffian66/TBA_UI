import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid" style={{ backgroundColor: "#0D0877" }}>
          <div className="row py-3 px-5 ">
            {/* for logo */}

            <div className="col-1  ">
              <h4
                className="d-flex text-center justify-content-center "
                style={{ color: "#FFC600" }}
              >
                THE BEGINNERS ACADEMY
              </h4>
            </div>

            {/* for information */}

            <div className="col-7 mx-3 px-5 justify-content-center">
              <ul className="">
                <li className="">
                  <i
                    className="fa fa-address-card  "
                    style={{
                      color: " #FFC600",
                    }}
                  >
                    <span
                      className="ms-2"
                      style={{
                        color: " #FFC600",
                        fontSize: "11px",
                        fontweight: "400",
                        lineheight: "30px",
                      }}
                    >
                      {" "}
                      Umar Goth, Zila Malir, Deh Bijar Bhatti, Tappo Songal
                      Gadap, Sindh, Pakistan-75320{" "}
                    </span>
                  </i>
                </li>

                <li className="">
                  <i
                    className="fa fa-phone  "
                    style={{
                      color: " #FFC600",
                    }}
                  >
                    <span
                      className="ms-2"
                      style={{
                        color: " #FFC600",
                        fontSize: "11px",
                        fontweight: "400",
                        lineheight: "30px",
                      }}
                    >
                      {" "}
                      +92311-2124666{" "}
                    </span>
                  </i>
                </li>
                <li className="">
                  <i
                    className="fa fa-mail-bulk  "
                    style={{
                      color: " #FFC600",
                    }}
                  >
                    <span
                      className="ms-2"
                      style={{
                        color: " #FFC600",
                        fontSize: "11px",
                        fontweight: "400",
                        lineheight: "30px",
                      }}
                    >
                      {" "}
                      info@thebeginnersacademy.com{" "}
                    </span>
                  </i>
                </li>
              </ul>
            </div>

            {/* for icons and link */}

            <div className=" col-3  d-flex justify-content-center align-items-center">
              <ul>
                <li className="list-unstyled">
                  <Link to="www.facebook.com" >
                    <i
                      className="fab fa-facebook fs-2"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled">
                  <Link to="www.instagram.com">
                    <i
                      className="fab fa-instagram fs-2"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled">
                  <Link to="www.youtube.com">
                    <i
                      className="fab fa-youtube fs-2"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled">
                  <Link to="www.linkedin.com">
                    <i
                      className="fab fa-pinterest fs-2"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="list-unstyled fs-2">
                  <Link to="www.twitter.com">
                    <i
                      className="fab fa-twitter"
                      style={{ color: "#ffff " }}
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid">
        <div className="row ">
          <div className="  d-flex justify-content-center align-items-center " style={{backgroundColor:"#FEE134"}}>
            <div className="col-8 ms-4">
              <Link to="/" className="text-decoration-none text-dark">
              <span className="mx-1">  Home </span>
              
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
                <span className="mx-1">
                About Us
                </span>
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
                <span className="mx-1">
                Program
                </span>
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
               <span className="mx-1">
                Get Involved
                </span>
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
               <span className="mx-1">
                ContactUs
                </span>
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
             <span className="mx-1">
              Donation
              </span>
              </Link>

            </div>
            <div className="col-4 d-flex justify-content-center mt-2 pt-1 align-items-center ">
              <p>
              Copyright – 2023 The Beginners Academy. All Rights Reserved.
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
