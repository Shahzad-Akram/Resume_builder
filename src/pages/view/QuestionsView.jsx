import React from "react";
import { Col, Row } from "react-bootstrap";

// Images
import imageOne from "../../assets/about/image-2.jpg";
import { SidebarView } from "../../components/SidebarView";
import { useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";

export const QuestionsView = () => {
  const { user } = useSelector((state) => state.user);

  const getAnswers = () => {
    return axios
      .get(`answers/by_user_id/${user._id}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => console.log(err));
  };
  const { data, isLoading } = useQuery("answer", getAnswers);
  console.log(data);

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
            <h1>Welcome to My Questions</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <Row className=" w-100 mx-0 px-lg-5">
          <Col lg={3} xl={2} className="mb-4 mb-lg-0">
            <SidebarView />
          </Col>
          <Col>
            {isLoading ? (
              <>loading ...</>
            ) : (
              <div>
                <main className="row mx-0 shadow-lg">
                  <section className="col col-md-6 p-5 div1-color">
                    {data.slice(0, 5).map((value) => (
                      <div>
                        <h6 className="text-capitalize mb-2">
                          <small className="font-weight-bold ">
                            {value.question.statement}
                          </small>
                        </h6>
                        <p className="small">{value.statement}</p>
                      </div>
                    ))}
                  </section>
                  <section className="col col-md-6 p-5 div2-color">
                    {data.slice(5, 10).map((value) => (
                      <div>
                        <h6 className="text-capitalize mb-2">
                          <small className="font-weight-bold ">
                            {value.question.statement}
                          </small>
                        </h6>
                        <p className="small">{value.statement}</p>
                      </div>
                    ))}
                  </section>
                  <section className="col col-md-6 p-5 div3-color">
                    {data.slice(10, 15).map((value) => (
                      <div>
                        <h6 className="text-capitalize mb-2">
                          <small className="font-weight-bold ">
                            {value.question.statement}
                          </small>
                        </h6>
                        <p className="small">{value.statement}</p>
                      </div>
                    ))}
                  </section>
                  <section className="col col-md-6 p-5 div4-color">
                    <div>
                      <h6 className="text-capitalize mb-2">
                        <small className="font-weight-bold ">2014 - 2016</small>
                      </h6>
                      <p className="small">
                        Worked as part of a multi-disciplinary team, carrying
                        out ad-hoc tasks as requested by the IT Manager. Had a
                        specific brief to ensure the websites build for
                        customer’s precisely matched their
                        requirements.developers and marketers.
                      </p>
                    </div>
                    <div>
                      <h6 className="text-capitalize mb-2">
                        <small className="font-weight-bold ">
                          Lorem ipsum dolor sit amet.
                        </small>
                      </h6>
                      <p className="small">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellat hic facilis, magnam neque ducimus magni
                        ex quasi ratione quos error?
                      </p>
                    </div>
                    <div>
                      <h6 className="text-capitalize mb-2">
                        <small className="font-weight-bold ">2014 - 2016</small>
                      </h6>
                      <p className="small">
                        Worked as part of a multi-disciplinary team, carrying
                        out ad-hoc tasks as requested by the IT Manager. Had a
                        specific brief to ensure the websites build for
                        customer’s precisely matched their
                        requirements.developers and marketers.
                      </p>
                    </div>
                    <div>
                      <h6 className="text-capitalize mb-2">
                        <small className="font-weight-bold ">
                          Lorem ipsum dolor sit amet.
                        </small>
                      </h6>
                      <p className="small">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellat hic facilis, magnam neque ducimus magni
                        ex quasi ratione quos error?
                      </p>
                    </div>
                    <div>
                      <h6 className="text-capitalize mb-2">
                        <small className="font-weight-bold ">2014 - 2016</small>
                      </h6>
                      <p className="small">
                        Worked as part of a multi-disciplinary team, carrying
                        out ad-hoc tasks as requested by the IT Manager. Had a
                        specific brief to ensure the websites build for
                        customer’s precisely matched their
                        requirements.developers and marketers.
                      </p>
                    </div>
                  </section>
                </main>
              </div>
            )}
          </Col>
        </Row>
      </section>
    </main>
  );
};
