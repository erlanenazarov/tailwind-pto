import HRISLogo from 'assets/img/hris-logo.png';
import WorkdayUrl from 'assets/img/workDay.png';
import XeroUrl from 'assets/img/xero.png';
import RipplingUrl from 'assets/img/rippling.png';
import ExpensifyUrl from 'assets/img/expensify.png';
import ZenefitsUrl from 'assets/img/zenefits.png';

import { IMediaItem, EMediaItemCorner } from 'containers/MediaDisplay/types';

import { ITabItem } from './types';

export const tabs: ITabItem[] = [
  {
    key: 'small_business',
    label: 'Small Business',
    collection: ['zenefits', 'workday'],
  },
  {
    key: 'medium_business',
    label: 'Medium Business',
    collection: ['xero', 'expensify'],
  },
  {
    key: 'enterprise',
    label: 'Enterprise',
    collection: ['sapling', 'workday', 'rippling', 'expensify', 'zenefits'],
  },
];

export const mediaItems: IMediaItem[] = [
  {
    id: 'sapling',
    title: 'Sapling',
    caption: 'HR Management',
    image: HRISLogo,
    corner: EMediaItemCorner.LEFT,
  },
  {
    id: 'workday',
    title: 'Workday',
    caption: 'HR Management',
    image: WorkdayUrl,
    corner: EMediaItemCorner.LEFT,
  },
  {
    id: 'xero',
    title: 'Xero',
    caption: 'Employers Base',
    image: XeroUrl,
    corner: EMediaItemCorner.LEFT,
  },
  {
    id: 'rippling',
    title: 'Rippling',
    caption: 'Salary Management',
    image: RipplingUrl,
    corner: EMediaItemCorner.RIGHT,
  },
  {
    id: 'expensify',
    title: 'Expensify',
    caption: 'HR Management',
    image: ExpensifyUrl,
    corner: EMediaItemCorner.RIGHT,
  },
  {
    id: 'zenefits',
    title: 'Zenefits',
    caption: 'HR Management',
    image: ZenefitsUrl,
    corner: EMediaItemCorner.RIGHT,
  },
];
