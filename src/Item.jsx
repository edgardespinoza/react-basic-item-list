export function Item({ id, title, completed, toggleItem, deleteItem }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleItem(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteItem(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
