function LoadingResults({ showMessage }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className=" h-3.5 w-3.5 animate-spin rounded-full border-4 border-gray-300 border-t-primary-600"></div>
      {showMessage && <p className="text-lg font-semibold">Loading content</p>}
    </div>
  );
}

export default LoadingResults;
