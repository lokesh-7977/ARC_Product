// Import necessary modules
import React from "react";
import { SignupFormDemo } from "@/app/(auth)/register/_components/Signupfordemo";
import {cn} from "@/utils/cn";
import { FaGoogle, FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

// Define SignupFormDemo component


// Define LabelInputContainer component
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

// Define page component
const Page = () => {
  return (
    <div className="w-full min-h-screen bg-background py-10 px-10 ">
      <Link href="/" className="flex text-xl font-Poppins font-bold">
        <FaArrowAltCircleLeft className="h-10 w-10" />
        <span className="pt-1 pl-3">Go Back Home</span>
      </Link>
      <div className="flex items-center">
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default Page;

// Define BottomGradient component

