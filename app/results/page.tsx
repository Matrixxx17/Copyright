"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, XCircle, Music, Video, FileText, Download, Edit, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

export default function ResultsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock results data
  const results = {
    status: "warning", // "safe", "warning", "blocked"
    score: 65,
    issues: [
      {
        type: "audio",
        status: "warning",
        details: "Potential match with copyrighted music at 1:24-2:15",
        confidence: 78,
      },
      {
        type: "visual",
        status: "safe",
        details: "No copyright issues detected in visual content",
        confidence: 92,
      },
      {
        type: "text",
        status: "blocked",
        details: "Protected brand logo visible at 0:45-1:02",
        confidence: 88,
      },
    ],
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />
      case "blocked":
        return <XCircle className="h-6 w-6 text-red-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "bg-green-500"
      case "warning":
        return "bg-yellow-500"
      case "blocked":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "safe":
        return "✅ Safe"
      case "warning":
        return "⚠️ Warning"
      case "blocked":
        return "❌ Blocked / Replace Required"
      default:
        return "Unknown"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "audio":
        return <Music className="h-5 w-5" />
      case "visual":
        return <Video className="h-5 w-5" />
      case "text":
        return <FileText className="h-5 w-5" />
      default:
        return null
    }
  }

  const handleFixIssues = () => {
    router.push("/pricing")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
              <span className="font-bold text-xl">CopyrightAI</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm hover:text-pink-400 transition-colors">
            Dashboard
          </Link>
          <Link href="#" className="text-sm hover:text-pink-400 transition-colors">
            History
          </Link>
          <Link href="/pricing" className="text-sm hover:text-pink-400 transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Copyright Analysis Results</h1>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </Button>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8">
            <div className="flex items-center gap-4 mb-6">
              {getStatusIcon(results.status)}
              <div>
                <h2 className="text-xl font-semibold">{getStatusText(results.status)}</h2>
                <p className="text-gray-400">
                  {results.status === "safe"
                    ? "Your video is clear of copyright issues and ready to publish."
                    : results.status === "warning"
                      ? "Your video has potential copyright issues that may affect monetization."
                      : "Your video contains copyright issues that need to be resolved."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Copyright Safety Score</span>
                  <span className="text-sm font-medium">{results.score}/100</span>
                </div>
                <Progress value={results.score} className="h-2" />
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={handleFixIssues}
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
              >
                <Edit className="h-4 w-4" />
                <span>Fix Issues Automatically</span>
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                <span>Download Safe Version</span>
              </Button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="flex border-b border-gray-800">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "overview"
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "details"
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Detailed Analysis
              </button>
            </div>

            <div className="p-6">
              {activeTab === "overview" ? (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4">Issue Summary</h3>

                  {results.issues.map((issue, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-800/50 rounded-lg">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          issue.status === "safe"
                            ? "bg-green-500/20"
                            : issue.status === "warning"
                              ? "bg-yellow-500/20"
                              : "bg-red-500/20"
                        }`}
                      >
                        {getTypeIcon(issue.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium capitalize">{issue.type} Content</h4>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              issue.status === "safe"
                                ? "bg-green-500/20 text-green-400"
                                : issue.status === "warning"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {issue.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{issue.details}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Confidence: {issue.confidence}%</span>
                          {issue.status !== "safe" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs gap-1 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                            >
                              <span>Fix Issue</span>
                              <ArrowRight className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4">Detailed Analysis</h3>

                  <div className="space-y-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <Music className="h-5 w-5 text-purple-400" />
                      <span>Audio Analysis</span>
                    </h4>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Timestamp: 1:24-2:15</span>
                          <span className="text-sm text-yellow-400">Potential Match</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          Detected similarity to "Song Title" by Artist Name (78% confidence)
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="h-7 text-xs">
                            Replace Audio
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Mute Section
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <Video className="h-5 w-5 text-purple-400" />
                      <span>Visual Analysis</span>
                    </h4>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">
                        No copyright issues detected in visual content (92% confidence)
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-400" />
                      <span>Text & Logo Analysis</span>
                    </h4>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Timestamp: 0:45-1:02</span>
                          <span className="text-sm text-red-400">Protected Content</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">
                          Detected protected brand logo "Brand Name" (88% confidence)
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="h-7 text-xs">
                            Blur Logo
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Crop Section
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Need to fix copyright issues automatically?</p>
            <Button
              onClick={() => router.push("/pricing")}
              className="px-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
            >
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
              <span className="font-bold">CopyrightAI</span>
            </div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} CopyrightAI. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

