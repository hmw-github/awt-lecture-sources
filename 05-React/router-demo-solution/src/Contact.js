import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="content m-3">
      <h2>Contact Page</h2>
      <p>Send any feedback to <a href="mailto:hans-michael.windisch@thi.de">me</a></p>
      <p>
        {/* for user interaction */} 
        <Link to="/">
          <button className='btn btn-success'>go home (on user interaction)</button>
        </Link>
      </p>
      <p>
        {/* whithout user interaction, e.g. after a server result returns */} 
        <button className='btn btn-warning' onClick={navigateHome}>navigate home (after return from server)</button>
      </p>
    </div>
  );
};

export default Contact;