import * as React from 'react';
import { IStadium, IMilestone } from '../models/IStadium';
import { formatDate, daysUntil, daysOverdue } from '../utils/dateUtils';
import styles from './StadiumTracker.module.scss';

export interface IMilestoneTimelineProps {
  stadium: IStadium;
}

const statusLabel: Record<IMilestone['status'], string> = {
  'completed': 'Complete',
  'in-progress': 'In progress',
  'not-started': 'Not started',
  'blocked': 'Blocked'
};

const categoryLabel: Record<IMilestone['category'], string> = {
  network: 'Network',
  power: 'Power',
  testing: 'Testing',
  operations: 'Operations'
};

function getStatusClass(status: IMilestone['status']): string {
  switch (status) {
    case 'completed': return styles.status_completed;
    case 'in-progress': return styles.status_inprogress;
    case 'not-started': return styles.status_notstarted;
    case 'blocked': return styles.status_blocked;
  }
}

const MilestoneTimeline: React.FC<IMilestoneTimelineProps> = ({ stadium }) => {
  const remaining = stadium.milestones.filter(m => m.status !== 'completed');
  const completed = stadium.milestones.filter(m => m.status === 'completed');

  return (
    <div className={styles.milestonePanel}>
      <div className={styles.milestonePanelHeader}>
        <div>
          <h2>{stadium.name}</h2>
          <p className={styles.milestoneSubtitle}>
            {stadium.city}, {stadium.state} · {stadium.hostRound} · {stadium.regionLead}
          </p>
        </div>
        <div className={styles.gameDayChip}>
          <span className={styles.gameDayLabel}>First match</span>
          <span className={styles.gameDayDate}>{formatDate(stadium.firstMatchDate)}</span>
          <span className={styles.gameDayCountdown}>
            {daysUntil(stadium.firstMatchDate)} days away
          </span>
        </div>
      </div>

      <section className={styles.milestoneSection}>
        <h3 className={styles.sectionTitle}>
          Remaining milestones ({remaining.length})
        </h3>
        {remaining.length === 0 ? (
          <p className={styles.allComplete}>All milestones complete — ready for game day!</p>
        ) : (
          <ul className={styles.milestoneList}>
            {remaining.map(milestone => (
              <li key={milestone.id} className={`${styles.milestoneItem} ${getStatusClass(milestone.status)}`}>
                <div className={styles.milestoneMain}>
                  <span className={styles.milestoneStatus}>{statusLabel[milestone.status]}</span>
                  <span className={styles.milestoneName}>{milestone.name}</span>
                </div>
                <div className={styles.milestoneDetails}>
                  <span className={styles.milestoneCategory}>{categoryLabel[milestone.category]}</span>
                  <span className={styles.milestoneDue}>Due {formatDate(milestone.dueDate)}</span>
                  {milestone.status !== 'completed' && daysOverdue(milestone.dueDate) > 0 && (
                    <span className={styles.overdue}>{daysOverdue(milestone.dueDate)} days overdue</span>
                  )}
                  {milestone.status !== 'completed' && daysOverdue(milestone.dueDate) === 0 && (
                    <span className={styles.daysLeft}>{daysUntil(milestone.dueDate)} days left</span>
                  )}
                  <span className={styles.milestoneOwner}>{milestone.owner}</span>
                </div>
                {milestone.notes && <p className={styles.milestoneNotes}>{milestone.notes}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>

      {completed.length > 0 && (
        <section className={styles.milestoneSection}>
          <h3 className={styles.sectionTitle}>Completed ({completed.length})</h3>
          <ul className={`${styles.milestoneList} ${styles.completedList}`}>
            {completed.map(milestone => (
              <li key={milestone.id} className={`${styles.milestoneItem} ${styles.status_completed}`}>
                <div className={styles.milestoneMain}>
                  <span className={styles.milestoneStatus}>Complete</span>
                  <span className={styles.milestoneName}>{milestone.name}</span>
                </div>
                <div className={styles.milestoneDetails}>
                  <span className={styles.milestoneDue}>
                    Done {milestone.completedDate ? formatDate(milestone.completedDate) : ''}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default MilestoneTimeline;
