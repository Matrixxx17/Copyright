"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  User,
  signOut,
} from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FcGoogle } from "react-icons/fc"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/upload")
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push("/upload")
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      router.push("/upload")
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    setUser(null)
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
            <span className="font-bold text-xl text-white">LICTR-AI</span>
          </Link>

          {/* Logged in user Google Initial in Circle */}
          {user ? (
            <div
              title={user.displayName || user.email || ""}
              className="w-8 h-8 rounded-full bg-white text-black font-semibold flex items-center justify-center"
            >
              {(user.displayName || user.email || "U")[0].toUpperCase()}
            </div>
          ) : null}
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
                >
                  Login
                </Button>
              </form>
              <div className="text-center mt-4">
                <p className="text-white text-sm mb-2">or</p>
                <Button
                  onClick={handleGoogleAuth}
                  className="w-full bg-white text-black hover:bg-gray-200 flex items-center justify-center gap-2"
                >
                  <FcGoogle size={20} /> Continue with Google
                </Button>
              </div>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
                >
                  Create Account
                </Button>
              </form>
              <div className="text-center mt-4">
                <p className="text-white text-sm mb-2">or</p>
                <Button
                  onClick={handleGoogleAuth}
                  className="w-full bg-white text-black hover:bg-gray-200 flex items-center justify-center gap-2"
                >
                  <FcGoogle size={20} /> Continue with Google
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
