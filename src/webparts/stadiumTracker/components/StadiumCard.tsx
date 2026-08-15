import * as React from 'react';
import { IStadium } from '../models/IStadium';
import { getCountdown, formatDate } from '../utils/dateUtils';
import { getStadiumProgress, getRemainingMilestones, getNextMilestone } from '../data/stadiumData';
import styles from './StadiumTracker.module.scss';

export interface IStadiumCardProps {
  stadium: IStadium;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const StadiumCard: React.FC<IStadiumCardProps> = ({ stadium, isSelected, onSelect }) => {
  const progress = getStadiumProgress(stadium);
  const remaining = getRemainingMilestones(stadium);
  const nextMilestone = getNextMilestone(stadium);
  const countdown = getCountdown(stadium.firstMatchDate);
  const hasBlocked = stadium.milestones.some(m => m.status === 'blocked');

  return (
    <button
      type="button"
      className={`${styles.stadiumCard} ${isSelected ? styles.stadiumCardSelected : ''} ${hasBlocked ? styles.stadiumCardAtRisk : ''}`}
      onClick={() => onSelect(stadium.id)}
    >
      <div className={styles.stadiumCardHeader}>
        <div>
          <h3 className={styles.stadiumName}>{stadium.name}</h3>
          <span className={styles.stadiumLocation}>{stadium.city}, {stadium.state}</span>
        </div>
        <span className={styles.progressBadge}>{progress}%</span>
      </div>

      <div className={styles.progressBarTrack}>
        <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.stadiumMeta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>First match</span>
          <span className={styles.metaValue}>{formatDate(stadium.firstMatchDate)}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Countdown</span>
          <span className={styles.metaValue}>
            {countdown.isPast ? 'Live' : `${countdown.days}d ${countdown.hours}h`}
          </span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Remaining</span>
          <span className={styles.metaValue}>{remaining} milestones</span>
        </div>
      </div>

      {nextMilestone && (
        <div className={styles.nextUp}>
          <span className={styles.nextUpLabel}>Next up:</span> {nextMilestone.name}
        </div>
      )}

      {hasBlocked && <span className={styles.riskFlag}>At risk</span>}
    </button>
  );
};

export default StadiumCard;
