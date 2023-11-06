import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "./ui/ThemeTogglebtn";
import Link from "next/link";
import { Button } from "./ui/button";
import { FiFeather, FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="py-5 flex justify-between items-center">
      <div className="flex  gap-2 items-center">
        <FiFeather className="text-2xl" />
        <h1 className="text-xl font-bold">
          Mad
          <span className="text-blue-600">Notes</span>.
        </h1>
      </div>

      <Sheet>
        <SheetTrigger className="sm:hidden">
          <FiMenu className='text-2xl' />
        </SheetTrigger>
        <SheetContent>
          <div className="h-[85vh] py-10 flex flex-col items-center">
            <h3 className="p-2 hover:bg-background">Home</h3>
            <h3 className="p-2 hover:bg-background">Notes</h3>
            <h3 className="p-2 hover:bg-background">Pricing</h3>
          </div>
          <div className="flex justify-end">
          <ModeToggle />
          <Button size={'sm'} variant={'ghost'}>
            <Link href={'/signin'}>Sign in
            </Link>
          </Button>
          <Button size={'sm'} variant={'ghost'}>
            <Link href={'/login'}>Log in
            </Link>
          </Button>
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden sm:flex items-center gap-5 ">
        <ModeToggle />
        <Button className="" variant={"outline"} size={"sm"}>
          <Link href={'/login'}>Log In</Link>
        </Button>
        <Button size={"sm"}>
          <Link href={"/notes"}>Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
