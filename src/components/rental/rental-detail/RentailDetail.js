import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class RentailDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.setState({
      isLoading: true
    });
    const rental_id = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rental_id));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: false
    });
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading..</h1>;
    } else {
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
        return <h1>Rental not found</h1>;
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data
  };
}

export default connect(mapStateToProps)(RentailDetail);
