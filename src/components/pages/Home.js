import React from "react";
import { Link } from "react-router-dom";
import Banner from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

function Home() {
  return (
    <div className="home-background">
      <div className="container h-100">
        <div className="row align-items-center isi-home">
          <div className="col-lg-4 col-md-12 col-sm-12  col-12">
            <img id="foto-profil" src={Banner} alt="" />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="main-p">
              <p className="sapaan">Hi, my name is </p>
              <p className="nama">Anne Sullivan</p>
              <p className="hobi">I build things for the web</p>
              <p className="tombol">
                <Link to="/getin">Get In Touch</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
