
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// This interface is already defined in ConnectWallet.tsx, but we include it here as well
// for completeness since this file also uses window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

interface DonationModalProps {
  children: React.ReactNode;
  charityId: string;
  charityName: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  children,
  charityId,
  charityName
}) => {
  const [amount, setAmount] = useState<string>('0.1');
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleDonation = async () => {
    if (!window.ethereum) {
      toast({
        title: "Wallet not found",
        description: "Please install MetaMask or another Ethereum wallet.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsProcessing(true);
      
      // This is a mock implementation
      // In a real app, you would use ethers.js or web3.js to send Ethereum
      setTimeout(() => {
        setIsProcessing(false);
        setIsOpen(false);
        toast({
          title: "Thank you for your donation!",
          description: `You donated ${amount} ETH to ${charityName}.`,
        });
      }, 2000);
      
    } catch (error) {
      console.error("Error processing donation:", error);
      setIsProcessing(false);
      toast({
        title: "Donation failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:border-gray-700">
        <DialogHeader>
          <DialogTitle>Donate to {charityName}</DialogTitle>
          <DialogDescription>
            Your donation will directly support this cause. All transactions are recorded on the Ethereum blockchain.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <div className="col-span-3 flex items-center space-x-2">
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.01"
                min="0.01"
                className="flex-1"
              />
              <span className="font-medium">ETH</span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="frequency" className="text-right">
              Frequency
            </Label>
            <Select defaultValue="one-time">
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one-time">One-time donation</SelectItem>
                <SelectItem value="monthly">Monthly donation</SelectItem>
                <SelectItem value="quarterly">Quarterly donation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mt-2 bg-muted p-4 rounded-lg dark:bg-gray-800">
            <div className="flex justify-between text-sm mb-2">
              <span>Donation</span>
              <span>{amount} ETH</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Network fee (est.)</span>
              <span>0.002 ETH</span>
            </div>
            <div className="border-t border-border pt-2 mt-2 flex justify-between font-medium">
              <span>Total</span>
              <span>{(parseFloat(amount) + 0.002).toFixed(3)} ETH</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleDonation} 
            disabled={isProcessing}
            className="w-full bg-charity-purple hover:bg-charity-deep-purple dark:bg-charity-indigo dark:hover:bg-charity-purple"
          >
            {isProcessing ? "Processing..." : "Confirm Donation"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
