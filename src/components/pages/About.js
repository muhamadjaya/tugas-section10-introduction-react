import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../img/logo-ALTA-v2@2x.png";
import Unsplash from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import LogoFb from "../img/ic_fb@2x.png";
import LogoTwitter from "../img/ic-twitter@2x.png";
import LogoIg from "../img/ic-instagram@2x.png";
import LogoLinkded from "../img/ic-linkedin@2x.png";

function AboutUs() {
  return (
    <>
      <div className="container-fluid about-me">
        <h1 className="container pl-2 pt-5 pb-5">ABOUT ME.</h1>
      </div>

      <div className="container">
        <div className="row pt-5 pb-5 ">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
            <div className="about-anne">
              <p>
                Hello! I’m Anne Sullivan, a full-stack engineer based in Malang,
                IDN who enjoys building things that live on the internet. I
                develop exceptional websites and web apps that provide
                intuitive, pixel-perfect user interfaces with efficient and
                modern backends. <br />
                <br />
                Shortly after graduating from Alterra Academy, I joined the
                engineering team at Alterra where I work on a wide variety of
                interesting and meaningful projects on a daily basis. <br />
                <br />
                Here’s few technologies I’ve been working with recently :
              </p>
            </div>
            <div>
              <table className="tabel-anne">
                <tr>
                  <td>HTML & CSS</td>
                  <td>Serverless</td>
                  <td>Scrum</td>
                </tr>
                <tr>
                  <td>Programming</td>
                  <td>Restful API</td>
                  <td>Test-Driven Dev</td>
                </tr>
                <tr>
                  <td>Database</td>
                  <td>Javascript</td>
                  <td>Software Testing</td>
                </tr>
                <tr>
                  <td>Git & Github</td>
                  <td>Sigle Page App</td>
                  <td>UX/UI Designer</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
            <div className="foto-id text-lg-right text-md-center text-sm-center">
              <img src={Unsplash} alt="" />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
              <Link to="/">
                <img className="logo-bawah" src={Logo2} alt="" />
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
              <h6>Social Media:</h6>
              <Link to="https://www.facebook.com/AlterraAcademy">
                <img className="logo-sosmed" src={LogoFb} alt="" />
              </Link>
              <Link to="https://twitter.com/">
                <img className="logo-sosmed" src={LogoTwitter} alt="" />
              </Link>
              <Link to="https://www.instagram.com/alterra.academy/">
                <img className="logo-sosmed" src={LogoIg} alt="" />
              </Link>
              <Link to="https://id.linkedin.com/">
                <img className="logo-sosmed" src={LogoLinkded} alt="" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
              <h6 className="text-lg-right text-md-center text-sm-center kopi">
                Copyleft © 2019 - Unjelas Team
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;
