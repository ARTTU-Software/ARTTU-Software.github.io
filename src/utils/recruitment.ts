import { useState, useEffect } from 'react';

// Recruitment opens on September 25th, 2026 at midnight (00:00:00 local Romanian time UTC+3)
export const RECRUITMENT_START_DATE = new Date('2026-09-25T00:00:00+03:00');

export interface RecruitmentStatus {
  isOpen: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  formattedCountdown: string;
}

function calculateStatus(): RecruitmentStatus {
  // Allow manual override for previewing and testing via query params: ?recruitment=open or ?recruitment=closed
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('recruitment') === 'open') {
      return {
        isOpen: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        formattedCountdown: '00d 00h 00m 00s',
      };
    }
    if (params.get('recruitment') === 'closed') {
      return {
        isOpen: false,
        days: 1,
        hours: 10,
        minutes: 45,
        seconds: 0,
        formattedCountdown: '01d 10h 45m 00s',
      };
    }
  }

  const now = Date.now();
  const diff = RECRUITMENT_START_DATE.getTime() - now;

  if (diff <= 0) {
    return {
      isOpen: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      formattedCountdown: '00d 00h 00m 00s',
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');
  const formattedCountdown = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;

  return {
    isOpen: false,
    days,
    hours,
    minutes,
    seconds,
    formattedCountdown,
  };
}

export function useRecruitmentStatus(): RecruitmentStatus {
  const [status, setStatus] = useState<RecruitmentStatus>(calculateStatus);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextStatus = calculateStatus();
      setStatus(nextStatus);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return status;
}
