"use client";
import React,{useState} from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { FaGoogle, FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/Context/AuthContext";
const SignupFormDemo = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    login();
  };
  

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
      <h2 className="font-bold text-xl text-neutral-800">Welcome to ShopHut</h2>
      <form onSubmit={handleSubmit} className="my-8" >
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          
          <input
            type="text"
            value={username}
            placeholder="Enter your email address"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          Log In &rarr;
        </button>
        <div className="text-sm pt-4">
          If you don &apos; t have an account,{" "}
          <Link href="/register" className="text-blue-400">
            SignUp
          </Link>{" "}
          here
        </div>
      </form>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const page = () => {
 

  return (
    <div className="w-full min-h-screen bg-background py-10 px-10 ">
      <Link href="/" className="flex text-xl font-Poppins font-bold pb-20 md:pb-0">
        <FaArrowAltCircleLeft className="h-10 w-10" />
        <span className="pt-1 pl-3">Go Back Home</span>
      </Link>
      <div className="flex items-center">
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default page;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};