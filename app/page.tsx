import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
          <span className="font-bold text-xl">CopyrightAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm hover:text-pink-400 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm hover:text-pink-400 transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="text-sm hover:text-pink-400 transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm hover:text-pink-400 transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/login"
            className="text-sm px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md hover:opacity-90 transition-opacity"
          >
            Try for free
          </Link>
        </div>
      </header>

      <main>
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Copyright Detection for Content Creators</h1>
            <p className="text-gray-400 mb-8 text-lg">
              Create freely, check easily—AI-powered copyright protection for your content
            </p>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Try for free
              </Link>
              <Link
                href="#"
                className="px-6 py-3 border border-gray-700 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-10">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-xl border border-purple-800/30">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Detection</h3>
              <p className="text-gray-400 text-sm">
                Scan your content in seconds to identify potential copyright issues before publishing.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-xl border border-purple-800/30">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Analysis</h3>
              <p className="text-gray-400 text-sm">
                Our AI analyzes audio, video, and text to find potential copyright violations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-xl border border-purple-800/30">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Auto Fix</h3>
              <p className="text-gray-400 text-sm">
                Automatically fix copyright issues with our advanced AI replacement technology.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Upload</h3>
              <p className="text-gray-400 text-sm">Upload your video or audio content to our secure platform.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Analyze</h3>
              <p className="text-gray-400 text-sm">Our AI scans your content for potential copyright issues.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Results</h3>
              <p className="text-gray-400 text-sm">Get detailed reports and fix any issues with our AI tools.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8 mt-16">
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

