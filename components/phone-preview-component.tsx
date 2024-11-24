import { Bell, Calendar } from "lucide-react";

export const PhonePreview = () => (
  <div className="relative w-full max-w-sm mx-auto">
    <div className="bg-gray-900 rounded-[3rem] p-4 relative z-10">
      <div className="bg-black rounded-[2.5rem] overflow-hidden">
        <div className="pt-8 px-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg">Hi Ankit,</span>
            <Bell className="w-6 h-6" />
          </div>
          <div className="mb-8">
            <h3 className="text-xl mb-4">How are you feeling?</h3>
            <div className="flex gap-4">
              {['😠', '😩', '🤔', '😌'].map((emoji, i) => (
                <button key={i} className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-xl">
              <h4>Steps</h4>
              <div className="flex justify-between items-center">
                <span>7000/8000</span>
                <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                  88%
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
              <h4>Calories</h4>
              <div className="flex justify-between items-center">
                <span>250/600</span>
                <div className="w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center">
                  42%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 mt-4 rounded-t-3xl">
          <div className="flex justify-around">
            <button className="p-2 text-red-500">
              <span className="block h-1 w-6 bg-current rounded-full"></span>
            </button>
            <button className="p-2">
              <Calendar className="w-6 h-6" />
            </button>
            <button className="p-2">
              <span className="block h-6 w-6 rounded-full border-2"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);