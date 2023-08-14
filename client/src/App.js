import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Vehicle from './pages/Vehicle';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className="flex-column justify-flex-start min-100-vh"> */}
        <Header />
        <div className="container">
          <div className="row align-items-start">
            <Nav />
          </div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/categories/vehicles"
              element={<Vehicles />}
            />

            <Route
              path="/categories/vehicles/carId"
              element={<Vehicle />}
            />
          </Routes>
        </div>
        <Footer />
        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;