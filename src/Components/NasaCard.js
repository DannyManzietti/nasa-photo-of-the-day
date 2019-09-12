import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Toggle from "./Toggle";

const NasaCard = props => {
  return (
    <Col>
      <Card>
        <h1>NASA Photo of the Day</h1>
        <Modal />
        <h3>{props.title}</h3>
        <CardImg
          className="img"
          src={props.hdurl}
          alt="Nasa Photo of the Day"
        />
        <Toggle explanation={props.explanation} />
        <h5>Copyright: {props.copyright}</h5>
        <CardText>{props.date}</CardText>
      </Card>
    </Col>
  );
};

export default NasaCard;
