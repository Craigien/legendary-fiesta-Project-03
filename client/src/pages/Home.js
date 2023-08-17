import React from 'react';

// Display welcome message along with dealership image on homepage
const Home = () => {
  
  return (
    
      <div>
       <h1 className="text-center">Welcome to C&M Dealers</h1>
       <img src={require(`../images/dealership-pic.jpg`)} style = {{display: 'block', marginLeft: 'auto' , marginRight: 'auto' , width: '100%'}} alt="dealership"/>
      </div>
    
  );
};

export default Home;