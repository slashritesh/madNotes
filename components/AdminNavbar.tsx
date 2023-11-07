import React from "react";
import { FiFeather } from "react-icons/fi";
import Link from "next/link";
import { Button } from "./ui/button";
import AvatarMenu from "./AvatarMenu";
import MobileNav from "./MobileNav";

const AdminNavbar = () => {
  return (
    <div className="flex border-b justify-between items-center">
      <div className="flex py-3 sm:py-5 gap-2 items-center">
        <FiFeather className="text-2xl" />
        <h1 className="text-lg sm:text-xl font-bold">
          Mad
          <span className="text-blue-600">Notes</span>.
        </h1>
      </div>

      <div className="hidden sm:block">
        <Button size={"sm"} variant={"ghost"}>
          <Link href={"/admin/notes"}>Notes</Link>
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          <Link href={"/admin"}>Communities</Link>
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          <Link href={"/admin"}>Pdf chat</Link>
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          <Link href={"/admin"}>Settings</Link>
        </Button>
      </div>

      <div className="sm:flex gap-5 hidden">
        <Button variant={"outline"} size={"sm"}>
          <Link href={"/"}>Log Out</Link>
        </Button>

        <AvatarMenu />
      </div>

      <div className="block sm:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default AdminNavbar;
