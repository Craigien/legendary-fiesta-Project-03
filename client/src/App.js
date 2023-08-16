import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Appointments from './pages/Appointments';
import Vehicles from './pages/Vehicles';
import Vehicle from './pages/Vehicle';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className="flex-column justify-flex-start min-100-vh"> */}
        <Header />
        <div className="container-fluid">
          <div className="row">
          {/* <div className="row align-items-start"> */}
            <aside className="col-3 mt-5">
              <Nav />
            </aside>
          {/* </div> */}
          <div className="col-6">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/appointments"
              element={<Appointments />}
            />
            <Route
              path="/categories/Truck"
              element={<Vehicles />}
            />
            <Route
              path="/categories/SUV"
              element={<Vehicles />}
            />
            <Route
              path="/categories/Hatchback"
              element={<Vehicles />}
            />
            <Route
              path="/categories/Coupe"
              element={<Vehicles />}
            />
            <Route
              path="/categories/Sedan"
              element={<Vehicles />}
            />
            <Route
              path="/categories/vehicles/:carId"
              element={<Vehicle />}
            />
            <Route
              path="contactus"
              element={<ContactUs />}
            />
          </Routes>
          </div>
          </div>
        </div>
        <Footer />
        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;