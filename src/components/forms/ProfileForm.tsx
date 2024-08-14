"use client"
 
import { EditUserProfileSchema } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
 
const ProfileForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
          name: "",
          email: "",
        },
    })

    
    return (
        <Form {...form}>
            <form 
            className="space-y-4 max-w-md"
            onSubmit={() => {}}
            >
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name='name'
                    
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Full name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name='email'
                    
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="email"
                                    type="email"
                                    disabled
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" 
                className="hover-button">

                    {isLoading ? (
                        <>
                            <Loader2  className="mr-2 h-4 w-4 animate-spin" />
                        </>
                    ) : (
                        'Save User Settings'
                    )}
                </Button>
            </form>
        </Form>
  )
}

export default ProfileForm