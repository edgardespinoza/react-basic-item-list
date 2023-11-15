import { Item } from "./Item";

export function ItemList({ items, toggleItem, deleteItem }) {
  return (
    <ul className="list">
      {items.length === 0 && "No Items"}
      {items.map((item) => {
        return (
          <Item
            {...item}
            key={item.id}
            toggleItem={toggleItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
}
