// Icons
import DeviceIcon from '@/assets/media/svg/device_3.svg';
import GuardIcon from '@/assets/media/svg/guard.svg';
import InfinityIcon from '@/assets/media/svg/infinity.svg';
import ChatIcon from '@/assets/media/svg/chat.svg';
import MoneyBackIcon from '@/assets/media/svg/moneyBack.svg';
import DownloadsIcon from '@/assets/media/svg/downloads.svg';

const THIRTY_MINUTES_IN_MS = 60 * 30 * 1000;
const NOW_IN_MS = new Date().getTime();

export const DATE_TIME_AFTER_THIRTY_MINUTES = NOW_IN_MS + THIRTY_MINUTES_IN_MS;

export const whatYouGetList = [
  { text: 'Protection for 3 devices', icon: <DeviceIcon /> },
  { text: 'Anti-spy checkup', icon: <GuardIcon /> },
  { text: 'Unlimited access to anti-spying tools', icon: <InfinityIcon /> },
  { text: '24/7 help from security experts', icon: <ChatIcon /> },
];

export const guaranteeList = [
  { text: '30-day money-back guarantee', icon: <MoneyBackIcon /> },
  { text: '100.000 + downloads', icon: <DownloadsIcon /> },
];
