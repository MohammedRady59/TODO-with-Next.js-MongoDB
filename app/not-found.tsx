import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center p-5 w-full">
        <div className="text-center">
          <h2 className="mt-5 text-[36px] font-bold lg:text-[50px]">
            Page Not Found
          </h2>
          <p className="my-4 lg:text-lg">
            Oops something went wrong. <br /> Could not find requested resource
          </p>
          <Link href="/" className={`${buttonVariants({})}'mt-10'`}>
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}
