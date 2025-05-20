
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleConnectWallet = async () => {
    // This is a mock implementation
    // In a real app, you would use ethers.js or web3.js to connect to Ethereum
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        
        const address = accounts[0];
        setWalletAddress(address);
        setIsConnected(true);
        setIsOpen(false);
        
        console.log("Wallet connected:", address);
      } else {
        console.error("Ethereum object not found, install MetaMask.");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
  };

  const shortenAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div>
      {!isConnected ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-charity-purple to-charity-teal hover:opacity-90">
              Connect Wallet
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Connect your wallet</DialogTitle>
              <DialogDescription>
                Connect your Ethereum wallet to donate to charity causes
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button 
                onClick={handleConnectWallet}
                className="flex items-center justify-center space-x-2 w-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.1708 13.3886C21.4631 11.0869 19.6187 10 19.6187 10L12.0187 10.0001L4.37827 10C4.37827 10 2.53385 11.0869 2.82615 13.3886C3.11846 15.6903 5.00006 15.3892 5.00006 15.3892L12.0187 15.3892L19.0187 15.3892C19.0187 15.3892 20.8784 15.6903 21.1708 13.3886Z" fill="#BDBDBD"/>
                  <path d="M19.0187 15.3892C19.0187 15.3892 19.5231 18 12.0187 18C4.51435 18 5.00006 15.3892 5.00006 15.3892" fill="#BDBDBD"/>
                  <path d="M12.0187 15.3892L12.0187 18" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5.00005 10.0001L5.00005 7.99997C5.00005 5.23857 8.13402 3 12.0186 3C15.9033 3 19.0372 5.23857 19.0372 7.99997L19.0372 10.0001" stroke="#BDBDBD" strokeWidth="2"/>
                </svg>
                <span>MetaMask</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center space-x-2 w-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="9" fill="#3B99FC"/>
                  <path d="M12 6.5V17.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17.5 12L6.5 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Coinbase Wallet</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <div className="flex items-center">
          <div className="mr-2 px-4 py-2 bg-charity-light-purple text-charity-purple rounded-full">
            {shortenAddress(walletAddress)}
          </div>
          <Button 
            variant="ghost" 
            onClick={disconnectWallet}
            className="text-gray-500 hover:text-gray-700"
          >
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
