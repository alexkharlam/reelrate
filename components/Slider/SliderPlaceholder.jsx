function SliderPlaceholder() {
  const placeHolderElements = [];
  for (let i = 0; i <= 4; i++) placeHolderElements.push(i);

  return (
    <ul className="scroll-hidden flex gap-2.5 overflow-x-scroll">
      {placeHolderElements.map((el) => (
        <li key={el} className="w-7.5 shrink-0 animate-pulse rounded-sm">
          <div className="mb-1.5 h-6.5 w-full rounded-sm bg-gray-700"></div>
          <div className="h-4 w-full rounded-sm bg-gray-700"></div>
        </li>
      ))}
      {/* <div className="w-7.5 shrink-0  animate-pulse rounded-sm p-2">
        <div className="mb-1.5 h-6 w-full rounded-sm bg-gray-700"></div>
        <div className="h-4 w-full rounded-sm bg-gray-700"></div>
      </div>
      <div className="w-7.5 shrink-0  animate-pulse rounded-sm p-2">
        <div className="mb-1.5 h-6 w-full rounded-sm bg-gray-700"></div>
        <div className="h-4 w-full rounded-sm bg-gray-700"></div>
      </div>
      <div className="w-7.5 shrink-0  animate-pulse rounded-sm p-2">
        <div className="mb-1.5 h-6 w-full rounded-sm bg-gray-700"></div>
        <div className="h-4 w-full rounded-sm bg-gray-700"></div>
      </div>
      <div className="w-7.5 shrink-0  animate-pulse rounded-sm p-2">
        <div className="mb-1.5 h-6 w-full rounded-sm bg-gray-700"></div>
        <div className="h-4 w-full rounded-sm bg-gray-700"></div>
      </div>
      <div className="w-7.5 shrink-0  animate-pulse rounded-sm p-2">
        <div className="mb-1.5 h-6 w-full rounded-sm bg-gray-700"></div>
        <div className="h-4 w-full rounded-sm bg-gray-700"></div>
      </div>
      <div className="w-7.5 shrink-0  animate-pulse rounded-sm p-2">
        <div className="mb-1.5 h-6 w-full rounded-sm bg-gray-700"></div>
        <div className="h-4 w-full rounded-sm bg-gray-700"></div>
      </div> */}
    </ul>
  );
}

export default SliderPlaceholder;
