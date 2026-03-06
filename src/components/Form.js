import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="bg-amber-600 flex items-center flex-wrap justify-center gap-4 py-3 px-4"
      onSubmit={handleSubmit}
    >
      <h3 className="text-yellow-950 font-semibold text-base">
        What do you need for your 😍 trip?
      </h3>
      <div className="flex items-center justify-center gap-2">
        <select
          className="bg-yellow-50 text-yellow-950 rounded-full border border-stone-200 sm:py-2 px-4 py-1 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-amber-400 md:px-6 md:py-3"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option className="text-yellow-950" value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="bg-yellow-50 rounded-full border border-stone-200 sm:py-2 px-4 py-1 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-amber-400 md:px-6 md:py-3"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          disabled={!description}
          className="md:px-6 md:py-3 sm:py-2 px-4 py-1 text-sm inline-block rounded-full bg-teal-500  font-semibold uppercase tracking-wide text-yellow-950 transition-colors duration-300 hover:bg-teal-400 focus:bg-teal-400 focus:outline-none focus:ring focus:ring-teal-400 focus:ring-offset-1 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
    </form>
  );
}
