import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Home from './Home';
import Details from './Details';
import Contact from './Contact';
import BootstrapIntegration from './BootstrapIntegration';
import DefineRoutes from './DefineRoutes';
import './App.css';

const App = () => {
  return (
    <Router>
      <Container className="m-3">
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" exact="true">
                Overview
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/details">
              Details
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  as={NavLink} to="/contact">
                Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />}>
          <Route path="bootstrap" element={<BootstrapIntegration />} />
          <Route path="routes" element={<DefineRoutes />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;