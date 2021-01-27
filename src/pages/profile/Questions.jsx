import React, { useState } from "react";
import { Col, Form, Row, Table, Button } from "react-bootstrap";
import { SideBar } from "../../components/SideBar";
import axios from "axios";
import { useQuery } from "react-query";

export const Questions = () => {
  const [answers, setAnswers] = useState([]);
  const getQuestions = () => {
    return axios
      .get("questions/")
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => console.log(err));
  };

  const { data, isLoading } = useQuery("questions", getQuestions);

  const handleChange = (e, id) => {
    // console.log(e.target.value, id);
    const statement = e.target.value;
    const array = [];
    const data = { statement, id };

    setAnswers((currentData) => {
      return { data, ...currentData }; // <<< spread inside an object
    });
  };

  return (
    <section className="pt-5 d-flex align-items-center my-5">
      {console.log(answers)}
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
                      {data.map((value) => (
                        <tr key={value._id}>
                          <td className="text-center font-weight-bold">0</td>
                          <td className="small">
                            <b className="mr-1">{value.statement}</b>
                            {/* <i>{value.subtitle}</i> */}
                          </td>
                          <td className="small w-50">
                            <Form.Control
                              as="textarea"
                              className="input-group-text text-left"
                              placeholder="Type a Answer"
                              type="text"
                              rows={1}
                              onChange={(e) => handleChange(e, value._id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </Table>
              </div>

              <div className="col col-md-6 col-lg-4 mt-2 mx-auto px-0 ">
                <Button block variant="info" type="submit" className="py-4">
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
