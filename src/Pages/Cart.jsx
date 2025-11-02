import React from "react";
import { Link } from "react-router-dom";
import Emptycart from "../assets/empty-cart-yellow.png"

const Cart = ({ cart, handleRemoveFromCart, AddQuantity, SubQuantity }) => {
  // increments the price based on the quantity
  const totalPrice = cart.reduce((x, y) => x + y.price * y.quantity, 0);


  const discountedTotal = totalPrice * 0.9; 

  // total items (sum of quantities)
  const totalItems = cart.reduce((acc,item)=> acc + item.quantity,0 )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-28 px-4 md:px-12 pb-10 flex flex-col lg:flex-row gap-8">
    
      <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center gap-2">
          <i className="fa-solid fa-cart-shopping text-yellow-500"></i>
          Your Shopping Cart
        </h2>

       {cart.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-20 text-center">
  
    <img
      src= {Emptycart}
      alt="Empty cart"
      className=" mb-4 opacity-70"
    />

    <Link
      to="/"
      className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition shadow"
    >
      Continue Shopping
    </Link>
  </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 py-6 hover:bg-gray-50 transition rounded-lg"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-36 h-36 object-contain mx-auto sm:mx-0 drop-shadow-sm"
                />

                {/* Product Details */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="text-red-600 hover:text-red-700 font-medium text-sm"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => SubQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border border-gray-300 rounded-md bg-gray-50 text-gray-800 font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => AddQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 💳 Right Section - Order Summary */}
      {cart.length > 0 && (
        <div className="lg:w-1/3 bg-white rounded-2xl shadow-lg border border-gray-200 h-fit p-6 sticky top-28 self-start">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Order Summary
          </h3>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-700">
              <span>Items:</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span className="font-bold text-lg text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Discount (10%):</span>
              <span className="text-green-600 font-medium">
                -${(totalPrice * 0.1).toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Delivery:</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-xl font-semibold text-gray-800 mb-6">
              <span>Total:</span>
              <span>${discountedTotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition-all shadow-md">
              Proceed to Checkout
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              Secure transaction powered by Amazon
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

