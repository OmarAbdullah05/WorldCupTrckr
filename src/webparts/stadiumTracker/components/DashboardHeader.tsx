import * as React from 'react';
import { STADIUMS, GAME_DAY_ANCHOR, getPortfolioStats } from '../data/stadiumData';
import { getCountdown, formatDate } from '../utils/dateUtils';
import styles from './StadiumTracker.module.scss';

const DashboardHeader: React.FC = () => {
  const stats = getPortfolioStats(STADIUMS);
  const tournamentCountdown = getCountdown(GAME_DAY_ANCHOR);

  return (
    <header className={styles.header}>
      <div className={styles.headerBrand}>
        <div className={styles.verizonMark}>V</div>
        <div>
          <h1 className={styles.title}>World Cup 2026 Infrastructure Tracker</h1>
          <p className={styles.subtitle}>Verizon stadium network readiness · FIFA World Cup USA venues</p>
        </div>
      </div>

      <div className={styles.headerStats}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{stats.totalStadiums}</span>
          <span className={styles.statLabel}>Stadiums</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{stats.overallProgress}%</span>
          <span className={styles.statLabel}>Overall progress</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{stats.inProgress}</span>
          <span className={styles.statLabel}>In progress</span>
        </div>
        <div className={`${styles.statCard} ${stats.blocked > 0 ? styles.statCardAlert : ''}`}>
          <span className={styles.statValue}>{stats.blocked}</span>
          <span className={styles.statLabel}>Blocked</span>
        </div>
        <div className={styles.statCardHighlight}>
          <span className={styles.statLabel}>Tournament opens</span>
          <span className={styles.statValueLarge}>{formatDate(GAME_DAY_ANCHOR)}</span>
          <span className={styles.countdownText}>
            {tournamentCountdown.isPast
              ? 'Tournament underway'
              : `${tournamentCountdown.days} days · ${tournamentCountdown.hours} hours`}
          </span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
