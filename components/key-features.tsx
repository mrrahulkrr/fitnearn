import { Book, Video, ImageIcon, PlayCircle } from 'lucide-react'

const features = [
  {
    icon: <Book className="w-6 h-6" />,
    title: "Blog Writing",
    description: "Coach can write blogs"
  },
  {
    icon: <PlayCircle className="w-6 h-6" />,
    title: "Live Sessions",
    description: "Coach can create live sessions"
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "Content Creation",
    description: "Coach can create contents"
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Workout Videos",
    description: "Coach can create workout videos"
  }
]

export function KeyFeatures() {
  return (
    <section className="py-16 px-4" id="features">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#FF4B5C]">Key</span> Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] rounded-xl p-6 space-y-4 hover:bg-[#2A2A2A] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#FF4B5C]/10 flex items-center justify-center text-[#FF4B5C]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

