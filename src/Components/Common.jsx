import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <div id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row " id="mainbox">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.title}
                    <strong className="brand-name"> Shahbaz</strong>
                  </h1>
                  <h2>We help you to grow your bussiness...</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.linktitle}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 mb-4 order-lg-2 header-img">
                  <img
                    src={props.img}
                    alt="Img"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Common;
