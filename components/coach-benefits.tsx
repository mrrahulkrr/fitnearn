import Image from "next/image"
import { Users, Award, Clock, DollarSign } from 'lucide-react'

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Global Audience Access",
    description: "Helps you gain global audience"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Personal Brand",
    description: "Helps you gain global audience"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Work on Your Own Schedule",
    description: "Helps you gain global audience"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Revenue Opportunities",
    description: "Helps you gain global audience"
  }
]

export function CoachBenefits() {
  return (
    <section className="py-16 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          What's in it for <span className="text-[#FF4B5C]">Coach</span>
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl">
          FitnEarnPal empowers coaches to grow and reach a global audience while valuable health and fitness insights to users.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='800'%3E%3Crect width='500' height='800' fill='%23333333'/%3E%3C/svg%3E"
              alt="App Features"
              width={500}
              height={800}
              className="rounded-2xl"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#232323] rounded-xl p-6 space-y-4 hover:bg-[#2A2A2A] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF4B5C]/10 flex items-center justify-center text-[#FF4B5C]">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

