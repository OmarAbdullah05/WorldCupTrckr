export type MilestoneStatus = 'completed' | 'in-progress' | 'not-started' | 'blocked';

export interface IMilestone {
  id: string;
  name: string;
  category: 'network' | 'power' | 'testing' | 'operations';
  status: MilestoneStatus;
  dueDate: string;
  completedDate?: string;
  owner: string;
  notes?: string;
}

export interface IStadium {
  id: string;
  name: string;
  city: string;
  state: string;
  capacity: number;
  firstMatchDate: string;
  hostRound: string;
  regionLead: string;
  milestones: IMilestone[];
}

export interface ICountdown {
  days: number;
  hours: number;
  minutes: number;
  isPast: boolean;
}
