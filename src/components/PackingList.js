import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="py-6 px-4 bg-yellow-950 flex flex-col justify-between items-center min-h-52 gap-4">
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,200px))] justify-center w-full text-yellow-50 font-semibold capitalize text-medium">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="flex items-center justify-center gap-2">
        <select
          className="bg-amber-800 text-yellow-50 rounded-full border border-amber-600 sm:py-2 px-4 py-1 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-amber-600 md:px-6 md:py-3"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={onClear}
          className="md:px-6 md:py-3 sm:py-2 px-4 py-1 text-sm inline-block rounded-full bg-transparent border border-stone-400 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-400 hover:text-yellow-950 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-1"
        >
          Clear list
        </button>
      </div>
    </div>
  );
}
