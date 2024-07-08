import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { FaGoogle,FaArrowAltCircleLeft } from "react-icons/fa";
export function SignupFormDemo() {
    //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("Form submitted");
    //   };
      return (
        <div className=" w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
          <h2 className="font-bold text-xl text-neutral-800">
            Checkout
          </h2>
          
    
          <form className="my-8">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Address</Label>
              <Input id="email" placeholder="Kolkata,West bengal" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="text">PostalCode</Label>
              <Input id="password" placeholder="712109" type="text" />
            </LabelInputContainer>
            
    
            
            
              
           
          </form>
        </div>
      );
    }
    const BottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          </>
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