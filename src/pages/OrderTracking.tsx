
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type OrderStatus = "pending" | "confirmed" | "delivered" | "cancelled";

const statusLabel: { [key in OrderStatus]: string } = {
  pending: "Pending",
  confirmed: "Confirmed",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

const statusColor: { [key in OrderStatus]: string } = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setOrder(null);
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const found = orders.find((o: any) => o.id.replace("order_", "").toUpperCase() === orderId.trim().toUpperCase());
    if (!found) {
      setError("Order not found. Double check your Order ID.");
    } else {
      setOrder(found);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Track Your Order</h1>
      <Card className="p-6 max-w-lg mx-auto">
        <form onSubmit={handleTrack} className="flex flex-col gap-4 mb-4">
          <label htmlFor="orderId" className="font-medium">Enter Order ID:</label>
          <Input
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g. 1A2B3C4D"
            required
          />
          <Button type="submit" className="bg-orange-500 text-white hover:bg-orange-600">
            Track Order
          </Button>
        </form>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        {order && (
          <div>
            <h2 className="font-semibold mb-1">Order #{order.id.substring(6, 14).toUpperCase()}</h2>
            <div className="mb-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[order.status as OrderStatus]}`}>
                {statusLabel[order.status as OrderStatus]}
              </span>
            </div>
            <div className="mb-1">Placed: {new Date(order.orderDate).toLocaleString()}</div>
            <div className="mb-1"><span className="font-medium">Items:</span>
              <ul className="pl-4 list-disc">
                {order.items.map((item: any) => (
                  <li key={item.id}>{item.name} x{item.quantity}</li>
                ))}
              </ul>
            </div>
            <div className="mb-1"><span className="font-medium">Delivery Address:</span> {order.customer.address}, {order.customer.city} {order.customer.zipCode}</div>
            <div>
              <span className="font-medium">Total: </span>₹{order.total.toFixed(2)}
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <span>If you have questions, contact us at <b>contact@tastybites.com</b></span>
            </div>
          </div>
        )}
      </Card>
      <div className="mt-8 text-gray-500 text-sm max-w-lg mx-auto">
        <b>Tip:</b> Your Order ID can be found on the order confirmation page and your order history.
      </div>
    </div>
  );
};

export default OrderTracking;