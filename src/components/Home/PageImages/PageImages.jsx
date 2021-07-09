import React from "react";

import Image from "react-bootstrap/Image";
const PageImages = ({title,img}) => {
  return (
    <>
      <div className="col-md-12">
        <h3 className="text-center pt-4">{title}</h3>
      </div>
      <div className="col-xl-10 col-md-10 offset-md-1 offset-xl-1  d-flex justify-content-center">
        <div className="page-img-container">
          <Image src={img} thumbnail />
        </div>
      </div>
    </>
  );
};

export default PageImages;
