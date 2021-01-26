import React from "react";
import { Col, Container } from "react-bootstrap";
import { useQuery } from "react-query";
// Images
import imageOne from "../assets/about/image-2.jpg";
import { useSelector } from "react-redux";
import axios from "axios";

export const Home = () => {
  // const {data, isLoading} = useQuery('profile', axios.get())

  return (
    <main className="bg-light">
      <section className="pb-5">
        <div
          className="d-flex align-items-center justify-content-center text-white text-center"
          style={{
            paddingTop: 70,
            height: "250px",
            boxShadow: "inset 0 0 0 1000px rgba(40,40,50,.4)",
            backgroundSize: "cover",
            backgroundPosition: "50% 85%",
            backgroundImage: `url(${imageOne})`,
          }}
        >
          <div>
            <h1>Welcome to My Profile</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <Container>
          <div>
            <main className="grid-container shadow-lg">
              <section className="div2 p-5">
                <div className="mb-4">
                  <h5 className="text-capitalize font-weight-bold mb-3">
                    About me
                  </h5>
                  <p className="small">
                    Hello! I’m Robert Smith. Senior Web Developer specializing
                    in front end development. Experienced with all stages of the
                    development cycle for dynamic web projects. Well-versed in
                    numerous programming languages including JavaScript, SQL,
                    and C. Stng background in project management and customer
                    relations.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="text-capitalize font-weight-bold mb-3">
                    Contact Information
                  </h5>
                  <p className="small row">
                    <Col lg={3} className="font-weight-bold text-capitalize">
                      NAME
                    </Col>
                    <Col>24058, Belgium, Brussels, Liutte 27, BE</Col>
                  </p>

                  <p className="small row">
                    <Col lg={3} className="font-weight-bold text-capitalize">
                      ADDRESS
                    </Col>
                    <Col>24058, Belgium, Brussels, Liutte 27, BE</Col>
                  </p>
                  <p className="small row">
                    <Col lg={3} className="font-weight-bold text-capitalize">
                      E-MAIL
                    </Col>
                    <Col>robertsmith@company.com</Col>
                  </p>
                  <p className="small row">
                    <Col lg={3} className="font-weight-bold text-capitalize">
                      PHONE
                    </Col>
                    <Col>+1 256 254 84 56</Col>
                  </p>
                </div>
              </section>
              <section className="div1 p-5">
                <h5 className="text-capitalize font-weight-bold mb-3">
                  Work Experience
                </h5>
                <div className="mb-4">
                  <h6 className="text-capitalize font-weight-bold mb-2">
                    PINEAPPLE
                  </h6>
                  <h6 className="text-capitalize font-weight-bold mb-2 text-black-50">
                    <span className="small">FULL STACK DEVELOPER</span>
                  </h6>
                  <h6 className="text-capitalize mb-2">
                    <small className="font-weight-bold ">2014 - 2016</small>
                  </h6>
                  <p className="small">
                    Worked as part of a multi-disciplinary team, carrying out
                    ad-hoc tasks as requested by the IT Manager. Had a specific
                    brief to ensure the websites build for customer’s precisely
                    matched their requirements.developers and marketers.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="text-capitalize font-weight-bold mb-2">
                    MACROSOOFT
                  </h6>
                  <h6 className="text-capitalize font-weight-bold mb-2 text-black-50">
                    <span className="small">WEB DEVELOPER</span>
                  </h6>
                  <h6 className="text-capitalize mb-2">
                    <small className="font-weight-bold ">2011 - 2014</small>
                  </h6>
                  <p className="small">
                    I was responsible for working on a range of projects,
                    designing appealing websites and interacting on a daily
                    basis with graphic designers, back-end developers and
                    marketers.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="text-capitalize font-weight-bold mb-2">
                    JOOJLE
                  </h6>
                  <h6 className="text-capitalize font-weight-bold mb-2 text-black-50">
                    <span className="small">
                      SYSTEMS ANALYST / WEB DEVELOPER
                    </span>
                  </h6>
                  <h6 className="text-capitalize mb-2">
                    <small className="font-weight-bold ">2003 - 2006</small>
                  </h6>
                  <p className="small">
                    Rebuilt and enhanced existing ASP B2C site with ASP.NET 2.0
                    Framework and tools. Technology consists of ASP.NET 2.0
                    (C#), IIS, Microsoft SQL Server 2005, Stored Procedures &
                    PayPal Instant Payment Notification.
                  </p>
                </div>
              </section>
              <section className="div3">
                <img
                  style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                  height="100%"
                  width="100%"
                  alt="user"
                  src="https://source.unsplash.com/random"
                />
              </section>
              <section className="div4 mt-n5 p-4 text-center d-flex flex-column align-items-center justify-content-center">
                <h1>Robert Smith</h1>
                <h3>Developer and businessman</h3>
              </section>
              <section className="div5 p-5 h-100">
                <h5 className="text-capitalize font-weight-bold mb-3">
                  Education
                </h5>
                <div className="mb-4">
                  <h6 className="text-capitalize font-weight-bold mb-2">
                    Master of Information Technology
                  </h6>

                  <h6 className="text-capitalize mb-2">
                    <small className="font-weight-bold ">2012 - 2014</small>
                  </h6>
                  <p className="small">MIT&T</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-capitalize font-weight-bold mb-2">
                    Bachelor Computer Engineering
                  </h6>

                  <h6 className="text-capitalize mb-2">
                    <small className="font-weight-bold ">2008 - 2012</small>
                  </h6>
                  <p className="small">HARWARG UNIVERSITEY</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-capitalize font-weight-bold mb-2">
                    Certificate for courses of Computer Science
                  </h6>

                  <h6 className="text-capitalize mb-2">
                    <small className="font-weight-bold ">2007 - 2008</small>
                  </h6>
                  <p className="small">STANFOORB UNIVERSITEY</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-capitalize font-weight-bold mb-2">
                    Certificate for courses of Computer Science
                  </h6>

                  <h6 className="text-capitalize mb-2">
                    <small className="font-weight-bold ">2007 - 2008</small>
                  </h6>
                  <p className="small">STANFOORB UNIVERSITEY</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-capitalize font-weight-bold mb-2">
                    Certificate for courses of Computer Science
                  </h6>

                  <h6 className="text-capitalize mb-2">
                    <small className="font-weight-bold ">2007 - 2008</small>
                  </h6>
                  <p className="small">STANFOORB UNIVERSITEY</p>
                </div>
              </section>
              <section className="div6 p-5 h-100">
                <h5 className="text-capitalize font-weight-bold mb-3">
                  Text Section
                </h5>
                <div className="mb-4">
                  <p className="small">
                    Hello! I’m Robert Smith and this is custom editor section.
                    You can add here any text or "Strikethrough" text and even
                    you can add bulleted or numbered text and even you will be
                    able to add blockquot text. You can align this text to
                    left/right/center. One of the most interesting options is to
                    divide this section to "One half" "One Third" and "One
                    Fourth". You can use this for Honors or Achievments or
                    Awards sections. You can insert images and photos right in
                    this editor!
                  </p>
                </div>
              </section>
            </main>
          </div>
        </Container>
      </section>
    </main>
  );
};
