import Image from "next/image"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.svg" 
                alt="FitnEarnPal Logo"
                width={40} 
                height={40}
              />
              <span className="text-2xl font-bold text-[#FF4B5C]">FitnEarnPal</span>
            </Link>
            <p className="text-white/60 text-sm">
              FitnEarnPal is your all-in-one place where you can train people as per your schedule. It's a place where you can create live sessions, write blogs and much more. Available on Android and iOS.
            </p>
            <p className="text-white/60 text-sm">
              help.support@fitnearnpal.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#how-it-works">How it works</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="/signup">Sign Up form</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Term & Conditions</Link></li>
              <li><Link href="/deletion">Data Deletion</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Download Now</h3>
            <div className="space-y-4">
              <Link href="#" className="block">
                <Image
                  src="/app-store-badge.png"
                  alt="Download on App Store"
                  width={140}
                  height={42}
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © Copyright 2024. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-white/60 hover:text-white">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

