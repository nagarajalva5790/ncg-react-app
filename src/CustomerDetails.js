import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getCustomerDetails(this.props.val);
  }

  componentDidUpdate(preProps){
    if(this.props.val !== preProps.val){
        this.getCustomerDetails(this.props.val);
    }
  }

  getCustomerDetails(id) {
    axios.get("samplejson/customer" + id + ".json").then((response) => {
      this.setState({ customerDetails: response });
    });
  }

  render() {
    if(!this.state.customerDetails) return (<p>Loading Customer Details</p>);
    return (
        <div className="Customerdetails">
            <Card>
                <Card.Header as="h3">{this.state.customerDetails.data.name}</Card.Header>
                <Card.Body>
                    <p>Name: <Card.Text>{this.state.customerDetails.data.name}</Card.Text></p>
                    <p>Email: <Card.Text>{this.state.customerDetails.data.email}</Card.Text></p>
                    <p>Phone: <Card.Text>{this.state.customerDetails.data.phone}</Card.Text></p>
                    <p>City: <Card.Text>{this.state.customerDetails.data.city}</Card.Text></p>
                    <p>State: <Card.Text>{this.state.customerDetails.data.state}</Card.Text></p>
                    <p>Country: <Card.Text>{this.state.customerDetails.data.country}</Card.Text></p>
                    <p>Organization: <Card.Text>{this.state.customerDetails.data.organization}</Card.Text></p>
                    <p>Job Profile: <Card.Text>{this.state.customerDetails.data.jobProfile}</Card.Text></p>
                    <p>Additional Info: <Card.Text>{this.state.customerDetails.data.additionalInfo}</Card.Text></p>
                </Card.Body>
            </Card>
        </div>
    )
}
}

export default CustomerDetails;
