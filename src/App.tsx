import React from 'react';
import Cart from './components/Cart';
export default function App(): JSX.Element {
  return (
    <div className="min-h-screen w-screen max-w-[100rem] mx-auto flex flex-col">
      <Cart />
    </div>
  );
}
