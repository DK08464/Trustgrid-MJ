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
import { ethers } from 'ethers'; // Keep ethers import for parsing amount

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
  charityPlatformContract: ethers.Contract | null; // Add contract prop
  onDonate: (charityId: string, amount: string) => Promise<void>; // Add donation handler prop
}

export const DonationModal: React.FC<DonationModalProps> = ({
  children,
  charityId,
  charityName,
  charityPlatformContract,
  onDonate
}) => {
  const [amount, setAmount] = useState<string>('0.01'); // Default donation amount
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleDonation = async () => {
    if (!charityPlatformContract) {
       toast({
        title: "Error",
        description: "Smart contract not loaded.",
        variant: "destructive"
      });
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
       toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    try {
      await onDonate(charityId, amount); // Call the passed-in donation handler
      setIsOpen(false); // Close modal on success
      // Toast is handled by the onDonate function in Index.tsx
    } catch (error) {
       console.error("Error during donation process:", error);
       // Error toast is handled by the onDonate function in Index.tsx
    } finally {
      setIsProcessing(false);
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
            <div className="border-t border-border pt-2 mt-2 flex justify-between font-medium">
              <span>Total</span>
              <span>{amount} ETH</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleDonation} 
            disabled={isProcessing || !charityPlatformContract || !amount || parseFloat(amount) <= 0}
            className="w-full bg-charity-purple hover:bg-charity-deep-purple dark:bg-charity-indigo dark:hover:bg-charity-purple"
          >
            {isProcessing ? "Processing..." : "Confirm Donation"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
