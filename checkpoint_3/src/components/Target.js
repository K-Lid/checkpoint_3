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

const OnePerson = ({ name, status, picture, statuschange }) => (
  <div>
    <Card>
      <CardImg top width="25%" src={picture} alt="Card image cap" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{status}</CardSubtitle>
        <Button onClick={statuschange}>Button</Button>
      </CardBody>
    </Card>
  </div>
);

export default OnePerson;
