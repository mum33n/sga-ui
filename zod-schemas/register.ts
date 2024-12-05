import { z } from "zod"

// Define the Zod schema
export const userZodSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Invalid phone number format. Must be 10 digits."),
})

// Export types for type safety
export type UserZodType = z.infer<typeof userZodSchema>
