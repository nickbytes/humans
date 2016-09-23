import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
  render() {
    return (
      <div>
        <div className="mx-auto max-width-2">
          <h1 className="h2">
            <Link to="/">Humans</Link>
          </h1>
        </div>

        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
