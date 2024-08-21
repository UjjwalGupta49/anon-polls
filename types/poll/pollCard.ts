// components/poll/types.ts

export interface User {
  profilePic: string;
  username: string;
}

export interface PollOption {
  label: string;
}

export interface PollContent {
  text?: string;
  image?: string;
}

export interface Poll {
  content: PollContent;
  options: PollOption[];
}
