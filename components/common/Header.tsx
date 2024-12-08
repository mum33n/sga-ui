import Image from "next/image"
import logo1 from "@/public/logo1.svg"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <section className="bg-[#602712] flex items-center justify-between place-items-center px-12 py-6 shadow-md">
      <div className="flex gap-20">
        <Image
          src={logo1}
          alt="Logo" 
          width={60} 
          height={60} 
          priority 
        />

        <div className="flex text-white items-center gap-8 text-[20px] font-semibold cursor-pointer">
          <span className="hover:underline underline-offset-[6px] decoration-2">Explore</span>
          <span className="hover:underline underline-offset-[6px] decoration-2">Community</span>
          <span className="hover:underline underline-offset-[6px] decoration-2">About</span>
        </div>
      </div>

      <div className="flex gap-6 pr-8 items-center">
        <Button className="bg-[#E89222] hover:bg-[#cb801e] px-8 py-7 text-[20px] font-semibold">Join now</Button>
        <Button className="font-semibold bg-transparent hover:bg-transparent text-[20px] hover:underline underline-offset-[6px] decoration-2">Login</Button>
      </div>
    </section>
  )
}

export default Header