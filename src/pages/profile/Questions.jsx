import React, { useState } from "react";
import { Col, Form, Row, Table, Button } from "react-bootstrap";
import { SideBar } from "../../components/SideBar";
import axios from "axios";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const Questions = () => {
  const [inputFields, setInputFields] = useState([]);
  const { user } = useSelector((state) => state.user);

  const getQuestions = () => {
    return axios
      .get("questions/")
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => console.log(err));
  };

  const { data, isLoading } = useQuery("questions", getQuestions);

  const handleInputChange = (index, event, id) => {
    let values = [...inputFields];
    if (values.length === 0) {
      values.push({
        statement: event.target.value,
        question: id,
      });
      setInputFields(values);
    } else if (!values.some((e) => e.question === id)) {
      values.push({
        statement: event.target.value,
        question: id,
      });
      setInputFields(values);
    } else {
      setInputFields(
        values.map((value) =>
          value.question === id
            ? { ...value, statement: event.target.value }
            : value
        )
      );
    }
  };

  const handleSave = () => {
    const data = { user: user._id, answers: inputFields };

    axios
      .post("answers/multiple", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  console.log(user);
  return (
    <section className="pt-5 d-flex align-items-center my-5">
      <Row className="w-100 mx-0 px-lg-5">
        <Col lg={2} className="mb-4 mb-lg-0">
          <SideBar />
        </Col>
        <Col>
          <div className="shadow-sm border p-4 rounded-lg">
            <h4>Questions Section</h4>
            <Form>
              <div>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th className="bg-info text-white text-center">#</th>
                      <th className="bg-info text-white">Questions</th>
                      <th className="bg-info text-white">Answer</th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <>loading ...</>
                  ) : (
                    <tbody>
                      {data.map((value, index) => (
                        <tr key={value._id}>
                          <td className="text-center font-weight-bold">0</td>
                          <td className="small">
                            <b className="mr-1">{value.statement}</b>
                            {/* <i>{value.subtitle}</i> */}
                          </td>
                          <td className="small w-50">
                            <div className="row mx-0 align-items-center">
                              <div className="col-8">
                                <Form.Control
                                  as="textarea"
                                  className="input-group-text text-left"
                                  placeholder="Type a Answer"
                                  type="text"
                                  rows={1}
                                  onChange={(e) =>
                                    handleInputChange(index, e, value._id)
                                  }
                                />
                              </div>
                              <div className="col-1">
                                <h6>or</h6>
                              </div>

                              <div className="col-3">
                                <Button
                                  block
                                  variant="outline-info"
                                  className="d-flex justify-content-center align-items-center pt-3"
                                >
                                  <div className="position-absolute">
                                    <FontAwesomeIcon icon={faUpload} />
                                    <h6>
                                      <small>Upload Video</small>
                                    </h6>
                                  </div>
                                  <input
                                    className="w-100 overflow-hidden"
                                    type="file"
                                    style={{ opacity: 0 }}
                                  />
                                </Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </Table>
              </div>

              <div className="col col-md-6 col-lg-4 mt-2 mx-auto px-0 ">
                <Button
                  block
                  variant="info"
                  onClick={handleSave}
                  className="py-4"
                >
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};
