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

// Display page with all route options
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main>
          <div className="container-fluid">
            <div className="row">
              <aside className="col-md-3 col-sm-8 mt-5 pt-2">
                <Nav />
              </aside>
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
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;