"use client"
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export default function Login(){
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const handleSubmit = () => {
        setLoginData({ email: "", password: "" })
        console.log(loginData)
    }
    return (
        <CardContent className='flex flex-col gap-5 p-0'>
            <form className='flex flex-col gap-5'>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                    </div>
                </div>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Enter your password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                    </div>
                </div>
            </form>
            <Button className='w-full' onClick={handleSubmit}>Login</Button>
        </CardContent>
    )
}

