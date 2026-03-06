export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="p-1 sm:p-2 flex gap-2 justify-start">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
        className="accent-teal-500"
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="text-stone-400 hover:text-red-400 transition-colors duration-200 text-2xl font-bold leading-none"
      >
        ×
      </button>
    </li>
  );
}
