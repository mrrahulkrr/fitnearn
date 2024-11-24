import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">👋</span>
            <h1 className="text-5xl font-bold">
              Hey, <span className="text-[#FF4B5C]">Awesome Coach</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">
              Expand Your Reach, Inspire More Lives{" "}
              <span className="text-[#FF4B5C]">Join FitnEarnPal Today!</span>
            </h2>
            <p className="text-lg text-white/80">
              A global platform for coaches to connect, Inspire and change Lives
            </p>
          </div>

          <div className="flex space-x-4">
            <Button className="bg-black border border-white/20 hover:bg-black/80 space-x-2">
              <Image 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23FFFFFF'/%3E%3C/svg%3E"
                alt="Store Logo"
                
                width={20} 
                height={20}
              />
              <span>App Store</span>
            </Button>
            <Button className="bg-black border border-white/20 hover:bg-black/80 space-x-2">
              <Image 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23FFFFFF'/%3E%3C/svg%3E"
                alt="Store Logo"
                
                width={20} 
                height={20}
              />
              <span>Google Play</span>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4B5C]/20 to-transparent rounded-3xl" />
          <Image
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800'%3E%3Crect width='600' height='800' fill='%23333333'/%3E%3C/svg%3E"
            alt="FitnEarnPal App Preview"
            
            width={600}
            height={800}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  )
}

