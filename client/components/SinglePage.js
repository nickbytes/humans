import React from 'react';
import SingleUser from './SingleUser';

const SinglePage = React.createClass({
  render() {
    const { username } = this.props.params;

    const i = this.props.employees.findIndex((employee) => employee.username === username);
    const employee = this.props.employees[i];

    return (
      <div className="">
        <SingleUser i={i} employee={employee} {...this.props} />
      </div>
    )
  }
});

export default SinglePage;
