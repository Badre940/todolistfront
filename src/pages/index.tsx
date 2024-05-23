import React from 'react';
import NavBar from './NavBar';
import Todo from './Todo';

const HomePage = () => {
  return (
    <div className="bodyBackground min-h-screen">
     <NavBar />
      <main>
        <Todo />
      </main>
    </div>
  );
};

export default HomePage;
