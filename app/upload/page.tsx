"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import { app } from "@/lib/firebase" // <-- adjust this to your Firebase config
import { Button } from "@/components/ui/button"
import { Upload, FileVideo } from "lucide-react"

export default function UploadPage() {
  const auth = getAuth(app)
  const router = useRouter()
  const [userInitial, setUserInitial] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const initial = user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"
        setUserInitial(initial)
      } else {
        router.push("/login")
      }
    })

    return () => unsubscribe()
  }, [auth, router])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files?.[0]?.type.startsWith("video/")) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = () => {
    if (file) {
      setLoading(true)
      setTimeout(() => {
        router.push("/processing")
      }, 1000)
    }
  }
  const handleLogout = () => {
    localStorage.removeItem("token") // Adjust this if using other storage/session method
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center border-b border-gray-800">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
            <span className="font-bold text-xl">LICTR-AI</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm hover:text-pink-400 transition-colors">Dashboard</Link>
          <Link href="#" className="text-sm hover:text-pink-400 transition-colors">History</Link>
          <Link href="/pricing" className="text-sm hover:text-pink-400 transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">{userInitial ?? "U"}</span>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="text-sm text-gray-400 hover:text-pink-400">
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Upload Your Video</h1>

          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center ${
              isDragging
                ? "border-purple-500 bg-purple-500/10"
                : "border-gray-700 hover:border-purple-500/50 hover:bg-gray-900/50"
            } transition-all cursor-pointer`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleUploadClick}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="video/*"
              className="hidden"
            />

            {file ? (
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                  <FileVideo className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <p className="text-lg font-medium mb-1">{file.name}</p>
                  <p className="text-sm text-gray-400">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Upload className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <p className="text-lg font-medium mb-1">Drag and drop your video here</p>
                  <p className="text-sm text-gray-400">or click to browse your files</p>
                </div>
                <div className="text-xs text-gray-500">
                  Supported formats: MP4, MOV, AVI, WMV (Max 500MB)
                </div>
              </div>
            )}
          </div>

          {file && (
            <div className="mt-8 text-center">
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                {loading ? "Processing..." : "Check for Copyright Issues"}
              </Button>
              <p className="mt-4 text-sm text-gray-400">
                Your video will be analyzed for potential copyright issues in audio, visuals, and text.
              </p>
            </div>
          )}

          <div className="mt-12 bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4">Why Check for Copyright?</h2>
            <ul className="space-y-3">
              {[
                "Avoid content takedowns and channel strikes",
                "Prevent demonetization of your content",
                "Protect yourself from legal issues and copyright claims",
              ].map((reason, idx) => (
                <li className="flex items-start gap-3" key={idx}>
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
              <span className="font-bold">LICTR-AI</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} LICTR-AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
