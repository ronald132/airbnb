import React, { Component } from "react";
import RentalCard from "./RentalCard";
import { connect } from "react-redux";
import * as actions from "actions";

class RentalList extends Component {
  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      return (
        <RentalCard key={index} colNum="col-md-3 col-xs-6" rental={rental} />
      );
    });
  }

  addRental = () => {
    const rentals = this.state.rentals;
    rentals.push(1);
    this.setState({
      rentals
    });
  };

  componentWillMount() {
    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">{this.renderRentals()}</div>
        <button onClick={this.addRental}>Add Rental!</button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  };
}

export default connect(mapStateToProps)(RentalList);
