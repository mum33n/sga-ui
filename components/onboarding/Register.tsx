import Image from "next/image"
import logo from "@/public/logo.svg"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Register = () => {
  return (
    <section 
      className="w-full bg-cover bg-center flex justify-between px-10 py-20" 
    >
      {/* Logo Section */}
      <div className="w-1/3">
        <Image 
          src={logo} 
          alt="Logo" 
          width={128} 
          height={128} 
          priority 
        />
      </div>

      {/* Card Section */}
      <div className="flex items-center justify-center w-1/3">
        <form className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Register</h2>

          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              className="mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-1"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
            Register
          </Button>
        </form>
    </div>
    </section>
  )
}

export default Register
