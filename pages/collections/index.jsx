import Image from "next/image";
import Link from "next/link";
import MotionTransition from "@/components/Motion/MotionTransition";

function CollectionsPage() {
  return (
    <MotionTransition className="flex h-full flex-col items-center justify-center gap-2">
      <Image width={156} height={51} src="/rrlogo.svg" />
      <p className="text-base">
        Collections page and custom collections functionality are in development
      </p>
      <Link
        className="rounded-sm bg-primary-700 py-1 px-1.5 text-base font-semibold"
        href="/"
      >
        Home page
      </Link>
    </MotionTransition>
  );
}

export default CollectionsPage;
