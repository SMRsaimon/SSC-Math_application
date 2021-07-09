import React from "react";
import PageImages from "../Home/PageImages/PageImages";
import "./PageComponent.css";
import Navigation from  "../../components/Navigation/Navigation"
import Footer from "../Footer/Footer";
const PageComponent = ({Chapter}) => {

    console.log(Chapter)
  return (
    <>
     <Navigation />
      <div className="container">
        <div className="row d-flex justify-content-center">

            {
          Chapter.map(x=> <PageImages title={x.title} img={x.img}  />)

            }
         
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default PageComponent;
