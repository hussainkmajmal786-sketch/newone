
export interface EventItem {
  id: string;
  title: string;
  description: string;
  instructions?: string;
  category: 'Coding' | 'Robotics' | 'Design' | 'Business' | 'Other';
  image: string;
  link: string;
  date: string;
  time: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  location: string;
  type: 'Keynote' | 'Competition' | 'Workshop' | 'Break';
}

export interface LeaderboardEntry {
  rank: number;
  team: string;
  college: string;
  points: number;
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: 'Diamond' | 'Gold' | 'Silver';
}

export interface Task {
  id: string;
  eventId: string;
  title: string;
  description: string;
  instructions: string;
  quote: string;
  assignedTo: string; // Member role or name
  status: 'Pending' | 'In Progress' | 'Completed';
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'Lead' | 'Developer' | 'Designer' | 'Pitcher';
  tasks: Task[];
}

export interface Team {
  id: string;
  name: string;
  accessCode: string;
  members: TeamMember[];
}
