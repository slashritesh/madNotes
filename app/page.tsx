import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar />
      <div className="h-[82vh] flex flex-col items-center">
        <div className="flex-1 items-center flex flex-col">
          <p className="text-sm p-2 border px-5 rounded-full">🔵 <span className="hidden sm:inline">Madnotes in</span> Beta developemt</p>
          <h1 className="text-3xl font-bold text-center mt-20 sm:text-5xl">
            Make Notes with <br />{" "}
            <span className="text-blue-600">markdown support</span>.{" "}
          </h1>
          <p className="mt-10 md:w-[60ch] text-sm text-center"> 
            Make notes superfast with markdown and organize it with your
            acadamics highlight important topics, with your maths equations and
            also solve your programming solution at one place.
          </p>
          <Button className="mt-10 text-white hover:bg-blue-800 bg-blue-600">
            <Link href={'/admin/notes'}>Start Making Notes</Link>
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
}
