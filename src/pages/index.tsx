import React from 'react';
import CustomImage from '../components/CustomImage';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div>
      <div className="min-h-screen w-screen max-w-[100rem] mx-auto flex flex-col">
        <Cart />
        <CustomImage />
      </div>
    </div>
  );
};

export default Home;
