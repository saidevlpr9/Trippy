import React from "react";
import { ConstructionAnimation } from "../Components/Construction";
import { ProgressBar } from "../Components/ProgressBar";
import { SocialLinks } from "../Components/SocialLinks";
import { Clock } from "lucide-react";

function ConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <ConstructionAnimation />

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-[#017434] bg-clip-text text-transparent">
              Something Amazing is Coming
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl">
              We're working hard to bring you something extraordinary. Our team
              of developers is crafting a unique experience just for you.
            </p>

            <ProgressBar />

            <div className="flex items-center space-x-2 text-gray-500">
              <Clock className="w-5 h-5" />
              <span>Estimated Launch: Coming Soon</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-600">Stay connected with us</p>
              <SocialLinks />
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>Want to be notified when we launch?</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-black to-[#017434] text-white rounded-lg hover:opacity-90 transition-opacity">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConstructionPage;
