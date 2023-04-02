function TopLoadingBar() {
  return (
    <div className="fixed left-[0px] top-[0px] z-50 h-0.5 w-full">
      <div className="absolute h-full w-full bg-gray-500" />
      <div className="absolute h-full w-5 animate-bar bg-primary-500"></div>
    </div>
  );
}

export default TopLoadingBar;
