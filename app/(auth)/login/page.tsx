import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex h-[82vh] justify-center items-center">
        <Card className="w-[300px]">
          <CardHeader className="font-semibold">
            Welcome Back
            <CardDescription className="font-normal">
              Login to your account
            </CardDescription>
          </CardHeader>
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
            <Button>Submit now</Button>
            <h6 className="pt-5 text-sm text-center">Don't have acoount ? <Link className="underline text-blue-600" href={'/signin'}>Signin</Link></h6>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
