import React from "react";
import { ListGroup } from "reactstrap";
import Target from "./Target";

const listtargets = [
  {
    name: "Rick",
    status: "alive",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekHQZe8EQAQSfEEcaJP7vWjLMbGxdMzXV0U0Ygck3Cho5T2Qelg"
  },
  {
    name: "Morty",
    status: "alive",
    imgSrc:
      "http://orig15.deviantart.net/33df/f/2015/301/6/9/morty_by_doctorworm1987-d9eqtyy.png"
  },
  {
    name: "Squanchy",
    status: "Death",
    imgSrc:
      "http://reasonish.com/wp-content/uploads/2017/09/squanchy-300x300.jpg"
  },
  {
    name: "Jerry",
    status: "alive",
    imgSrc: "http://i.imgur.com/RlUWwil.jpg"
  }
];

const ListTargets = () => (
  <ListGroup>
    {listtargets.map((target, index) => <Target key={index} {...target} />)}
  </ListGroup>
);

export default ListTargets;
