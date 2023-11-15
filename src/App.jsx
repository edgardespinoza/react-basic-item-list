import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { NewItemForm } from "./NewItemForm";
import "./styles.css";
function App() {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

  function addItem(title) {
    setItems((currentItems) => {
      return [
        ...currentItems,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleItem(id, completed) {
    setItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }

        return item;
      });
    });
  }

  function deleteItem(id) {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <NewItemForm onSubmit={addItem} />
      <h1 className="header"> Items List</h1>
      <ItemList items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
    </>
  );
}

export default App;
