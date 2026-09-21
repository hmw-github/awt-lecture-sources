import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Details = () => {
  return (
    <div className="content m-3">
      <h2>Details</h2>
      <p>
        We integrated <a href="https://getbootstrap.com/" target="_new">Bootstrap</a> to style this little application. Follow the link below to learn how this can be done.
      </p>
      <p>
        Now we can have a close look at how routes can be defined. The second link below is an example of a nested route.
      </p>
      <nav>
        <ul>
          <li><Link to="bootstrap">Bootstrap Integration</Link></li>
          <li><Link to="routes">Defining Routes</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Details;