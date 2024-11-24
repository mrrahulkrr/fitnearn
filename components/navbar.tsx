import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23FF4B5C'/%3E%3C/svg%3E"
                alt="FitnEarnPal Logo" 
                
                width={40} 
                height={40}
              />
              <span className="text-2xl font-bold text-[#FF4B5C]">FitnEarnPal</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/90 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#features" className="text-white/90 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-white/90 hover:text-white transition-colors">
                How It Works
              </Link>
            </nav>
    
            <Button 
              variant="outline" 
              className="bg-transparent border-[#FF4B5C] text-[#FF4B5C] hover:bg-[#FF4B5C] hover:text-white transition-colors"
            >
              Sign Up Form
            </Button>
          </div>
        </header>
      )
}

