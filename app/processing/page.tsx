"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Loader2, FileVideo, Shield, CheckCircle } from "lucide-react"

export default function ProcessingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [stage, setStage] = useState(1)
  const [statusText, setStatusText] = useState("Uploading video...")

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => {
          const newProgress = prev + 1

          // Change stages based on progress
          if (newProgress === 30) {
            setStage(2)
            setStatusText("Analyzing audio content...")
          } else if (newProgress === 60) {
            setStage(3)
            setStatusText("Scanning visual elements...")
          } else if (newProgress === 85) {
            setStage(4)
            setStatusText("Checking for copyright matches...")
          } else if (newProgress === 100) {
            setTimeout(() => {
              router.push("/results")
            }, 1000)
          }

          return newProgress
        })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [progress, router])

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
<<<<<<< HEAD
              <span className="font-bold text-xl">LICTR-AI</span>
=======
              <span className="font-bold text-xl">CopyrightAI</span>
>>>>>>> e12af28f4a1023182be9e3e49db9e1316ee1f307
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-bold mb-8">Processing Your Video</h1>

          <div className="relative mb-12">
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="mt-2 text-right text-sm text-gray-400">{progress}%</div>
          </div>

          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-3 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>

            <div className="flex flex-col items-center">
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                  stage >= 1 ? "bg-gradient-to-r from-purple-600 to-pink-500" : "bg-gray-800"
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: stage === 1 ? 1.2 : 1 }}
              >
                {stage > 1 ? (
                  <CheckCircle className="h-3 w-3 text-white" />
                ) : (
                  <FileVideo className="h-3 w-3 text-white" />
                )}
              </motion.div>
              <span className="text-xs text-gray-400">Upload</span>
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                  stage >= 2 ? "bg-gradient-to-r from-purple-600 to-pink-500" : "bg-gray-800"
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: stage === 2 ? 1.2 : 1 }}
              >
                {stage > 2 ? (
                  <CheckCircle className="h-3 w-3 text-white" />
                ) : (
                  <Loader2 className="h-3 w-3 text-white" />
                )}
              </motion.div>
              <span className="text-xs text-gray-400">Audio</span>
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                  stage >= 3 ? "bg-gradient-to-r from-purple-600 to-pink-500" : "bg-gray-800"
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: stage === 3 ? 1.2 : 1 }}
              >
                {stage > 3 ? (
                  <CheckCircle className="h-3 w-3 text-white" />
                ) : (
                  <Loader2 className="h-3 w-3 text-white" />
                )}
              </motion.div>
              <span className="text-xs text-gray-400">Visual</span>
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                  stage >= 4 ? "bg-gradient-to-r from-purple-600 to-pink-500" : "bg-gray-800"
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: stage === 4 ? 1.2 : 1 }}
              >
                {stage > 4 ? <CheckCircle className="h-3 w-3 text-white" /> : <Shield className="h-3 w-3 text-white" />}
              </motion.div>
              <span className="text-xs text-gray-400">Results</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{
                rotate: stage < 4 ? 360 : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: stage < 4 ? Number.POSITIVE_INFINITY : 0,
                ease: "linear",
              }}
            >
              <Loader2 className="h-6 w-6 text-purple-400" />
            </motion.div>
            <span className="text-lg">{statusText}</span>
          </div>

          <div className="text-sm text-gray-400">
            This may take a few minutes depending on the length and complexity of your video.
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
<<<<<<< HEAD
              <span className="font-bold">LICTR-AI</span>
            </div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} LICTR-AI. All rights reserved.</div>
=======
              <span className="font-bold">CopyrightAI</span>
            </div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} CopyrightAI. All rights reserved.</div>
>>>>>>> e12af28f4a1023182be9e3e49db9e1316ee1f307
          </div>
        </div>
      </footer>
    </div>
  )
}

