
import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    zipCode: string;
  };
  status: string;
  orderDate: string;
}

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order as Order | undefined;
  
  // If no order data is available, redirect to home
  if (!order) {
    return <Navigate to="/" replace />;
  }

  const orderDate = new Date(order.orderDate).toLocaleDateString();
  const orderTime = new Date(order.orderDate).toLocaleTimeString();
  
  // Estimate delivery time (30-45 minutes from now)
  const deliveryDate = new Date(order.orderDate);
  deliveryDate.setMinutes(deliveryDate.getMinutes() + 30);
  const estimatedDeliveryTime = deliveryDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your order. We've received your order and will begin preparing it shortly.
          </p>
        </div>

        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">Order #{order.id.substring(6, 14).toUpperCase()}</h2>
              <p className="text-gray-600">Placed on {orderDate} at {orderTime}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>

          <h3 className="font-semibold mb-2">Estimated Delivery Time</h3>
          <p className="text-gray-800 mb-4">Today, {estimatedDeliveryTime}</p>
          
          <h3 className="font-semibold mb-2">Delivery Address</h3>
          <p className="text-gray-800 mb-4">
            {order.customer.address}, {order.customer.city} {order.customer.zipCode}
          </p>
          
          <Separator className="my-4" />

          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="space-y-3 mb-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} <span className="text-gray-500">x{item.quantity}</span>
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>${order.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span>${order.deliveryFee.toFixed(2)}</span>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </Card>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            If you have any questions about your order, please contact our customer support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Link to="/menu">
              <Button variant="outline" className="border-orange-500 text-orange-500 w-full sm:w-auto">
                Order Again
              </Button>
            </Link>
            <Link to="/order-history">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                View Order History
              </Button>
            </Link>
            <Link to="/track-order">
              <Button variant="ghost" className="text-orange-500 w-full sm:w-auto">
                Track This Order
              </Button>
            </Link>
          </div>
          <div className="text-xs text-gray-400">Order ID: <b>{order.id.substring(6, 14).toUpperCase()}</b> (use for tracking)</div>
        </div>
      </div>
    </div>
  );
};
export default OrderSuccess;
