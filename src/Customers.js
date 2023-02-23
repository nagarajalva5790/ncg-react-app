import axios from "axios";
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomerDetails from "./CustomerDetails";

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomer: 1,
    };
  }

  componentDidMount() {
    this.getCustomerData();
  }

  getCustomerData() {
    axios.get("samplejson/customerlist.json").then((response) => {
      this.setState({ customerList: response });
    });
  }

  render() {
    if (!this.state.customerList) return <p>Loading data</p>;
    return (
      <div className="addmargin">
        <div className="col-md-3">
          {this.state.customerList.data.map((customer) => (
            <Card key={customer.name} className="text-center">
              <Card.Header as="h3">{customer.name}</Card.Header>
              <Card.Body>
                <Card.Title as="h5">{customer.email}</Card.Title>
                <Card.Text>{customer.phone}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    this.setState({ selectedCustomer: customer.id })
                  }
                >
                  Click to View Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="col-md-6">
            <CustomerDetails val={this.state.selectedCustomer}/>
        </div>
      </div>
    );
  }
}

export default Customers;
