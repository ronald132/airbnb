import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class RentailDetail extends Component {
  componentWillMount() {
    const rental_id = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rental_id));
  }

  render() {
    const rental = this.props.rental;
    if (rental && rental.id) {
      return (
        <div>
          <h1>{rental.title}</h1>
          <p>{rental.city}</p>
          <p>{rental.description}</p>
          <p>{`$${rental.dailyRate}`}</p>
        </div>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data
  };
}

export default connect(mapStateToProps)(RentailDetail);
