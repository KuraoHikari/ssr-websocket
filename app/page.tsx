import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
 return (
  <div>
   <UserButton afterSignOutUrl="/" />
   <ThemeToggle />
  </div>
 );
}
