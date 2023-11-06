
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

const Login = () => {
  return (
    <>
    
    <div className="flex h-[82vh] justify-center items-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold">Login To Your Account</CardHeader>
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
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default Login;
