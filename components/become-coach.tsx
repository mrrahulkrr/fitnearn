import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BecomeCoach() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16">
          Become <span className="text-[#FF4B5C]">Coach</span> Today
        </h2>

        <div className="relative max-w-2xl mx-auto mb-12">
          <Image
            src="/app-screens.png"
            alt="App Screenshots"
            width={800}
            height={400}
            className="rounded-2xl"
          />
        </div>

        <div className="flex justify-center space-x-4">
          <Button className="bg-black border border-white/20 hover:bg-black/80 space-x-2">
            <Image
              src="/apple-logo.svg"
              alt="Apple Logo"
              width={20}
              height={20}
            />
            <span>App Store</span>
          </Button>
          <Button className="bg-black border border-white/20 hover:bg-black/80 space-x-2">
            <Image
              src="/google-play.svg"
              alt="Google Play Logo"
              width={20}
              height={20}
            />
            <span>Google Play</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

