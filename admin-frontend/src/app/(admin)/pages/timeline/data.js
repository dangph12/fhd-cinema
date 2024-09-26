import { addOrSubtractMinutesFromDate } from '@/utils/date';
export const timelineData = [{
  title: 'Task finished',
  description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
  time: addOrSubtractMinutesFromDate(10),
  icon: 'la:check-circle',
  variant: 'text-primary',
  date: new Date('09/18/2024')
}, {
  title: 'Task Overdue',
  description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
  tags: ['Design', 'HTML'],
  time: addOrSubtractMinutesFromDate(50),
  icon: 'la:user-clock',
  variant: 'text-danger',
  date: new Date('08/10/2024')
}, {
  title: 'New Task',
  description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
  time: addOrSubtractMinutesFromDate(600),
  icon: 'la:clipboard-check',
  variant: 'text-primary',
  date: new Date('08/10/2024')
}, {
  title: 'New Comment',
  description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
  time: addOrSubtractMinutesFromDate(1400),
  icon: 'la:comment-dots',
  variant: 'text-danger',
  date: new Date('08/10/2024')
}, {
  title: 'New Lead Meeting',
  description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
  time: addOrSubtractMinutesFromDate(1600),
  icon: 'la:user-friends',
  variant: 'text-primary',
  date: new Date('06/07/2024')
}];