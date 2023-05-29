import React from "react";
const Accounts = ({
  navbar: Navbar,
  addToCart,
  removeFromCart,
  handleQuantityChange,
  cartItems,
}) => {
  return (
    <div>
      <Navbar
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleQuantityChange={handleQuantityChange}
      />
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-4xl">Coming Soon</h1>
      </div>
    </div>
  );
};

export default Accounts;
