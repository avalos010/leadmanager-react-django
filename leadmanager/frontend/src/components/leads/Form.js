import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";
import { throws } from "assert";
export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addLead({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead Form </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
