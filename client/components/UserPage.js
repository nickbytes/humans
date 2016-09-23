import React from 'react';
import User from './User';

const UserPage = React.createClass({
  render() {
    return (
      <div className="mx-auto max-width-2">
        {this.props.employees.map((employee, i) => <User {...this.props} key={i} i={i} employee={employee} />)}
      </div>
    )
  }
});

export default UserPage;
