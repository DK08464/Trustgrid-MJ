import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ConnectWallet from './ConnectWallet';
import ThemeSwitcher from './ThemeSwitcher';
import {
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarProps {
  isConnected: boolean;
  walletAddress: string;
  balance: string;
  onConnect: (address: string, balance: string) => void;
  onDisconnect: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isConnected,
  walletAddress,
  balance,
  onConnect,
  onDisconnect
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm dark:bg-gray-900 dark:bg-opacity-90 dark:shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold gradient-text mr-2">TrustGrid</span>
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-charity-purple to-charity-teal"></div>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#causes" className="text-gray-700 hover:text-charity-purple dark:text-gray-300 dark:hover:text-charity-purple font-medium transition-colors">
            Causes
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-charity-purple dark:text-gray-300 dark:hover:text-charity-purple font-medium transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-gray-700 hover:text-charity-purple dark:text-gray-300 dark:hover:text-charity-purple font-medium transition-colors">
            About
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeSwitcher />
          <ConnectWallet
            isConnected={isConnected}
            walletAddress={walletAddress}
            balance={balance}
            onConnect={onConnect}
            onDisconnect={onDisconnect}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
