import { addOrSubtractMinutesFromDate } from '@/utils/date';
export const notificationsData = [{
  title: 'Your order is placed',
  description: 'Dummy text of the printing and industry.',
  icon: 'iconoir:wolf',
  type: 'project',
  createdAt: addOrSubtractMinutesFromDate(2)
}, {
  title: 'Meeting with designers',
  description: 'It is a long established fact that a reader.',
  icon: 'iconoir:apple-swift',
  type: 'project',
  createdAt: addOrSubtractMinutesFromDate(10)
}, {
  title: 'UX 3 Task complete.',
  description: 'Dummy text of the printing.',
  icon: 'iconoir:birthday-cake',
  type: 'project',
  createdAt: addOrSubtractMinutesFromDate(40)
}, {
  title: 'Your order is placed',
  description: 'It is a long established fact that a reader.',
  icon: 'iconoir:drone',
  type: 'team',
  createdAt: addOrSubtractMinutesFromDate(60)
}, {
  title: 'Payment Successfull',
  description: 'Dummy text of the printing.',
  icon: 'iconoir:user',
  type: 'team',
  createdAt: addOrSubtractMinutesFromDate(120)
}];