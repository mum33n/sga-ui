"use client"

import React, {useState} from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    surname: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(0, {
        message: "Username must be at least 2 characters.",
    }),
    phoneNumber: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
})

const AdmProfile = () => {
    const [active, setActive] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "Olagunju",
        surname: "Michael",
        email: "Oreoluwa@gmail.com",
        phoneNumber: "81 4008 2281"
    })

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            surname: "",
            email: "",
            phoneNumber: "",
        },
    })

    const { reset } = form;

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setFormData((prev) => ({
            ...prev, // Keep existing data if needed
            ...values, // Spread validated form values into state
            email: prev.email
        }));

        reset({
            firstName: "",
            surname: "",
            phoneNumber: "",
            email: "Oreoluwa@gmail.com" // Preserve default email
        });
    }

    return (
        <>
            <section className="px-5 mb-8 md:w-[516px]">
                <p className="text-xl font-medium text-[#602712] mb-5">Profile</p>
                <div className="flex gap-3.5 items-center mb-8">
                    <Image
                        src='/nft3.jpeg'
                        alt={`Profile picture of ${formData.firstName} ${formData.surname}`}
                        width={114}
                        height={114}
                        className="w-28 h-28 rounded-[37px] object-cover"
                    />
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[#602712] font-semibold text-2xl">{formData.firstName} {formData.surname}</span>
                        <span className="text-[#602712] font-normal text-base">{formData.email}</span>
                        <span className="mt-1">
                            <Button
                                onClick={() => {
                                    setActive(!active)
                                }}
                                className={`common-button text-sm font-medium ${active && "hidden"}`}>
                                Edit Profile
                            </Button>
                        </span>
                    </div>
                </div>
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#602712] text-base font-medium">First name</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={active === false}
                                                className="border-[#60271280] focus:ring-0 focus:outline-none" placeholder={formData.firstName} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="surname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#602712] text-base font-medium">Surname</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={active === false}
                                                className="border-[#60271280] focus:ring-0 focus:outline-none" placeholder={formData.surname} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#602712] text-base font-medium">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled
                                                className="border-[#60271280]"
                                                placeholder={formData.email}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#602712] text-base font-medium">
                                            Phone number
                                        </FormLabel>
                                        <FormControl>
                                            <div className="flex rounded-md overflow-hidden gap-2">
                                                {/* Country Code Selector */}
                                                <select
                                                    className="bg-[#F3F4F6] px-3 text-[#895543] font-medium text-base outline-none border border-[#60271280] rounded-lg"
                                                    defaultValue="+234"
                                                    disabled={active === false}
                                                >
                                                    <option value="+1">+1</option>
                                                    <option value="+44">+44</option>
                                                    <option value="+234">+234</option>
                                                    <option value="+91">+91</option>
                                                    {/* Add more country codes as needed */}
                                                </select>
                                                {/* Phone Number Input */}
                                                <Input
                                                    disabled={active === false}
                                                    className="flex-1 focus:ring-0 focus:outline-none placeholder:text-[#C5A798] border border-[#60271280] rounded-lg"
                                                    placeholder={formData.phoneNumber}
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="w-full flex justify-center">
                                <Button
                                    onClick={async () => {
                                        const isValid = await form.trigger(); // Validate current step
                                        if (isValid) {
                                            setActive(!active)
                                        }
                                    }}
                                    className={`bg-[#602712] text-lg font-medium ${active === false && "hidden"}`}
                                    type="submit">
                                    Save changes
                                </Button>
                            </div>
                        </form>
                    </Form>
                </>
            </section>
        </>
    )
}
export default AdmProfile
