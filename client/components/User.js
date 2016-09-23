import React from 'react';
import { Link } from 'react-router';

const User = React.createClass({
  render() {
    const { employee } = this.props;
    return (
      <div className="">
        <div className="">
          <Link to={`/${employee.username}`}>
            <h1>{employee.username}</h1>
            {/*}<img src={employee.display_src} alt={employee.username} className="grid-photo" />*/}
          </Link>
        </div>
      </div>
    )
  }
});

export default User;
