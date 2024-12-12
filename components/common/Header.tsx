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
    <section className="bg-[#602712] flex items-center justify-between place-items-center px-4 md:px-12 shadow-md h-14 relative">
      <div className="flex gap-20">
        <Image
          src={logo1}
          alt="Logo" 
          width={33}
          height={37}
          priority 
        />

        <NavMenu />
      </div>

      <div className="hidden md:flex gap-6 pr-8 items-center">
        <Button className="bg-[#E89222] hover:bg-[#cb801e] px-8 py-7 text-[20px] font-semibold">Join now</Button>
        <Button className="font-semibold bg-transparent hover:bg-transparent text-[20px] hover:underline underline-offset-[6px] decoration-2">Login</Button>
      </div>
      <Menu color={'white'} onClick={() => {
          setActive(!active)
          console.log(active)
      }} />
        <SideBar active={active} setActive={setActive} />
    </section>
  )
}

export default Header