
import { EventItem, ScheduleItem, LeaderboardEntry, Sponsor, Team } from './types';

export const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Idea Pitching',
    description: 'Present your groundbreaking startup ideas to a panel of expert judges.',
    instructions: '1. Prepare a 5-minute slide deck. 2. Focus on problem statement, solution, and scalability. 3. Be ready for a 2-minute Q&A session. 4. Bring your own laptop or USB drive.\n\nNOTE: The exact start time is subject to change based on the completion of the previous program.',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    link: '#',
    date: 'Oct 24, 2026',
    time: '09:00 AM - 12:00 PM'
  },
  {
    id: '2',
    title: 'Sell the Product',
    description: 'Test your marketing and persuasion skills by selling random items on the spot.',
    instructions: '1. Participants will be given an object on the stage. 2. You have 30 seconds to prepare a pitch. 3. The pitch must last at least 1 minute. 4. Use creativity and humor to win over the audience.\n\nNOTE: The exact start time is subject to change based on the completion of the previous program.',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    link: '#',
    date: 'Oct 24, 2026',
    time: '02:00 PM - 04:30 PM'
  },
  {
    id: '3',
    title: 'Treasure Hunt',
    description: 'Solve cryptic puzzles and navigate the campus to find the hidden grand prize.',
    instructions: '1. Teams of 2-4 members. 2. Scan QR codes at each station for clues. 3. Strictly follow the campus boundaries. 4. The first team to return to base with the final token wins.\n\nNOTE: The exact start time is subject to change based on the completion of the previous program.',
    category: 'Other',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&q=80&w=800',
    link: '#',
    date: 'Oct 25, 2026',
    time: '01:00 PM - 04:00 PM'
  },
  {
    id: '4',
    title: 'Poster Presentation',
    description: 'Showcase your research and technical projects through visually stunning posters.',
    instructions: '1. Posters must be A1 size. 2. Be present at your stand for the judging rounds. 3. Prepare a 3-minute brief explanation. 4. Focus on clarity and visual data representation.\n\nNOTE: The exact start time is subject to change based on the completion of the previous program.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    link: '#',
    date: 'Oct 25, 2026',
    time: '09:30 AM - 12:30 PM'
  },
  {
    id: '5',
    title: 'Code-X Hackathon',
    description: 'A 24-hour sprint to build innovative solutions using modern tech stacks.',
    instructions: '1. Only original code allowed. 2. Use of open-source libraries must be disclosed. 3. Final submission requires a working demo and source code link. 4. Healthy competition is encouraged!',
    category: 'Coding',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    link: '#',
    date: 'Oct 24, 2026',
    time: 'Starts 10:00 AM'
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: 'Oct 24, 09:00 AM', activity: 'Inauguration Ceremony', location: 'Main Auditorium', type: 'Keynote' },
  { time: 'Oct 24, 09:30 AM', activity: 'Idea Pitching (Business)', location: 'Seminar Hall A', type: 'Competition' },
  { time: 'Oct 24, 10:00 AM', activity: 'Code-X Hackathon Kickoff', location: 'Computer Lab 101', type: 'Competition' },
  { time: 'Oct 24, 01:00 PM', activity: 'Networking Lunch', location: 'Food Court', type: 'Break' },
  { time: 'Oct 24, 02:00 PM', activity: 'Sell the Product', location: 'Open Stage', type: 'Competition' },
  { time: 'Oct 24, 04:00 PM', activity: 'Robo-War Prelims', location: 'Outdoor Arena', type: 'Competition' },
  { time: 'Oct 25, 09:00 AM', activity: 'Keynote: The Age of AI', location: 'Main Auditorium', type: 'Keynote' },
  { time: 'Oct 25, 09:30 AM', activity: 'Poster Presentation', location: 'Innovation Hall', type: 'Competition' },
  { time: 'Oct 25, 01:00 PM', activity: 'Treasure Hunt', location: 'Campus Grounds', type: 'Competition' },
  { time: 'Oct 25, 04:30 PM', activity: 'Closing Ceremony', location: 'Main Auditorium', type: 'Keynote' }
];

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, team: 'Alpha Centauri', college: 'Tech Institute of Tech', points: 950 },
  { rank: 2, team: 'Binary Busters', college: 'Global Engineering College', points: 880 },
  { rank: 3, team: 'Cyber Sentinels', college: 'Modern Arts & Science', points: 820 },
  { rank: 4, team: 'Data Divas', college: 'Central University', points: 790 },
  { rank: 5, team: 'Echo Explorers', college: 'Regional Tech School', points: 750 }
];

