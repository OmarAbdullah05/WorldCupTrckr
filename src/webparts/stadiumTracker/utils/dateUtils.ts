import { ICountdown } from '../models/IStadium';

export function getCountdown(targetDateIso: string, now: Date = new Date()): ICountdown {
  const target = new Date(targetDateIso + 'T00:00:00');
  const diffMs = target.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, isPast: true };
  }

  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return { days, hours, minutes, isPast: false };
}

export function formatDate(dateIso: string): string {
  return new Date(dateIso + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export function daysUntil(dateIso: string, now: Date = new Date()): number {
  const target = new Date(dateIso + 'T00:00:00');
  const diffMs = target.getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function daysOverdue(dateIso: string, now: Date = new Date()): number {
  const remaining = daysUntil(dateIso, now);
  return remaining < 0 ? Math.abs(remaining) : 0;
}
