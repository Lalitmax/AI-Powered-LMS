
"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

function LoginPage() {
    return (
        <Card className="h-[24rem] w-[28rem] p-5">
            <form className="flex flex-col gap-4">
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
                    Not registered?<a className="ml-1 text-blue-700 hover:underline dark:text-blue-500" href="/signup/">
                        Create an account.</a>
                </div>
            </form>
        </Card>
    );
}

export default LoginPage;
