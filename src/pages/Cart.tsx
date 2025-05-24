
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="text-orange-500 mb-4">
            <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <Card className="divide-y">
            {items.map((item) => (
              <div key={item.id} className="p-4 flex items-center">
                <div className="h-20 w-20 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{item.description.substring(0, 60)}{item.description.length > 60 ? '...' : ''}</p>
                  <p className="font-semibold text-orange-500">₹{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
                <div className="ml-4 w-20 text-right">
                  <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="ml-2 text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            ))}
          </Card>

          <div className="flex justify-between mt-4">
            <Button 
              variant="outline" 
              className="text-red-500 border-red-500 hover:bg-red-50"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            <Link to="/menu">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Add More Items
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>₹{(49.00).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>₹{(subtotal * 0.05).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{(subtotal + 49.00 + subtotal * 0.05).toFixed(2)}</span>
              </div>
            </div>
            
            <Link to="/checkout">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2">
                Proceed to Checkout
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
