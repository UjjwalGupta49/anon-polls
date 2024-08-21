import React from 'react';
import { Card, Avatar, Button, Skeleton } from '@nextui-org/react';
import Image from 'next/image';
import { User, Poll } from '../../types';

interface PollCardProps {
  user?: User;
  poll?: Poll;
  isLoading: boolean;
}

const PollCard: React.FC<PollCardProps> = ({ user, poll, isLoading }) => {
  if (isLoading) {
    return (
      <Card className="p-4 mb-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center mb-4">
          <Skeleton className="rounded-full">
            <div className="w-12 h-12 rounded-full bg-default-300"></div>
          </Skeleton>
          <Skeleton className="ml-3 w-1/3 rounded-lg">
            <div className="h-4 w-full rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        
        <Skeleton className="mb-2 w-full rounded-lg">
          <div className="h-3 w-full rounded-lg bg-default-200"></div>
        </Skeleton>
        
        <Skeleton className="w-full h-64 mb-4 rounded-lg">
          <div className="w-full h-full rounded-lg bg-default-300"></div>
        </Skeleton>
        
        <div className="grid grid-cols-1 gap-2">
          {Array(4).fill(0).map((_, index) => (
            <Skeleton key={index} className="w-full rounded-lg">
              <div className="h-10 w-full rounded-lg bg-default-300"></div>
            </Skeleton>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 mb-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <Avatar
          src={user?.profilePic || ''}
          size="lg"
          className="mr-3"
          alt={`${user?.username || 'User'}'s profile picture`}
        />
        <h4>{user?.username || 'User'}</h4>
      </div>
      
      {poll?.content.text && (
        <p className="mb-2 text-sm text-gray-800">{poll.content.text}</p>
      )}

      {poll?.content.image && (
        <div className="relative w-full h-64 mb-4">
          <Image 
            src={poll.content.image} 
            layout="fill" 
            objectFit="cover" 
            alt="Poll content image" 
            className="rounded-lg"
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-2">
        {poll?.options.map((option:any, index:any) => (
          <Button 
            key={index} 
            className="w-full text-left bg-gray-200 hover:bg-gray-300"
            
          >
            {option.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}

export default PollCard;
