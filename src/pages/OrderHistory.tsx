
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const OrderHistory = () => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    // Fetch orders from localStorage (in a real app, this would be from an API)
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Filter orders based on active tab
  const filteredOrders = activeTab === "all" 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === activeTab);

  const orderStatusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800"
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Order History</h1>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger 
            value="all" 
            onClick={() => setActiveTab("all")}
            className="px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            All Orders
          </TabsTrigger>
          <TabsTrigger 
            value="pending" 
            onClick={() => setActiveTab("pending")}
            className="px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            Pending
          </TabsTrigger>
          <TabsTrigger 
            value="delivered" 
            onClick={() => setActiveTab("delivered")}
            className="px-6 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            Delivered
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {filteredOrders.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">No orders found</h3>
          <p className="text-gray-600 mb-6">
            You don't have any {activeTab !== "all" ? activeTab : ""} orders yet.
          </p>
          <Link to="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Browse Menu
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => {
            const orderDate = new Date(order.orderDate).toLocaleDateString();
            const orderTime = new Date(order.orderDate).toLocaleTimeString();
            const statusClass = orderStatusColors[order.status as keyof typeof orderStatusColors] || "bg-gray-100 text-gray-800";
            
            return (
              <Card key={order.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">Order #{order.id.substring(6, 14).toUpperCase()}</h3>
                      <p className="text-gray-600">Placed on {orderDate} at {orderTime}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusClass}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Items</h4>
                    <ul className="space-y-1">
                      {order.items.map((item) => (
                        <li key={item.id} className="text-sm text-gray-600">
                          {item.quantity}x {item.name} - ${(item.price * item.quantity).toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mb-2 md:mb-0">
                      <span className="font-semibold">Total:</span> ${order.total.toFixed(2)}
                    </div>
                    <div className="space-x-2">
                      <Button 
                        variant="outline" 
                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                        onClick={() => {
                          // In a real app, this would navigate to a detailed view
                          // or show a modal with full order details
                          console.log("View details for order:", order.id);
                        }}
                      >
                        View Details
                      </Button>
                      <Link to="/menu">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                          Reorder
                        </Button>
                      </Link>
                      <Link to="/track-order">
                        <Button variant="ghost" className="text-orange-500">
                          Track
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
