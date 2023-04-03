import { MotionRevealDiv } from "../Motion/MotionReveal";

function LoadingSpinner() {
  return (
    <MotionRevealDiv
      duration="0.3"
      className="my-3 mx-auto h-3.5 w-3.5 animate-spin rounded-full border-4 border-gray-300 border-t-primary-600"
    />
  );
}

export default LoadingSpinner;
