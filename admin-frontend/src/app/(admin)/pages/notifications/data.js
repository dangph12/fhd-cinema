import { addOrSubtractMinutesFromDate } from '@/utils/date';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
export const notifications = {
  Today: [{
    avatar: avatar10,
    title: 'Appointment with Charles Reiter',
    description: 'Please ensure you have all necessary documents or items required for the appointment',
    time: addOrSubtractMinutesFromDate(70)
  }, {
    avatar: avatar1,
    title: 'New Session booked by Joseph Rust',
    description: 'Please confirm this appointment and let us know if you have any preferences or special requirements. Looking forward to our session together!',
    time: addOrSubtractMinutesFromDate(90)
  }, {
    avatar: avatar9,
    title: 'Payment Not Added',
    description: 'This is to inform you that your recent payment has not been successfully processed. Please review your payment method and ensure that sufficient funds are available or that the provided details are accurate.',
    time: addOrSubtractMinutesFromDate(130)
  }],
  Yesterday: [{
    avatar: avatar2,
    title: 'Password change email sent',
    description: 'This is to inform you that your password has been successfully changed for your account.',
    time: addOrSubtractMinutesFromDate(160)
  }, {
    avatar: avatar3,
    title: 'Meeting at 07:45 PM',
    description: "Meeting Reminder: Just a quick heads-up about your meeting tonight at 07:45 PM. Don't forget to prep any necessary materials and jot down any questions or topics you'd like to discuss.",
    time: addOrSubtractMinutesFromDate(170)
  }, {
    avatar: avatar4,
    title: 'Payment Not Added',
    description: 'This is to inform you that your recent payment has not been successfully processed. Please review your payment method and ensure that sufficient funds are available or that the provided details are accurate.',
    time: addOrSubtractMinutesFromDate(220)
  }, {
    avatar: avatar8,
    title: 'Payment Not Added',
    description: 'This is to inform you that your recent payment has not been successfully processed. Please review your payment method and ensure that sufficient funds are available or that the provided details are accurate.',
    time: addOrSubtractMinutesFromDate(300)
  }],
  '01 June 2024': [{
    avatar: avatar5,
    title: 'New system upgrade',
    description: 'During this time, access may be temporarily limited. We appreciate your patience and understanding as we work to improve your experience. Stay tuned for more details!',
    time: addOrSubtractMinutesFromDate(320)
  }, {
    avatar: avatar7,
    title: 'New Session booked by Joseph Rust',
    description: 'Please confirm this appointment and let us know if you have any preferences or special requirements. Looking forward to our session together!',
    time: addOrSubtractMinutesFromDate(350)
  }]
};