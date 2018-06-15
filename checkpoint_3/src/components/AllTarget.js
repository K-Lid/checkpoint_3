import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import ListTargets from "./ListTargets";

class AllTargets extends Component {
  constructor() {
    super();
    this.state = {
      targets: [
        {
          id: 1,
          name: "Rick",
          status: "alive",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekHQZe8EQAQSfEEcaJP7vWjLMbGxdMzXV0U0Ygck3Cho5T2Qelg"
        },
        {
          id: 2,
          name: "Morty",
          status: "alive",
          picture:
            "http://orig15.deviantart.net/33df/f/2015/301/6/9/morty_by_doctorworm1987-d9eqtyy.png"
        },
        {
          id: 3,
          name: "Squanchy",
          status: "Death",
          picture:
            "http://reasonish.com/wp-content/uploads/2017/09/squanchy-300x300.jpg"
        },
        {
          id: 4,
          name: "Jerry",
          status: "alive",
          picture: "http://i.imgur.com/RlUWwil.jpg"
        }
      ]
    };
    this.ChangeStatus = this.ChangeStatus.bind(this);
  }
  ChangeStatus() {
    console.log(this.state.status);
    this.setState({ status: "Dead" });
  }

  render() {
    return (
      <Container>
        <ListTargets
          targets={this.state.targets}
          statuschange={this.ChangeStatus}
        />
        <Button />
      </Container>
    );
  }
}

export default AllTargets;
