import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button
          color="info"
          onClick={this.toggle}
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          Description
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>{this.props.explanation}</CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
