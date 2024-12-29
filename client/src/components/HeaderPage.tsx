"use client";
import Image from "next/image";
import { Button, Avatar, Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useDynamicPathname } from "@/hooks";

export function Header() {
  const [userLogged, setUserLogged] = useState(false);
  const { pathname, updatePathname } = useDynamicPathname();
  const [currentRout, setCurrentPathName] = useState('');
  const router = useRouter();

  function handleLoginPage() {
    // setUserLogged(true)
    router.push('/login');
  };

  useEffect(() => {
    console.log('courses ciked', pathname)
    setCurrentPathName(pathname);
  }, [pathname])



  return (

    <Navbar fluid className="fixed w-screen border-b bg-customColor z-10">
      <Navbar.Brand href="/">
        <div className="relative mr-3 h-6 sm:h-9 w-6 sm:w-9" >
          <Image
            src="https://flowbite-react.com/favicon.svg"
            alt="Flowbite Logo"
            fill
            className="object-contain"

          />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Learn
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 mr-4 gap-1">
        {userLogged ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                className="mr-1"
              />
            }
          >
            <Dropdown.Header >
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setUserLogged(false)}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (

          <Button
            onClick={handleLoginPage}
            color="blue"
          >
            Login
          </Button>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="mr-2">
        <Navbar.Link href="/" active={currentRout === "/"} className={`text-lg ${currentRout === '/courses' ? "text-blue-500" : ""}`}>
          Home
        </Navbar.Link>
        <Navbar.Link active={currentRout === "/courses" || currentRout.includes("/courses/subject")} className={`text-lg ${currentRout === '/courses' ? "text-blue-500" : ""}`} href="/courses">Courses</Navbar.Link>
        <Navbar.Link active={currentRout === "/roadmap"} className={`text-lg ${currentRout === '/courses' ? "text-blue-500" : ""}`} href="/roadmap">Roadmap</Navbar.Link>
        <Navbar.Link active={currentRout === "/roadmap"} className={`text-lg ${currentRout === '/courses' ? "text-blue-500" : ""}`} href="/roadmap">DSA Sheets</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}
