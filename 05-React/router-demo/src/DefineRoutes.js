import React from 'react';

const DefineRoutes = () => {
  return (
    <div>
      <h3>How to define routes for your app</h3>
      <p>
        Have a look at file <b>App.js</b>.<br />
      </p>
      <ul>
          <li>
            <b>App</b> returns a <b>Router</b> element which uses <b>Routes</b> to define a paths and an associated component for every route. Whenever the browser URL matches a defined path the associated component is rendered.
          </li>
          <li>
            Since the path "/" is activated by default (see defaultActiveKey property), the component <b>Home</b> is automatically rendered on application startup.
          </li>
          <li>
            Note that routes can also be nested - see the route definitions for path "/details".
          </li>
          <li>
            When activating a nested route, using the <b>Outlet</b> component allows you to place the outcome of the nested route on your existing page (see component <b>Details</b>).
          </li>
        </ul>

    </div>
  );
};

export default DefineRoutes;