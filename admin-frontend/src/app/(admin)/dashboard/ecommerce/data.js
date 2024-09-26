import { currency } from '@/context/constants';
import usFlag from '@/assets/images/flags/us_flag.jpg';
import spainFlag from '@/assets/images/flags/spain_flag.jpg';
import germanyFlag from '@/assets/images/flags/germany_flag.jpg';
import bahaFlag from '@/assets/images/flags/baha_flag.jpg';
import frenchFlag from '@/assets/images/flags/french_flag.jpg';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
export const statData = [{
  title: 'Total Revenue',
  icon: 'icofont-money-bag',
  stat: `${currency}8365.00`,
  change: 8.5,
  subTitle: 'New Sessions Today',
  buttonVariant: 'primary'
}, {
  title: 'New Order',
  icon: 'icofont-opencart',
  stat: '722',
  change: 8.5,
  subTitle: 'New Sessions Today',
  buttonVariant: 'outline-secondary'
}];
export const incomeStatData = [{
  title: "Today's Revenue",
  stat: `${currency}24,500`
}, {
  title: 'Conversion Rate',
  stat: '82.8%'
}, {
  title: 'Total Expenses',
  stat: `${currency}9982.00`
}, {
  title: 'Avg. Value',
  stat: `${currency}80.5`
}];
export const topCountriesSellingData = [{
  flagImage: usFlag,
  name: 'USA',
  progress: 85,
  amount: 5860.0
}, {
  flagImage: spainFlag,
  name: 'Spain',
  progress: 78,
  amount: 5422.0
}, {
  flagImage: frenchFlag,
  name: 'French',
  progress: 71,
  amount: 4587.0
}, {
  flagImage: germanyFlag,
  name: 'Germany',
  progress: 65,
  amount: 3655.0
}, {
  flagImage: bahaFlag,
  name: 'Bahamas',
  progress: 48,
  amount: 3325.0
}];
export const recentOrders = [{
  id: '#3652',
  name: 'Scott Holland',
  image: avatar1,
  amount: 3325.0
}, {
  id: '#4789',
  name: 'Karen Savage',
  image: avatar2,
  amount: 2548.0
}, {
  id: '#4521',
  name: 'Steven Sharp',
  image: avatar3,
  amount: 2985.0
}, {
  id: '#3269',
  name: 'Teresa Himes',
  image: avatar4,
  amount: 1845.0
}, {
  id: '#4521',
  name: 'Ralph Denton',
  image: avatar5,
  amount: 1422.0
}];