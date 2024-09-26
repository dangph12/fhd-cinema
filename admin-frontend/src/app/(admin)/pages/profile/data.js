import logoSm from '@/assets/images/logo-sm.png';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import { addOrSubtractMinutesFromDate } from '@/utils/date';
export const statisticsData = [{
  title: 'Views',
  state: 24,
  icon: 'iconoir:eye',
  subTitle: 'New subscribers this week',
  subIcon: 'iconoir-bell',
  total: 1500,
  variant: 'warning'
}, {
  title: 'Comments',
  state: 24,
  icon: 'iconoir:chat-lines',
  subTitle: 'New Like this week',
  subIcon: 'iconoir:thumbs-up',
  total: 1500,
  variant: 'success'
}];
export const commentsData = [{
  name: 'Martin Luther',
  avatar: avatar2,
  time: addOrSubtractMinutesFromDate(40),
  message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  replies: [{
    avatar: logoSm,
    name: 'Metrica Author',
    time: addOrSubtractMinutesFromDate(37),
    message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  }]
}, {
  name: 'Joseph Rust',
  avatar: avatar1,
  message: 'Is it a long established fact that a reader will be distracted by the readable content of a page when looking at its layout?',
  time: addOrSubtractMinutesFromDate(40)
}, {
  name: 'Matt Rosales',
  avatar: avatar5,
  message: 'Is it a long established fact that a reader will be distracted by the readable content of a page when looking at its layout?',
  time: addOrSubtractMinutesFromDate(40),
  replies: [{
    avatar: logoSm,
    name: 'Metrica Author',
    time: addOrSubtractMinutesFromDate(37),
    message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  }]
}];