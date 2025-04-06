"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would authenticate the user here
    router.push("/upload")
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would register the user here
    router.push("/upload")
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
            <span className="font-bold text-xl text-white">CopyrightAI</span>
          </Link>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm text-gray-400">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="text-right">
                  <Link href="#" className="text-xs text-purple-400 hover:text-purple-300">
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90">
                  Login
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="signup-email" className="text-sm text-gray-400">
                    Email
                  </label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-password" className="text-sm text-gray-400">
                    Password
                  </label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a password"
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="text-sm text-gray-400">
                    Confirm Password
                  </label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="text-purple-400 hover:text-purple-300">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </Link>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90">
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Or continue with</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </button>
            <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill="#1877F2"
                />
              </svg>
            </button>
            <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

