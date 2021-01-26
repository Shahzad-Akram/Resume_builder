import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Education = ({ setShow, id }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const data2 = { id, education: [data] };
    axios
      .post("users/update", data2)
      .then((res) => {
        toast.success("Education Added Successfully", 1000);
        setShow(false);
      })
      .catch((err) => {
        toast.error("Something Went Wrong!", 1000);
        setShow(false);
      });
  };
  return (
    <>
      <h4 className="mb-4 font-weight-bold text-center">Education</h4>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <small className="font-weight-bold">School</small>
              </Form.Label>
              <Form.Control
                className="input-group-text text-left"
                type="text"
                placeholder="School"
                name="school"
                ref={register({ required: true })}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <small className="font-weight-bold">Degree</small>
              </Form.Label>
              <Form.Control
                className="input-group-text text-left"
                type="text"
                placeholder="Degree"
                name="degree"
                ref={register({ required: true })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Label>
              <small className="font-weight-bold">Start Date</small>
            </Form.Label>
            <Form.Group>
              <Form.Control
                className="input-group-text text-left"
                type="date"
                name="start_date"
                ref={register({ required: true })}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Label>
              <small className="font-weight-bold">End Date</small>
            </Form.Label>
            <Form.Group>
              <Form.Control
                className="input-group-text text-left"
                type="date"
                name="end_date"
                ref={register({ required: true })}
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Label>
              <small className="font-weight-bold">Question</small>
            </Form.Label>
            <Form.Group>
              <Form.Control
                as="textarea"
                className="input-group-text text-left"
                placeholder="Why did you choose to study this degree/course/certificate? (In 60 seconds or 150 words or less)"
                type="text"
                rows={4}
                name="q1_answer"
                ref={register({ required: true })}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-3">
          <Button
            variant="info"
            block
            type="submit"
            className="text-capitalize py-3"
          >
            <small>Save Education</small>
          </Button>
        </div>
      </Form>
    </>
  );
};
