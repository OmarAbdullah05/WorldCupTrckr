import { IStadium, IMilestone } from '../models/IStadium';

export const GAME_DAY_ANCHOR = '2026-06-11';

export const STADIUMS: IStadium[] = [
  {
    id: 'metlife',
    name: 'MetLife Stadium',
    city: 'East Rutherford',
    state: 'NJ',
    capacity: 82500,
    firstMatchDate: '2026-06-19',
    hostRound: 'Group Stage & Final',
    regionLead: 'Northeast Region',
    milestones: [
      { id: 'm1', name: 'Site survey & design approval', category: 'network', status: 'completed', dueDate: '2025-09-15', completedDate: '2025-09-10', owner: 'A. Rivera' },
      { id: 'm2', name: 'Fiber backbone installation', category: 'network', status: 'completed', dueDate: '2025-12-01', completedDate: '2025-11-22', owner: 'J. Chen' },
      { id: 'm3', name: 'DAS head-end deployment', category: 'network', status: 'in-progress', dueDate: '2026-02-28', owner: 'M. Okonkwo', notes: 'Level 300 west stand in progress' },
      { id: 'm4', name: '5G small cell installation', category: 'network', status: 'in-progress', dueDate: '2026-03-31', owner: 'S. Patel' },
      { id: 'm5', name: 'Edge compute node setup', category: 'network', status: 'not-started', dueDate: '2026-04-15', owner: 'K. Williams' },
      { id: 'm6', name: 'Network load testing (100K sim)', category: 'testing', status: 'not-started', dueDate: '2026-05-01', owner: 'R. Thompson' },
      { id: 'm7', name: 'Redundant power validation', category: 'power', status: 'not-started', dueDate: '2026-05-15', owner: 'L. Garcia' },
      { id: 'm8', name: 'NOC integration & monitoring', category: 'operations', status: 'not-started', dueDate: '2026-05-25', owner: 'D. Kim' },
      { id: 'm9', name: 'Final acceptance testing', category: 'testing', status: 'not-started', dueDate: '2026-06-05', owner: 'A. Rivera' },
      { id: 'm10', name: 'Game day readiness sign-off', category: 'operations', status: 'not-started', dueDate: '2026-06-10', owner: 'Executive PMO' }
    ]
  },
  {
    id: 'att',
    name: 'AT&T Stadium',
    city: 'Arlington',
    state: 'TX',
    capacity: 80000,
    firstMatchDate: '2026-06-14',
    hostRound: 'Group Stage & Knockout',
    regionLead: 'South Central Region',
    milestones: [
      { id: 'a1', name: 'Site survey & design approval', category: 'network', status: 'completed', dueDate: '2025-08-01', completedDate: '2025-07-28', owner: 'T. Brooks' },
      { id: 'a2', name: 'Fiber backbone installation', category: 'network', status: 'completed', dueDate: '2025-11-15', completedDate: '2025-11-08', owner: 'T. Brooks' },
      { id: 'a3', name: 'DAS head-end deployment', category: 'network', status: 'completed', dueDate: '2026-01-31', completedDate: '2026-01-25', owner: 'N. Foster' },
      { id: 'a4', name: '5G small cell installation', category: 'network', status: 'in-progress', dueDate: '2026-03-15', owner: 'N. Foster', notes: '72 of 96 cells mounted' },
      { id: 'a5', name: 'Edge compute node setup', category: 'network', status: 'in-progress', dueDate: '2026-04-01', owner: 'V. Singh' },
      { id: 'a6', name: 'Network load testing (100K sim)', category: 'testing', status: 'not-started', dueDate: '2026-04-20', owner: 'R. Thompson' },
      { id: 'a7', name: 'Redundant power validation', category: 'power', status: 'not-started', dueDate: '2026-05-01', owner: 'L. Garcia' },
      { id: 'a8', name: 'NOC integration & monitoring', category: 'operations', status: 'not-started', dueDate: '2026-05-20', owner: 'D. Kim' },
      { id: 'a9', name: 'Final acceptance testing', category: 'testing', status: 'not-started', dueDate: '2026-06-01', owner: 'T. Brooks' },
      { id: 'a10', name: 'Game day readiness sign-off', category: 'operations', status: 'not-started', dueDate: '2026-06-10', owner: 'Executive PMO' }
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz Stadium',
    city: 'Atlanta',
    state: 'GA',
    capacity: 71000,
    firstMatchDate: '2026-06-15',
    hostRound: 'Group Stage & Semifinal',
    regionLead: 'Southeast Region',
    milestones: [
      { id: 'g1', name: 'Site survey & design approval', category: 'network', status: 'completed', dueDate: '2025-08-15', completedDate: '2025-08-12', owner: 'H. Jackson' },
      { id: 'g2', name: 'Fiber backbone installation', category: 'network', status: 'completed', dueDate: '2025-11-30', completedDate: '2025-11-18', owner: 'H. Jackson' },
      { id: 'g3', name: 'DAS head-end deployment', category: 'network', status: 'completed', dueDate: '2026-02-01', completedDate: '2026-01-28', owner: 'P. Nguyen' },
      { id: 'g4', name: '5G small cell installation', category: 'network', status: 'completed', dueDate: '2026-03-01', completedDate: '2026-02-27', owner: 'P. Nguyen' },
      { id: 'g5', name: 'Edge compute node setup', category: 'network', status: 'in-progress', dueDate: '2026-03-20', owner: 'V. Singh' },
      { id: 'g6', name: 'Network load testing (100K sim)', category: 'testing', status: 'in-progress', dueDate: '2026-04-10', owner: 'R. Thompson', notes: 'Phase 1 complete, phase 2 scheduled' },
      { id: 'g7', name: 'Redundant power validation', category: 'power', status: 'not-started', dueDate: '2026-04-25', owner: 'L. Garcia' },
      { id: 'g8', name: 'NOC integration & monitoring', category: 'operations', status: 'not-started', dueDate: '2026-05-15', owner: 'D. Kim' },
      { id: 'g9', name: 'Final acceptance testing', category: 'testing', status: 'not-started', dueDate: '2026-06-02', owner: 'H. Jackson' },
      { id: 'g10', name: 'Game day readiness sign-off', category: 'operations', status: 'not-started', dueDate: '2026-06-10', owner: 'Executive PMO' }
    ]
  },
  {
    id: 'sofi',
    name: 'SoFi Stadium',
    city: 'Inglewood',
    state: 'CA',
    capacity: 70240,
    firstMatchDate: '2026-06-13',
    hostRound: 'Group Stage & Quarterfinal',
    regionLead: 'West Region',
    milestones: [
      { id: 's1', name: 'Site survey & design approval', category: 'network', status: 'completed', dueDate: '2025-07-01', completedDate: '2025-06-28', owner: 'C. Martinez' },
      { id: 's2', name: 'Fiber backbone installation', category: 'network', status: 'completed', dueDate: '2025-10-15', completedDate: '2025-10-02', owner: 'C. Martinez' },
      { id: 's3', name: 'DAS head-end deployment', category: 'network', status: 'completed', dueDate: '2026-01-15', completedDate: '2026-01-10', owner: 'E. Wong' },
      { id: 's4', name: '5G small cell installation', category: 'network', status: 'completed', dueDate: '2026-02-15', completedDate: '2026-02-12', owner: 'E. Wong' },
      { id: 's5', name: 'Edge compute node setup', category: 'network', status: 'completed', dueDate: '2026-03-01', completedDate: '2026-02-28', owner: 'V. Singh' },
      { id: 's6', name: 'Network load testing (100K sim)', category: 'testing', status: 'completed', dueDate: '2026-03-20', completedDate: '2026-03-18', owner: 'R. Thompson' },
      { id: 's7', name: 'Redundant power validation', category: 'power', status: 'in-progress', dueDate: '2026-04-05', owner: 'L. Garcia' },
      { id: 's8', name: 'NOC integration & monitoring', category: 'operations', status: 'in-progress', dueDate: '2026-04-20', owner: 'D. Kim' },
      { id: 's9', name: 'Final acceptance testing', category: 'testing', status: 'not-started', dueDate: '2026-05-25', owner: 'C. Martinez' },
      { id: 's10', name: 'Game day readiness sign-off', category: 'operations', status: 'not-started', dueDate: '2026-06-10', owner: 'Executive PMO' }
    ]
  },
  {
    id: 'hardrock',
    name: 'Hard Rock Stadium',
    city: 'Miami Gardens',
    state: 'FL',
    capacity: 65326,
    firstMatchDate: '2026-06-15',
    hostRound: 'Group Stage & Third Place',
    regionLead: 'Southeast Region',
    milestones: [
      { id: 'h1', name: 'Site survey & design approval', category: 'network', status: 'completed', dueDate: '2025-09-01', completedDate: '2025-08-29', owner: 'F. Delgado' },
      { id: 'h2', name: 'Fiber backbone installation', category: 'network', status: 'completed', dueDate: '2025-12-15', completedDate: '2025-12-10', owner: 'F. Delgado' },
      { id: 'h3', name: 'DAS head-end deployment', category: 'network', status: 'in-progress', dueDate: '2026-02-15', owner: 'B. Osei', notes: 'Permit delay on east concourse' },
      { id: 'h4', name: '5G small cell installation', category: 'network', status: 'not-started', dueDate: '2026-04-01', owner: 'B. Osei' },
      { id: 'h5', name: 'Edge compute node setup', category: 'network', status: 'not-started', dueDate: '2026-04-15', owner: 'V. Singh' },
      { id: 'h6', name: 'Network load testing (100K sim)', category: 'testing', status: 'not-started', dueDate: '2026-05-01', owner: 'R. Thompson' },
      { id: 'h7', name: 'Redundant power validation', category: 'power', status: 'blocked', dueDate: '2026-04-20', owner: 'L. Garcia', notes: 'Awaiting utility coordination' },
      { id: 'h8', name: 'NOC integration & monitoring', category: 'operations', status: 'not-started', dueDate: '2026-05-20', owner: 'D. Kim' },
      { id: 'h9', name: 'Final acceptance testing', category: 'testing', status: 'not-started', dueDate: '2026-06-03', owner: 'F. Delgado' },
      { id: 'h10', name: 'Game day readiness sign-off', category: 'operations', status: 'not-started', dueDate: '2026-06-10', owner: 'Executive PMO' }
    ]
  },
  {
    id: 'levis',
    name: "Levi's Stadium",
    city: 'Santa Clara',
    state: 'CA',
    capacity: 68500,
    firstMatchDate: '2026-06-13',
    hostRound: 'Group Stage',
    regionLead: 'West Region',
    milestones: [
      { id: 'l1', name: 'Site survey & design approval', category: 'network', status: 'completed', dueDate: '2025-08-01', completedDate: '2025-07-30', owner: 'W. Park' },
      { id: 'l2', name: 'Fiber backbone installation', category: 'network', status: 'completed', dueDate: '2025-11-01', completedDate: '2025-10-28', owner: 'W. Park' },
      { id: 'l3', name: 'DAS head-end deployment', category: 'network', status: 'completed', dueDate: '2026-01-20', completedDate: '2026-01-17', owner: 'E. Wong' },
      { id: 'l4', name: '5G small cell installation', category: 'network', status: 'in-progress', dueDate: '2026-03-10', owner: 'E. Wong', notes: 'On track' },
      { id: 'l5', name: 'Edge compute node setup', category: 'network', status: 'not-started', dueDate: '2026-03-25', owner: 'V. Singh' },
      { id: 'l6', name: 'Network load testing (100K sim)', category: 'testing', status: 'not-started', dueDate: '2026-04-15', owner: 'R. Thompson' },
      { id: 'l7', name: 'Redundant power validation', category: 'power', status: 'not-started', dueDate: '2026-04-30', owner: 'L. Garcia' },
      { id: 'l8', name: 'NOC integration & monitoring', category: 'operations', status: 'not-started', dueDate: '2026-05-10', owner: 'D. Kim' },
      { id: 'l9', name: 'Final acceptance testing', category: 'testing', status: 'not-started', dueDate: '2026-05-28', owner: 'W. Park' },
      { id: 'l10', name: 'Game day readiness sign-off', category: 'operations', status: 'not-started', dueDate: '2026-06-10', owner: 'Executive PMO' }
    ]
  },
  {
    id: 'lincoln',
    name: 'Lincoln Financial Field',
    city: 'Philadelphia',
    state: 'PA',
    capacity: 69796,
    firstMatchDate: '2026-06-14',
    hostRound: 'Group Stage',
    regionLead: 'Northeast Region',
    milestones: [
      { id: 'p1', name: 'Site survey & design approval', category: 'network', status: 'completed', dueDate: '2025-09-01', completedDate: '2025-08-27', owner: 'A. Rivera' },
      { id: 'p2', name: 'Fiber backbone installation', category: 'network', status: 'completed', dueDate: '2025-12-01', completedDate: '2025-11-25', owner: 'J. Chen' },
      { id: 'p3', name: 'DAS head-end deployment', category: 'network', status: 'in-progress', dueDate: '2026-02-20', owner: 'M. Okonkwo' },
      { id: 'p4', name: '5G small cell installation', category: 'network', status: 'not-started', dueDate: '2026-03-25', owner: 'S. Patel' },
      { id: 'p5', name: 'Edge compute node setup', category: 'network', status: 'not-started', dueDate: '2026-04-10', owner: 'V. Singh' },
      { id: 'p6', name: 'Network load testing (100K sim)', category: 'testing', status: 'not-started', dueDate: '2026-04-25', owner: 'R. Thompson' },
      { id: 'p7', name: 'Redundant power validation', category: 'power', status: 'not-started', dueDate: '2026-05-05', owner: 'L. Garcia' },
      { id: 'p8', name: 'NOC integration & monitoring', category: 'operations', status: 'not-started', dueDate: '2026-05-22', owner: 'D. Kim' },
      { id: 'p9', name: 'Final acceptance testing', category: 'testing', status: 'not-started', dueDate: '2026-06-02', owner: 'A. Rivera' },
      { id: 'p10', name: 'Game day readiness sign-off', category: 'operations', status: 'not-started', dueDate: '2026-06-10', owner: 'Executive PMO' }
    ]
  },
  {
    id: 'lumen',
    name: 'Lumen Field',
    city: 'Seattle',
    state: 'WA',
    capacity: 68740,
    firstMatchDate: '2026-06-15',
    hostRound: 'Group Stage',
    regionLead: 'West Region',
    milestones: [
      { id: 'u1', name: 'Site survey & design approval', category: 'network', status: 'completed', dueDate: '2025-08-15', completedDate: '2025-08-10', owner: 'W. Park' },
      { id: 'u2', name: 'Fiber backbone installation', category: 'network', status: 'completed', dueDate: '2025-11-15', completedDate: '2025-11-09', owner: 'W. Park' },
      { id: 'u3', name: 'DAS head-end deployment', category: 'network', status: 'completed', dueDate: '2026-01-31', completedDate: '2026-01-26', owner: 'E. Wong' },
      { id: 'u4', name: '5G small cell installation', category: 'network', status: 'completed', dueDate: '2026-02-28', completedDate: '2026-02-24', owner: 'E. Wong' },
      { id: 'u5', name: 'Edge compute node setup', category: 'network', status: 'in-progress', dueDate: '2026-03-15', owner: 'V. Singh' },
      { id: 'u6', name: 'Network load testing (100K sim)', category: 'testing', status: 'not-started', dueDate: '2026-04-05', owner: 'R. Thompson' },
      { id: 'u7', name: 'Redundant power validation', category: 'power', status: 'not-started', dueDate: '2026-04-20', owner: 'L. Garcia' },
      { id: 'u8', name: 'NOC integration & monitoring', category: 'operations', status: 'not-started', dueDate: '2026-05-12', owner: 'D. Kim' },
      { id: 'u9', name: 'Final acceptance testing', category: 'testing', status: 'not-started', dueDate: '2026-05-30', owner: 'W. Park' },
      { id: 'u10', name: 'Game day readiness sign-off', category: 'operations', status: 'not-started', dueDate: '2026-06-10', owner: 'Executive PMO' }
    ]
  }
];

export function getStadiumProgress(stadium: IStadium): number {
  const completed = stadium.milestones.filter(m => m.status === 'completed').length;
  return Math.round((completed / stadium.milestones.length) * 100);
}

export function getRemainingMilestones(stadium: IStadium): number {
  return stadium.milestones.filter(m => m.status !== 'completed').length;
}

export function getNextMilestone(stadium: IStadium) {
  const pending = stadium.milestones
    .filter(m => m.status !== 'completed')
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  return pending[0];
}

export function getPortfolioStats(stadiums: IStadium[]) {
  const allMilestones: IMilestone[] = [];
  for (let i = 0; i < stadiums.length; i++) {
    const stadium = stadiums[i];
    for (let j = 0; j < stadium.milestones.length; j++) {
      allMilestones.push(stadium.milestones[j]);
    }
  }
  return {
    totalStadiums: stadiums.length,
    totalMilestones: allMilestones.length,
    completed: allMilestones.filter((m: IMilestone) => m.status === 'completed').length,
    inProgress: allMilestones.filter((m: IMilestone) => m.status === 'in-progress').length,
    blocked: allMilestones.filter((m: IMilestone) => m.status === 'blocked').length,
    notStarted: allMilestones.filter((m: IMilestone) => m.status === 'not-started').length,
    overallProgress: Math.round(
      (allMilestones.filter((m: IMilestone) => m.status === 'completed').length / allMilestones.length) * 100
    )
  };
}
