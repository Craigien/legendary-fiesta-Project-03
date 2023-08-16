import React from 'react';

const Home = () => {
  
  return (
    <main>
      <div>
       <h1 className="text-center">Welcome to C&M Dealers</h1>
       <img src={require(`../images/dealership-pic.jpg`)} style = {{display: 'block', marginLeft: 'auto' , marginRight: 'auto' , width: '100%'}} alt="dealership"/>
      </div>
    </main>
  );
};

export default Home;