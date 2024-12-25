"use client"
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

import React, { useEffect, useState } from 'react';
const SignupPage = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <Card className="h-[29rem] w-[28rem] p-3">

            <form className="flex flex-col gap-4">

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your full name" />
                    </div>
                    <TextInput id="fullname" type="text" placeholder="Full Name" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                if Registered?<a className="ml-1 text-blue-700 hover:underline dark:text-blue-500" href="/login/">
                        Login.</a>
                </div>
            </form>
        </Card>
    );
};

export default SignupPage;
