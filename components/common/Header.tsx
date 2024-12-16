'use client';
import Image from "next/image"
import logo1 from "@/public/logo1.svg"
import { Button } from "../ui/button"
import {NavMenu} from "@/app/(student)/(home)/components/NavMenu";
import {SideBar} from "@/app/(student)/(home)/components/SideBar";
import {Menu} from "lucide-react";
import {useState} from "react";

const Header = () => {
    const [active, setActive] = useState(false)
  return (
    <section className="w-screen bg-[#602712] flex items-center justify-between place-items-center px-4 md:px-7 shadow-md h-14 relative">
      <div className="flex gap-10">
        <Image
          src={logo1}
          alt="Logo" 
          width={33}
          height={37}
          priority 
        />

        <NavMenu />
      </div>

      <div className="hidden md:flex gap-0 pr-8 md:pr-0 items-center">
        <Button className="bg-[#E89222] hover:bg-[#cb801e] px-4 py-4 text-base font-medium">Join now</Button>
        <Button className="font-semibold bg-transparent hover:bg-transparent text-base hover:underline underline-offset-[6px] decoration-2">Login</Button>
      </div>
      <Menu className="block md:hidden" color={'white'} onClick={() => {
          setActive(!active)
          console.log(active)
      }} />
        <SideBar active={active} setActive={setActive} />
    </section>
  )
}

export default Header