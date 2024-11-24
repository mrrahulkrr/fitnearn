import Image from "next/image"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Coach Name",
    role: "Yoga Trainer",
    avatar: "/coach-avatar.jpg",
    testimonial: "After Joining FitnEarnPal my audience reach has increased and i can work according to my time which i liked the most.",
    rating: 5
  },
  {
    name: "Coach Name",
    role: "Yoga Trainer",
    avatar: "/coach-avatar.jpg",
    testimonial: "After Joining FitnEarnPal my audience reach has increased and i can work according to my time which i liked the most.",
    rating: 5
  }
  // Add more testimonials as needed
]

export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          What our <span className="text-[#FF4B5C]">Coach</span>{" "}
          <span className="text-[#FF8F6B]">Say</span>
        </h2>
        <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
          FitnEarnPal empowers coaches to grow and reach a global audience while valuable health and fitness insights to users.
        </p>

        <div className="max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#232323] rounded-xl p-8 space-y-4 relative"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-center text-lg">{testimonial.testimonial}</p>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-white/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

