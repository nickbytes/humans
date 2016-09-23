import React from 'react';
import { Link } from 'react-router';
import Icon from 'react-geomicons';

const SingleUser = React.createClass({
  render() {
    const { employee } = this.props;
    return (
      <div className="mx-auto max-width-2 px2">
        <div className="mb4 md-flex items-center">
          <div className="md-col-3">
            <img className="" src={employee.display_src} alt={employee.username}/>
          </div>
          <div className="md-pl2">
            <h1 className="m0">{employee.first} {employee.last}</h1>
            <h2 className="gray italic h4 mt0">{employee.title}</h2>
          </div>
        </div>

        <div className="mb4">
          <h3>Info</h3>
          <p><Icon name="pin"/><span className="pl1">{employee.location}</span></p>
        </div>

        <div className="mb4">
          <h3 className="">Contact</h3>
          <ul className="list-reset">
            <li className="mb1"><Icon name="user" /><span className="pl2"><a href={`http://twitter.com/${employee.username}`}>Twitter</a></span></li>
            <li className="mb1"><Icon name="mail" /><span className="pl2"><a href={`mailto:${employee.username}@gmail.com`}>Email</a></span></li>
            <li className="mb1"><Icon name="chat" /><span className="pl2"><a href={`http://aim.com/${employee.username}`}>AIM</a></span></li>
          </ul>

        </div>



      </div>
    )
  }
});

export default SingleUser;
