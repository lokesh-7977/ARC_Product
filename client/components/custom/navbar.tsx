"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FaSearch } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaShoppingCart } from "react-icons/fa";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  return (
    <div className="flex z-50 bg-background w-full h-fit border-b-[0.5px] border-secondary_color justify-between px-10 py-4   ">
      <Link href="/" className="">
        <div className="text-2xl font-semibold font-Cinzel_Decorative text-secondary_color pt-2">
          ARC_Product
        </div>
      </Link>
      <div className="pt-2 flex justify-between gap-10 text-text_black">
        <Link href="#new" className="hover:text-secondary_color font-Poppins">
          New
        </Link>
        <Link href="/" className="hover:text-secondary_color font-Poppins">
          Featured Product
        </Link>
        <Link href="#blogs" className="hover:text-secondary_color font-Poppins">
          Blogs
        </Link>
        <Link href="/" className="hover:text-secondary_color font-Poppins">
          Offers
        </Link>
        <Link href="#about" className="hover:text-secondary_color font-Poppins">
          About Us
        </Link>
      </div>
      <div className="flex gap-5  ">
      <Link href="/">
          <button className="bg-transparent  text-black px-5 py-3 h-fit  font-Poppins align-middle  flex justify-center text-nowrap">
            <FaSearch className="w-5 h-5 mr-2 text-secondary_color" />
            Search
          </button>
        </Link>
        <Link href="/cart">
          <button className="bg-transparent  text-black px-5 py-3 h-fit  font-Poppins align-middle  flex justify-center text-nowrap">
            <FaShoppingCart className="w-5 h-5 mr-2 text-secondary_color" />
            Your Cart
          </button>
        </Link>
        
        
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
