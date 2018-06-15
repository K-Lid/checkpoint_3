import React from "react";
import { ListGroup } from "reactstrap";
import Target from "./Target";

const ListTargets = ({ targets, statuschange }) => (
  <ListGroup>
    {targets.map(target => (
      <Target
        key={target.id}
        {...target}
        statuschange={() => statuschange(target.status)}
      />
    ))}
  </ListGroup>
);

export default ListTargets;
