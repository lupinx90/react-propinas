import type { MenuItemT } from "../types";

type MenuItemProps = {
  item: MenuItemT,
  addItem: (item: MenuItemT) => void
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button className="border-2 rounded border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
              onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p>{item.price}€</p>
      </button>
    </>
  );
}
