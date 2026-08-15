import * as React from 'react';
import { useState } from 'react';
import styles from './StadiumTracker.module.scss';
import type { IStadiumTrackerProps } from './IStadiumTrackerProps';
import { STADIUMS } from '../data/stadiumData';
import DashboardHeader from './DashboardHeader';
import StadiumCard from './StadiumCard';
import MilestoneTimeline from './MilestoneTimeline';

const StadiumTracker: React.FC<IStadiumTrackerProps> = () => {
  const [selectedId, setSelectedId] = useState<string>(STADIUMS[0].id);
  const selectedStadium = STADIUMS.filter(s => s.id === selectedId)[0] ?? STADIUMS[0];

  return (
    <section className={styles.stadiumTracker}>
      <DashboardHeader />

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Stadiums</h2>
          <div className={styles.stadiumGrid}>
            {STADIUMS.map(stadium => (
              <StadiumCard
                key={stadium.id}
                stadium={stadium}
                isSelected={stadium.id === selectedId}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </aside>

        <main className={styles.main}>
          <MilestoneTimeline stadium={selectedStadium} />
        </main>
      </div>
    </section>
  );
};

export default StadiumTracker;
