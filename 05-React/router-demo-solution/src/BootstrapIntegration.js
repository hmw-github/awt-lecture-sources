import React from 'react';

const BootstrapIntegration = () => {
  return (
    <div>
      <h3>React Bootstrap</h3>
      <p>Instead of using "vanilla" Bootstrap, i.e. incorporating Bootstrap's CSS classes and components directly into our React components without using additional libraries
        we are building on a library called <a href="https://react-bootstrap.netlify.app/" target="_new">React Bootstrap</a>.
      </p>
      <p>
      React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
      </p>
      <p>
        Next to <b>Container</b>s we are using a <b>Nav</b> component to render a horizontal menu (see file <b>App.js</b>).
      </p>
    </div>
  );
};

export default BootstrapIntegration;