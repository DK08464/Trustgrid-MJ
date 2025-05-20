
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold gradient-text mr-2">TrustGrid</span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-charity-purple to-charity-teal"></div>
            </div>
            <p className="text-gray-600 mb-6 pr-10 dark:text-gray-400">
              Making the world better through transparent, direct, and impactful cryptocurrency donations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-charity-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-charity-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-charity-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord">
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.2C8.2 6.7 9 6.3 10 6h4c1 0.3 1.8 0.7 2.5 1.2" />
                  <path d="M7.5 16.8C8.2 17.3 9 17.7 10 18h4c1-0.3 1.8-0.7 2.5-1.2" />
                  <path d="M16 3h1a2 2 0 0 1 2 2v3a8 8 0 0 1-6 7.8" />
                  <path d="M8 3H7a2 2 0 0 0-2 2v3a8 8 0 0 0 6 7.8" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-charity-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-charity-purple transition-colors dark:text-gray-400 dark:hover:text-charity-purple">Home</a>
              </li>
              <li>
                <a href="#causes" className="text-gray-600 hover:text-charity-purple transition-colors dark:text-gray-400 dark:hover:text-charity-purple">Causes</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-charity-purple transition-colors dark:text-gray-400 dark:hover:text-charity-purple">How It Works</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-charity-purple transition-colors dark:text-gray-400 dark:hover:text-charity-purple">About Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-charity-purple transition-colors dark:text-gray-400 dark:hover:text-charity-purple">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-charity-purple transition-colors dark:text-gray-400 dark:hover:text-charity-purple">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-charity-purple transition-colors dark:text-gray-400 dark:hover:text-charity-purple">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-charity-purple transition-colors dark:text-gray-400 dark:hover:text-charity-purple">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center dark:border-gray-800">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 dark:text-gray-400">
            &copy; {new Date().getFullYear()} TrustGrid. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Built with</span>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-charity-purple">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">for a better world</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
