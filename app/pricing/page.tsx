import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
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

      <main className="container mx-auto py-12 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Pricing Plan</h1>
          <p className="text-gray-400 text-lg">We make it simple, faster, and less expensive</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex flex-col">
            <div className="p-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40">
              <h2 className="text-xl font-bold mb-1">Basic</h2>
              <p className="text-gray-400 text-sm mb-4">For individual creators</p>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-3xl font-bold">$9</span>
                <span className="text-gray-400 mb-1">/month</span>
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-200">Get Started</Button>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">10 video scans per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Basic copyright detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Videos up to 10 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Email support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-purple-500 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60">
              <h2 className="text-xl font-bold mb-1">Pro</h2>
              <p className="text-gray-400 text-sm mb-4">For professional creators</p>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-3xl font-bold">$29</span>
                <span className="text-gray-400 mb-1">/month</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90">
                Get Started
              </Button>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">50 video scans per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Advanced copyright detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Videos up to 30 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Automatic issue fixing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Priority support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex flex-col">
            <div className="p-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40">
              <h2 className="text-xl font-bold mb-1">Enterprise</h2>
              <p className="text-gray-400 text-sm mb-4">For teams and businesses</p>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-3xl font-bold">$99</span>
                <span className="text-gray-400 mb-1">/month</span>
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-200">Contact Sales</Button>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Unlimited video scans</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Premium copyright detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Videos up to 4 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Advanced AI fixing tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">API access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gray-900 rounded-xl p-8 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-3">Need a custom solution?</h2>
              <p className="text-gray-400 mb-4">
                We offer tailored solutions for large enterprises and content networks with specific requirements.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90">
                Contact Our Sales Team
              </Button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-3">How accurate is the copyright detection?</h3>
              <p className="text-gray-400 text-sm">
                Our AI-powered system has a 95%+ accuracy rate for detecting copyrighted content across audio, visual,
                and text elements in your videos.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-3">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-400 text-sm">
                Yes, you can cancel your subscription at any time. You'll continue to have access to your plan until the
                end of your billing period.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-3">How does the automatic fixing work?</h3>
              <p className="text-gray-400 text-sm">
                Our AI technology can automatically replace copyrighted music, blur protected logos, and edit out
                problematic content while maintaining the quality of your video.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-3">Is my content secure on your platform?</h3>
              <p className="text-gray-400 text-sm">
                Absolutely. We use enterprise-grade encryption and security measures. Your videos are processed securely
                and never shared with third parties.
              </p>
            </div>
          </div>
        </div>
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

