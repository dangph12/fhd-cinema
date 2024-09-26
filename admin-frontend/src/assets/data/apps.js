import { addOrSubtractMinutesFromDate } from '@/utils/date';
import { users } from './other';
import illustration1 from '@/assets/images/extra/ill-1.png';
import illustration2 from '@/assets/images/extra/ill-2.png';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
export const kanbanSectionsData = [{
  id: '501',
  title: 'To Do'
}, {
  id: '502',
  title: 'In Progress'
}, {
  id: '503',
  title: 'Review'
}, {
  id: '504',
  title: 'Done'
}];
export const kanbanTasksData = [{
  id: '601',
  sectionId: '501',
  priority: 'Medium',
  title: 'Simple Design',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 3,
  totalTasks: 16,
  completedTasks: 11
}, {
  id: '602',
  sectionId: '501',
  priority: 'Low',
  title: 'UI/UX Design img.',
  image: illustration2,
  commentsCount: 6,
  totalTasks: 2,
  completedTasks: 0
}, {
  id: '603',
  sectionId: '501',
  priority: 'High',
  title: 'Strong Password',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  tags: ['API', 'Form Submit', 'Responsive'],
  commentsCount: 12,
  totalTasks: 4,
  completedTasks: 0
}, {
  id: '604',
  sectionId: '501',
  priority: 'Medium',
  title: 'Multi Color Dashboard',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 45,
  totalTasks: 4,
  completedTasks: 0
}, {
  id: '605',
  sectionId: '502',
  priority: 'High',
  title: 'Nodejs setup',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 34,
  tags: ['API', 'Form Submit'],
  totalTasks: 3,
  completedTasks: 0
}, {
  id: '606',
  sectionId: '502',
  priority: 'Medium',
  title: 'Add Animation Page',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 56,
  totalTasks: 5,
  completedTasks: 0
}, {
  id: '607',
  sectionId: '502',
  priority: 'Medium',
  title: 'QR code issue fix',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  image: illustration1,
  commentsCount: 38,
  totalTasks: 15,
  completedTasks: 7
}, {
  id: '608',
  sectionId: '502',
  priority: 'Low',
  title: 'UI/UX Design img.',
  image: illustration2,
  commentsCount: 23,
  totalTasks: 5,
  completedTasks: 0
}, {
  id: '609',
  sectionId: '503',
  priority: 'Low',
  title: 'Figma Layer Setup',
  image: illustration1,
  commentsCount: 53,
  totalTasks: 5,
  completedTasks: 0
}, {
  id: '610',
  sectionId: '503',
  priority: 'High',
  title: 'Components BS 5',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 73,
  tags: ['Form Submit', 'Responsive'],
  totalTasks: 5,
  completedTasks: 0
}, {
  id: '611',
  sectionId: '503',
  priority: 'Medium',
  title: 'Live data in data table',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 67,
  totalTasks: 6,
  completedTasks: 0
}, {
  id: '612',
  sectionId: '503',
  priority: 'High',
  title: 'ReactJs setup',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 64,
  totalTasks: 8,
  completedTasks: 5
}, {
  id: '613',
  sectionId: '504',
  priority: 'Low',
  title: 'Photoshop 7',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 21,
  totalTasks: 3,
  completedTasks: 0
}, {
  id: '614',
  sectionId: '504',
  priority: 'Medium',
  title: 'Mobile Account Setting',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 12,
  totalTasks: 12,
  completedTasks: 12
}, {
  id: '615',
  sectionId: '504',
  priority: 'Low',
  title: 'UI/UX Design img.',
  image: illustration1,
  commentsCount: 6,
  totalTasks: 2,
  completedTasks: 0
}, {
  id: '616',
  sectionId: '504',
  priority: 'High',
  title: 'Mobile Account Setting',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
  commentsCount: 7,
  tags: ['API', 'Responsive'],
  totalTasks: 8,
  completedTasks: 0
}];
export const messages = [];
const defaultTo = {
  id: '103',
  name: 'Gilbert Chicoine',
  avatar: avatar10,
  handle: '@gilbert',
  role: 'User',
  source: 'Direct',
  status: 'Active',
  email: 'jamesbridge@teleworm.us',
  lastMessage: 'Hey! Okay, thank you for letting me know. See you!',
  lastActivity: addOrSubtractMinutesFromDate(1),
  phoneNo: '456 9595 9594',
  activityStatus: 'typing'
};
for (const user of users) {
  messages.push({
    id: '101',
    to: defaultTo,
    from: user,
    message: 'Good Morning !',
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '102',
    to: defaultTo,
    from: user,
    message: 'There are many variations of passages of Lorem Ipsum available.',
    sentOn: addOrSubtractMinutesFromDate(100)
  }, {
    id: '103',
    to: user,
    from: defaultTo,
    message: 'Hi,',
    sentOn: addOrSubtractMinutesFromDate(90)
  }, {
    id: '104',
    to: user,
    from: defaultTo,
    message: 'Can be verified on any platform using docker?',
    sentOn: addOrSubtractMinutesFromDate(85)
  }, {
    id: '105',
    to: defaultTo,
    from: user,
    message: 'Have a nice day !',
    sentOn: addOrSubtractMinutesFromDate(80)
  }, {
    id: '106',
    to: defaultTo,
    from: user,
    message: "Command was run with root privileges. I'm sure about that.",
    sentOn: addOrSubtractMinutesFromDate(75)
  }, {
    id: '107',
    to: defaultTo,
    from: user,
    message: 'ok',
    sentOn: addOrSubtractMinutesFromDate(70)
  }, {
    id: '108',
    to: user,
    from: defaultTo,
    message: "Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :)",
    sentOn: addOrSubtractMinutesFromDate(65)
  }, {
    id: '109',
    to: defaultTo,
    from: user,
    message: 'Sorry, I just back !',
    sentOn: addOrSubtractMinutesFromDate(22)
  }, {
    id: '110',
    to: defaultTo,
    from: user,
    message: 'It seems like you are from Mac OS world. There is no /Users/ folder on linux 😄',
    sentOn: addOrSubtractMinutesFromDate(5)
  }, {
    id: '111',
    to: user,
    from: defaultTo,
    message: 'Good Morning !',
    sentOn: addOrSubtractMinutesFromDate(3)
  }, {
    id: '112',
    to: user,
    from: defaultTo,
    message: 'There are many variations of passages of Lorem Ipsum available.',
    sentOn: addOrSubtractMinutesFromDate(1)
  });
}