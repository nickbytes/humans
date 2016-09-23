import React from 'react';
import { Link } from 'react-router';

const SingleUser = React.createClass({
  render() {
    const { employee } = this.props;
    return (
      <div className="mx-auto max-width-2">
        <div className="">
          <h1>{employee.title}</h1>
          <h2>{employee.username}</h2>
          {/*}<img src={employee.display_src} alt={employee.username} className="grid-photo" />*/}
        </div>
      </div>
    )
  }
});

export default SingleUser;
