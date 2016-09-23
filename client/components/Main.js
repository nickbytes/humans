import React from 'react';
import { Link } from 'react-router';



const Main = React.createClass({
  render() {
    return (
      <div>
        <div className="max-width-2 mx-auto px2">
          <div className="py4">
            <h1 className="caps small h2"><Link className="black" to="/">Humans</Link></h1>
          </div>
        </div>

        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
