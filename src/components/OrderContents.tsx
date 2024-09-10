import type { MenuItemT, OrderItem } from "../types";
import { formatCurrency } from "../helpers/index";

type OrderContentProps = {
  order: OrderItem[],
  removeItem: (id: MenuItemT['id']) => void
};

export default function OrderContents({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {
          order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-stretch border-t border-gray py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.qty} - {formatCurrency(item.qty * item.price)}
                </p>
              </div>
              <button 
              className="bg-red-800 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}>
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
