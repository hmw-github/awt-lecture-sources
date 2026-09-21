import React from 'react';

const Home = () => {
  return (
    <div className="content m-3">
      <h2>Using Routes in React</h2>
      <p>
      Routing in React allows you to create a multi-page application that dynamically renders different components based on the URL path without calling the server (so-called <i>client side routing</i>). The most common library for routing in React is react-router-dom. 
      </p>
      <p>
      Install using:
      <code className="m-2">npm install react-router-dom</code>
      </p>
      <p>
        Try it out yourself by adding <code>/details</code> to the url in the browser.
        <br />
        <b>Or use the menu</b> above to navigate to another page.
      </p>
    </div>
  );
};

export default Home;