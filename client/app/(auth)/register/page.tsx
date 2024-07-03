"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Register(){
    const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", cpassword: "" });
    const handleRegister = () => {
        setRegisterData({ name: "", email: "", password: "", cpassword: "" })
        console.log(registerData)
    }
    return (
        <CardContent className='flex flex-col gap-5 p-0'>
            <form className='flex flex-col gap-5'>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} />
                    </div>
                </div>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
                    </div>
                </div>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Enter your password" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
                    </div>
                </div>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Confirm Password</Label>
                        <Input id="password" placeholder="Enter your password" value={registerData.cpassword} onChange={(e) => setRegisterData({ ...registerData, cpassword: e.target.value })} />
                    </div>
                </div>
            </form>
            <Button className='w-full' onClick={handleRegister}>Register</Button>
        </CardContent>
    )
}

