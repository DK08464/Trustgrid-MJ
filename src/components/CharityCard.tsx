import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DonationModal } from "./DonationModal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ethers } from "ethers";

export interface CharityProps {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  goal: number;
  raised: number;
  donorsCount: number;
  charityPlatformContract: ethers.Contract | null;
  onDonate: (charityId: string, amount: string) => Promise<void>;
}

const CharityCard: React.FC<CharityProps> = ({
  id,
  name,
  category,
  image,
  description,
  goal,
  raised,
  donorsCount,
  charityPlatformContract,
  onDonate,
}) => {
  const progress = Math.min(100, Math.round((raised / goal) * 100));

  return (
    <Card className="overflow-hidden hover:card-shadow transition-all duration-300 h-full dark:border-gray-700 dark:bg-gray-800 flex flex-col">
      <div className="relative">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80";
            }}
          />
        </AspectRatio>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge
            variant="outline"
            className="bg-charity-light-purple text-charity-purple hover:bg-charity-light-purple dark:bg-gray-700 dark:text-charity-purple"
          >
            {category}
          </Badge>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
              fill="#8B5CF6"
            />
          </svg>
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="h-16 line-clamp-2 dark:text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mb-2">
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <DonationModal
          charityId={id}
          charityName={name}
          charityPlatformContract={charityPlatformContract}
          onDonate={onDonate}
        >
          <Button className="w-full bg-charity-purple hover:bg-charity-deep-purple dark:bg-charity-indigo dark:hover:bg-charity-purple">
            Donate Now
          </Button>
        </DonationModal>
      </CardFooter>
    </Card>
  );
};

export default CharityCard;
