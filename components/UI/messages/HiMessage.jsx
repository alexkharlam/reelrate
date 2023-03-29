import Link from "next/link";

function HiMessage() {
  return (
    <div className="absolute top-[0px] left-[0px] w-full bg-background-light  py-1.5 text-center text-md text-gray-200">
      <span>Welcome to ReelRate! </span>
      <Link
        className="underline transition-colors duration-100 hover:text-gray-400"
        href="/about"
      >
        About this project
      </Link>
    </div>
  );
}

export default HiMessage;
