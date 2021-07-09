import React from "react";
import "./Home.css";
import Image from "react-bootstrap/Image";

import mathBook from "../../resource/mathBook.jpg";

const Home = () => {
  return (
    <>
      <div className="container-fluid bg-home">
        <div className="container   pt-5">
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="body-title text-center">
                SSC Higher Math Solution Book{" "}
              </h1>
            </div>

            <div className="col-md-6 offset-md-3 pb-5">
              <div className="home-banner-img-container">
                <Image src={mathBook} thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
