import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Question = ({ setShow }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("questions", data)
      .then((res) => {
        setShow(false);
        toast.success("Question Added Successfully!", 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h4 className="mb-4 font-weight-bold text-center">Add a Question</h4>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Control
                as="textarea"
                className="input-group-text text-left"
                placeholder="Add a Question"
                type="text"
                rows={4}
                name="statement"
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
            <small>Save Question</small>
          </Button>
        </div>
      </Form>
    </>
  );
};