export const SPONSORS: Sponsor[] = [
  { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg', tier: 'Diamond' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg', tier: 'Diamond' },
  { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', tier: 'Gold' },
  { name: 'DigitalOcean', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg', tier: 'Gold' },
  { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_and_wordmark.svg', tier: 'Silver' }
];

export const TEAMS: Team[] = [
  {
    id: 'team1',
    name: 'Alpha Centauri',
    accessCode: 'ALPHA2026',
    members: [
      {
        id: 'mem1',
        name: 'Alex Rivera',
        role: 'Lead',
        tasks: [
          { 
            id: 't1', 
            eventId: '1', 
            title: 'Pitch Deck Review', 
            description: 'Final review of the Idea Pitching slides.', 
            instructions: 'Ensure the value proposition is clear within the first 60 seconds. Verify all animations work on standard PDF viewers.',
            quote: 'Leadership is not about being in charge. It is about taking care of those in your charge.',
            assignedTo: 'Lead', 
            status: 'Pending' 
          },
          { 
            id: 't2', 
            eventId: '5', 
            title: 'System Architecture', 
            description: 'Outline the backend structure for the hackathon.', 
            instructions: 'Focus on modularity and low-latency API calls. Use a microservices mindset even if it is a monolith for now.',
            quote: 'The best way to predict the future is to invent it.',
            assignedTo: 'Lead', 
            status: 'Pending' 
          }
        ]
      },
      {
        id: 'mem2',
        name: 'Sarah Chen',
        role: 'Developer',
        tasks: [
          { 
            id: 't3', 
            eventId: '5', 
            title: 'API Integration', 
            description: 'Connect the frontend to the Gemnini API.', 
            instructions: 'Use the official SDK. Handle error states gracefully with fallback UI components.',
            quote: 'First, solve the problem. Then, write the code.',
            assignedTo: 'Developer', 
            status: 'In Progress' 
          },
          { 
            id: 't4', 
            eventId: '3', 
            title: 'Treasure Logic', 
            description: 'Help decipher the code at Station 4.', 
            instructions: 'Station 4 uses a Caesar Cipher with a shift of 7. Look for keywords related to ZERONE.',
            quote: 'Logic will get you from A to B. Imagination will take you everywhere.',
            assignedTo: 'Developer', 
            status: 'Pending' 
          }
        ]
      },
      {
        id: 'mem3',
        name: 'Jordan Smith',
        role: 'Designer',
        tasks: [
          { 
            id: 't5', 
            eventId: '4', 
            title: 'Visual Assets', 
            description: 'Create high-res diagrams for the poster.', 
            instructions: 'Maintain a 300DPI resolution. Use the symposium theme colors (#22d3ee and #6366f1).',
            quote: 'Design is not just what it looks like and feels like. Design is how it works.',
            assignedTo: 'Designer', 
            status: 'Pending' 
          },
          { 
            id: 't6', 
            eventId: '5', 
            title: 'UI Mockups', 
            description: 'Design the final dashboard screens.', 
            instructions: 'Apply glassmorphism effects for the sidebar. Ensure the mobile view is fully responsive.',
            quote: 'The soul of a product is its design.',
            assignedTo: 'Designer', 
            status: 'In Progress' 
          }
        ]
      },
      {
        id: 'mem4',
        name: 'Mia Wong',
        role: 'Pitcher',
        tasks: [
          { 
            id: 't7', 
            eventId: '1', 
            title: 'Speech Rehearsal', 
            description: 'Practice the 5-minute pitch timing.', 
            instructions: 'Aim for a 4:30 finish to leave buffer for Q&A. Focus on eye contact with the judges.',
            quote: 'Communication works for those who work at it.',
            assignedTo: 'Pitcher', 
            status: 'Pending' 
          },
          { 
            id: 't8', 
            eventId: '2', 
            title: 'Improv Practice', 
            description: 'Prepare for random product selling scenarios.', 
            instructions: 'Watch previous ZERONE "Sell it" videos. Practice spinning negative features into unique selling points.',
            quote: 'The best way to sell something is to not sell anything, but to help someone buy.',
            assignedTo: 'Pitcher', 
            status: 'Pending' 
          }
        ]
      }
    ]
  }
];
