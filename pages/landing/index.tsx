import Link from "next/link";
import google from "@/assets/google.png";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="h-screen flex items-center justify-center bg-white pb-16">
      <div className="max-w-[600px] w-full mx-auto px-6">
      <div className="flex mx-auto w-48 h-48 bg-primary-900 rounded-full mb-10"></div>

        <div className="w-full flex flex-col items-center mb-12">
          <div className="font-semibold text-4xl pb-3">Welcome to</div>
          <div className="font-semibold text-4xl pb-4 text-primary-900">
            SuieTail 👋
          </div>
          <div className="text-primary-900 text-center mt-2">
            Tail me and I will tell you
          </div>
        </div>

        <button className="w-full bg-white text-gray-900 font-semibold py-4 border rounded-full mb-8 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <Image
              src={google}
              alt="google"
              width={24}
              height={24}
              className="mr-4"
            />
            <Link href="/home" className="text-center">
              Continue with Google
            </Link>
          </div>
        </button>
        <button className="w-full bg-primary-900 text-white font-semibold py-4 rounded-full shadow-md hover:bg-primary-100 transition duration-300 ease-in-out flex items-center justify-center">
          About Us
        </button>
      </div>
    </div>
  );
}
