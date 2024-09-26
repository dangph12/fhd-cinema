import { currency } from '@/context/constants';
export const statData = [{
  title: 'Total Cost',
  subText: 'New 365 Days',
  stat: `${currency}27,215k`,
  icon: 'iconoir:dollar-circle',
  variant: 'info'
}, {
  title: 'Total Order',
  subText: 'Order 365 Days',
  stat: '190',
  icon: 'iconoir:cart',
  variant: 'blue'
}, {
  title: 'Completed',
  subText: 'Comp. Order 365 Days',
  stat: '165',
  icon: 'iconoir:thumbs-up',
  variant: 'primary'
}, {
  title: 'Canceled',
  subText: 'Canc. Order 365 Days',
  stat: '25',
  icon: 'iconoir:xmark-circle',
  variant: 'danger'
}];