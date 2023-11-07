import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";


const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
            <FiMenu className='text-lg' />
        </SheetTrigger>
        <SheetContent className="pt-10 shadow-none">
            <Link href={'/admin/notes'}>
                <Button size={'sm'} className="w-full text-sm" variant={'ghost'}>Notes</Button>
                <Separator />
            </Link>
            <Link href={''}>
                <Button size={'sm'} className="w-full text-sm" variant={'ghost'}>Communities</Button>
                <Separator />
            </Link>
            <Link href={''}>
                <Button size={'sm'} className="w-full text-sm" variant={'ghost'}>Pdf Chat</Button>
                <Separator />
            </Link>
            <Link href={''}>
                <Button size={'sm'} className="w-full text-sm" variant={'ghost'}>Setting</Button>
                <Separator />
            </Link>
            <Link href={''}>
                <Button size={'sm'} className="w-full text-sm" variant={'ghost'}>Profile</Button>
            </Link>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
