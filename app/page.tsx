import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <div className="h-[82vh] flex flex-col items-center">
        <div className="flex-1 items-center flex flex-col">
          <h1 className="font-bold text-center mt-20 text-5xl">
            Make Notes with <br />{" "}
            <span className="text-blue-600">markdown support</span>.{" "}
          </h1>
          <p className="mt-10 w-[60ch] text-sm text-center">
            Make notes superfast with markdown and organize it with your
            acadamics highlight important topics, with your maths equations and
            also solve your programming solution at one place.
          </p>
          <Button className="mt-10 text-white hover:bg-blue-800 bg-blue-600">
            Start Making Notes
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
}
