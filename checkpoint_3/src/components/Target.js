import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const target = {
  name: "Rick",
  status: "alive",
  imgSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekHQZe8EQAQSfEEcaJP7vWjLMbGxdMzXV0U0Ygck3Cho5T2Qelg"
};

const OnePerson = ({ name, status, imgSrc }) => (
  <div>
    <Card>
      <CardImg top width="25%" src={imgSrc} alt="Card image cap" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{status}</CardSubtitle>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </div>
);

export default OnePerson;
