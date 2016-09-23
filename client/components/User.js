import React from 'react';
import { Link } from 'react-router';

const User = React.createClass({
  render() {
    const { employee } = this.props;
    return (
      <div className="border-left px2 mb3">
        <Link className="text-decoration-none" to={`/${employee.username}`}>
          <h2 className="h3 black mb0">{employee.first} {employee.last}</h2>
          <h3 className="regular h4 gray italic mt0">{employee.username}</h3>
        </Link>
      </div>
    )
  }
});

export default User;
