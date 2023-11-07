import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <>
      <div className="flex h-[82vh] justify-center items-center">
        <Card className="w-[300px]">
          <CardHeader className="font-semibold">Create New Account</CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="">
                UserName
              </label>
              <Input type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="">
                Password
              </label>
              <Input type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="">
                Confirm Password
              </label>
              <Input type="password" />
            </div>
            <Button>
              <Link href={'/admin'}>Submit now</Link>
            </Button>
            <p className="mt-5 text-sm text-center">
              existing user ?{" "}
              <Link className="underline text-blue-600" href={"/login"}>
                login{" "}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Signin;
