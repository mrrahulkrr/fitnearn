import { ClipboardCheck, UserCheck, FileText, Users } from 'lucide-react'

const steps = [
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Register",
    description: "Support for multiple languages, making health monitoring accessible and easy for users around the globe."
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Verify",
    description: "Support for multiple languages, making health monitoring accessible and easy for users around the globe."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Create Content",
    description: "Support for multiple languages, making health monitoring accessible and easy for users around the globe."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Engage With Users",
    description: "Support for multiple languages, making health monitoring accessible and easy for users around the globe."
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 px-4" id="how-it-works">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          How It Works <span className="text-[#FF4B5C]">?</span>
        </h2>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#FF4B5C]/20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#1E1E1E] border-2 border-[#FF4B5C] flex items-center justify-center mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                <p className="text-white/60 text-center text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

