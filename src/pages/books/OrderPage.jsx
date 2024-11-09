import React from "react";
import { useGetOrdersByEmailQuery, useDeleteOrderMutation } from "../../redux/features/orders/orderApi";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const { data: orders = [], isLoading, isError } = useGetOrdersByEmailQuery(currentUser.email);
  const [deleteOrder] = useDeleteOrderMutation();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching orders</div>;

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm("Are you sure you want to remove this order?")) {
      await deleteOrder(orderId);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4 flex justify-center">See your orders</h2>
      {orders.length === 0 ? (
        <div>No orders found</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={order._id} className="border border-gray-200 p-4 mb-4">
              <p className="text-md font-semibold bg-secondary text-white rounded-sm px-2 w-28 mb-1">Order No: {index + 1}</p>
              <h3 className="text-lg font-semibold">Order ID: {order._id}</h3>
              <h4 className="text-md font-semibold">Name: {order.name}</h4>
              <h4 className="text-gray-600">Email: {order.email}</h4>
              <h4 className="text-gray-600">Phone: {order.phone}</h4>
              <div>
                <h3 className="text-md font-semibold">Delivery Address:</h3>
                <p className="text-gray-600">
                  {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}
                </p>
              </div>
              <h4 className="text-gray-600">
                Order Date & Time: {new Date(order.createdAt).toLocaleString()}
              </h4>
              <ul>
                {order.productIds.map((productId) => (
                  <li key={productId}>
                    <span className="text-gray-600">Product ID: {productId}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-gray-600">
                Payable amount: <span className="text-lg font-semibold">${order.totalPrice}</span>
              </h4>
              <button
                onClick={() => handleDeleteOrder(order._id)}
                className="bg-red-500 text-white px-3 py-1 mt-4 rounded hover:bg-red-700"
              >
                Remove Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
