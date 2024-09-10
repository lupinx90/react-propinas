import { useState } from "react";
import type { MenuItemT, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItemT) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        (orderItem.id === item.id) ? {...orderItem, qty: orderItem.qty + 1} : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, qty: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItemT['id']) => {
    setOrder(order.filter((orderItem)=> orderItem.id !== id));
  }

  const placeOrder = () => {
    console.log("guardando pedido...");
    setOrder([])
    setTip(0)
    
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}
