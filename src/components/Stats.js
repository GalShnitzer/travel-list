export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="flex items-center justify-center py-4 px-6 sm:py-6 sm:px-8 bg-teal-500">
        <em className="text-base font-semibold text-yellow-950 text-center">
          Start adding some items to your packing list 🚀
        </em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="flex items-center justify-center py-4 px-6 sm:py-6 sm:px-8 bg-teal-500">
      <em className="text-base font-semibold text-yellow-950 text-center">
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and 
        you already packed ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}
