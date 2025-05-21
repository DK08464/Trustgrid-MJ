import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  balance: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ balance }) => {
  return (
    <div id="hero" className="relative pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-charity-light-purple rounded-full filter blur-3xl opacity-20 animate-pulse-light"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Donate Ethereum</span> <br/>
            To Causes That Matter
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:pr-10">
            Make a difference with cryptocurrency. Direct, transparent, and impactful donations to verified charity communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#causes"
              className="bg-gradient-to-r from-charity-purple to-charity-teal text-white px-8 py-6 rounded-xl hover:opacity-90 transition-all inline-block"
            >
              Donate Now
            </a>
            <a 
              href="#how-it-works"
              className="px-8 py-6 rounded-xl border-2 border-charity-purple text-charity-purple hover:bg-charity-light-purple inline-block transition-colors"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">$2.4M+</p>
              <p className="text-gray-600 text-sm">Donations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">160+</p>
              <p className="text-gray-600 text-sm">Charities</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">10K+</p>
              <p className="text-gray-600 text-sm">Donors</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden eth-card p-6 shadow-xl animate-float">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-charity-purple/20 to-charity-teal/20"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white mb-4 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9982 3L11.8252 3.58591V15.3111L11.9982 15.4838L17.9962 11.791L11.9982 3Z" fill="#6E59A5"/>
                      <path d="M11.9984 3L6 11.791L11.9984 15.4838V9.69425V3Z" fill="#8B5CF6"/>
                      <path d="M11.9984 16.6741L11.9017 16.7916V21.6131L11.9984 21.8956L18 13.1835L11.9984 16.6741Z" fill="#6E59A5"/>
                      <path d="M11.9984 21.8956V16.6741L6 13.1835L11.9984 21.8956Z" fill="#8B5CF6"/>
                      <path d="M11.9985 15.4838L17.9964 11.791L11.9985 9.69421V15.4838Z" fill="#393163"/>
                      <path d="M6 11.791L11.9984 15.4838V9.69421L6 11.791Z" fill="#6E59A5"/>
                    </svg>
                  </div>
                  <p className="text-white text-xl font-semibold">Ethereum Donation</p>
                </div>
                <div className="mt-1">
                  <p className="text-white text-sm">Secure • Verified • Direct</p>
                </div>
              </div>
              
              <div className="mt-10">
                <p className="text-white/80 text-sm mb-2">Your impact in ETH</p>
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-white">Amount</span>
                    <span className="text-white font-bold">{balance} ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">For charity</span>
                    <span className="text-white/80">100%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-white/80 text-sm mb-2">All donations are tax deductible</p>
                <div className="flex space-x-2 text-white">
                  <span>•</span>
                  <span>Transparent</span>
                  <span>•</span>
                  <span>Traceable</span>
                  <span>•</span>
                  <span>On-chain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
