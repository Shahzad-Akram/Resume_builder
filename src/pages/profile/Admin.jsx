import React, { useState } from "react";
import { Col, Form, Row, Table, Button, Modal } from "react-bootstrap";
import { Question } from "../../components/Question";
import { SideBar } from "../../components/SideBar";
import axios from "axios";
import { useQuery } from "react-query";
import {
  faPlusCircle,
  faRadiationAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Admin = () => {
  const [show, setShow] = useState(false);

  const getQuestions = () => {
    return axios
      .get("questions/")
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => console.log(err));
  };
  const { data, isLoading } = useQuery("questions", getQuestions);
  console.log(data);

  const handleDelete = (id) => {
    axios
      .delete(`questions/${id}`)
      .then((res) => toast.success("deleted Successfully!", 1000))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal
        size="lg"
        centered
        scrollable
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Body className="p-4">
          <Question setShow={setShow} />
        </Modal.Body>
      </Modal>
      <section className="pt-5 d-flex align-items-center my-5">
        <Row className="w-100 mx-0 px-lg-5">
          <Col lg={2} className="mb-4 mb-lg-0">
            <SideBar />
          </Col>
          <Col>
            <div className="shadow-sm border p-4 rounded-lg">
              <div className="row mx-0 align-items-center justify-content-between mb-2">
                <h4 className="mb-0">Questions Section</h4>
                <Button variant="link" onClick={() => setShow(true)}>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </Button>
              </div>
              <Form>
                <div>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th className="bg-info text-white text-center">#</th>
                        <th className="bg-info text-white">Questions</th>
                        <th className="bg-info text-white text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <>loading ...</>
                      ) : data === "No data found" ? (
                        <p>No Questions found</p>
                      ) : (
                        data.map((value) => (
                          <tr>
                            <td className="text-center font-weight-bold">
                              {value.number}
                            </td>
                            <td className="small">
                              <b className="mr-1">{value.statement}</b>
                              {/* <i>{value.subtitle}</i> */}
                            </td>
                            <td
                              className="small text-center"
                              style={{ width: "10%" }}
                            >
                              <Button
                                onClick={() => handleDelete(value._id)}
                                variant="link"
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </div>

                {/* <div className="col col-md-6 col-lg-4 mt-2 mx-auto px-0 ">
                  <Button block variant="info" type="submit" className="py-4">
                    Save
                  </Button>
                </div> */}
              </Form>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
