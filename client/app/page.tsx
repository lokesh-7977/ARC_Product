"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Login from './(auth)/login/page'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Register from './(auth)/register/page';
const page = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-gray-100'>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className='text-center'>Ecommerce</CardTitle>
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 my-5">
              <TabsTrigger value="signup">Signup</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
              <Register />
            </TabsContent>
            <TabsContent value="login">
              <Login />
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>

    </div>
  )
}

export default page