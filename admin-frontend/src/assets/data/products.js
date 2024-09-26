import product1 from '@/assets/images/products/01.png';
import product2 from '@/assets/images/products/02.png';
import product3 from '@/assets/images/products/03.png';
import product4 from '@/assets/images/products/04.png';
import product5 from '@/assets/images/products/05.png';
import product6 from '@/assets/images/products/06.png';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import { addOrSubtractDaysFromDate } from '@/utils/date';
export const products = [{
  id: '1001',
  name: 'Apple Watch',
  description: 'Size-05 (Model 2021)',
  image: product4,
  category: 'Sports',
  pics: 32,
  price: 70,
  sellPrice: 50,
  sellsCount: 450,
  status: 'In Stock',
  createdAt: addOrSubtractDaysFromDate(1),
  paymentType: 'UPI'
}, {
  id: '1002',
  name: 'Morden Chair',
  description: 'Size-Mediam (Model 2021)',
  image: product1,
  category: 'Interior',
  pics: 10,
  price: 150,
  sellPrice: 99,
  sellsCount: 750,
  status: 'Out of Stock',
  createdAt: addOrSubtractDaysFromDate(2),
  paymentType: 'Banking'
}, {
  id: '1003',
  name: 'Reebok Shoes',
  description: 'size-08 (Model 2021)',
  image: product5,
  category: 'Footwear',
  pics: 24,
  price: 149,
  sellPrice: 49,
  sellsCount: 280,
  status: 'Inactive',
  createdAt: addOrSubtractDaysFromDate(3),
  paymentType: 'Paypal'
}, {
  id: '1004',
  name: 'Cosco Vollyboll',
  description: 'size-04 (Model 2021)',
  image: product6,
  category: 'Sports',
  pics: 8,
  price: 139,
  sellPrice: 100,
  sellsCount: 500,
  status: 'In Stock',
  createdAt: addOrSubtractDaysFromDate(5),
  paymentType: 'UPI'
}, {
  id: '1005',
  name: 'Royal Purse',
  description: 'Pure Lether 100%',
  image: product4,
  category: 'Life Style',
  pics: 52,
  price: 89,
  sellPrice: 59,
  sellsCount: 800,
  status: 'Published',
  createdAt: addOrSubtractDaysFromDate(7),
  paymentType: 'BTC'
}, {
  id: '1006',
  name: 'New Morden Chair',
  description: 'size-05 (Model 2021)',
  image: product3,
  category: 'Interior',
  pics: 6,
  price: 20,
  sellPrice: 20,
  sellsCount: 6,
  status: 'Inactive',
  createdAt: addOrSubtractDaysFromDate(8),
  paymentType: 'Banking'
}, {
  id: '1007',
  name: 'Important Chair',
  description: 'size-05 (Model 2021)',
  image: product2,
  category: 'Interior',
  pics: 32,
  price: 39,
  sellPrice: 39,
  sellsCount: 32,
  status: 'Out of Stock',
  createdAt: addOrSubtractDaysFromDate(3),
  paymentType: 'UPI'
}, {
  id: '1008',
  name: 'Nivya Footboll',
  description: 'Size-05 (Model 2021)',
  image: product2,
  category: 'Sports',
  pics: 32,
  price: 39,
  sellPrice: 39,
  sellsCount: 32,
  status: 'Inactive',
  createdAt: addOrSubtractDaysFromDate(12),
  paymentType: 'Paypal'
}, {
  id: '1009',
  name: 'Green Morden Chair',
  description: 'Size-Mediam (Model 2021)',
  image: product1,
  category: 'Interior',
  pics: 10,
  price: 99,
  sellPrice: 99,
  sellsCount: 10,
  status: 'Published',
  createdAt: addOrSubtractDaysFromDate(16),
  paymentType: 'UPI'
}, {
  id: '1010',
  name: 'Bata Shoes',
  description: 'size-08 (Model 2021)',
  image: product1,
  category: 'Footwear',
  pics: 24,
  price: 49,
  sellPrice: 49,
  sellsCount: 24,
  status: 'Out of Stock',
  createdAt: addOrSubtractDaysFromDate(33),
  paymentType: 'BTC'
}, {
  id: '1011',
  name: 'Cosco Vollyboll',
  description: 'size-04 (Model 2021)',
  image: product6,
  category: 'Sports',
  pics: 8,
  price: 49,
  sellPrice: 49,
  sellsCount: 8,
  status: 'Published',
  createdAt: addOrSubtractDaysFromDate(11),
  paymentType: 'UPI'
}, {
  id: '1012',
  name: 'Royal Purse',
  description: 'Pure Lether 100%',
  image: product4,
  category: 'Life Style',
  pics: 52,
  price: 89,
  sellPrice: 89,
  sellsCount: 52,
  status: 'Published',
  createdAt: addOrSubtractDaysFromDate(4),
  paymentType: 'Banking'
}, {
  id: '1013',
  name: 'New Morden Chair',
  description: 'size-05 (Model 2021)',
  image: product3,
  category: '	Interior',
  pics: 6,
  price: 60,
  sellPrice: 20,
  sellsCount: 52,
  status: 'Published',
  createdAt: addOrSubtractDaysFromDate(5),
  paymentType: 'Paypal'
}];
export const ordersData = [{
  id: '5001',
  productId: '1001',
  quantity: 3,
  total: 150
}, {
  id: '5002',
  productId: '1002',
  quantity: 1,
  total: 99
}, {
  id: '5003',
  productId: '1003',
  quantity: 4,
  total: 196
}, {
  id: '5004',
  productId: '1004',
  quantity: 10,
  total: 1000
}, {
  id: '5005',
  productId: '1005',
  quantity: 2,
  total: 118
}];
export const customers = [{
  id: '2001',
  name: 'Andy Timmons',
  avatar: avatar2,
  email: 'dummy@dummy.com',
  order: 75,
  spend: 280,
  status: 'New',
  city: 'Curicó',
  startDate: new Date('2005/02/11'),
  completion: 37
}, {
  id: '2002',
  name: 'Jeff Beck',
  avatar: avatar3,
  email: 'fake@dummy.com',
  order: 65,
  spend: 150,
  status: 'Inactive',
  city: '	Dhanbad',
  startDate: new Date('1999/04/07'),
  completion: 97
}, {
  id: '2003',
  name: 'Vince Nelson',
  avatar: avatar4,
  email: 'exemple@dummy.com',
  order: 32,
  spend: 39,
  status: 'Repeat',
  city: '	Norman',
  startDate: new Date('2005/09/08'),
  completion: 63
}, {
  id: '2004',
  name: 'David Gilmour',
  avatar: avatar5,
  email: 'only@dummy.com',
  order: 40,
  spend: 170,
  status: 'Inactive',
  city: 'Amqui',
  startDate: new Date('2009/05/11'),
  completion: 30
}, {
  id: '2005',
  name: 'Dianna Smiley',
  avatar: avatar6,
  email: 'dummy@exemple.com',
  order: 80,
  spend: 220,
  status: 'New',
  city: 'Kempten',
  startDate: new Date('2006/11/09'),
  completion: 17
}, {
  id: '2006',
  name: 'Adolfo Hess',
  avatar: avatar7,
  email: 'dummy2dummay@dummy.com',
  order: 45,
  spend: 120,
  status: 'New',
  city: 'Enines',
  startDate: new Date('2006/03/08'),
  completion: 57
}, {
  id: '2007',
  name: 'James Ahern',
  avatar: avatar8,
  email: 'dummy10@dummy.com',
  order: 88,
  spend: 580,
  status: 'Repeat',
  city: 'Neath',
  startDate: new Date('2014/03/12'),
  completion: 93
}, {
  id: '2008',
  name: 'Simon Young',
  avatar: avatar9,
  email: 'totaldummy@dummy.com',
  order: 124,
  spend: 380,
  status: 'Inactive',
  city: 'Cobourg',
  startDate: new Date('2014/10/08'),
  completion: 100
}, {
  id: '2009',
  name: 'Robert Lewis',
  avatar: avatar10,
  email: 'Exemple@dummy.com',
  order: 84,
  spend: 254,
  status: 'Inactive',
  city: 'Eberswalde-Finow',
  startDate: new Date('2014/02/08'),
  completion: 44
}, {
  id: '2010',
  name: 'Erik Brim',
  avatar: avatar1,
  email: 'onlyfake@dummy.com',
  order: 62,
  spend: 225,
  status: 'New',
  city: '	Moircy',
  startDate: new Date('2000/11/01'),
  completion: 33
}, {
  id: '2011',
  name: 'Kevin Powers',
  avatar: avatar5,
  email: 'exemple@exe.com',
  order: 54,
  spend: 345,
  status: 'Repeat',
  city: '	Cobourg',
  startDate: new Date('2014/12/08'),
  completion: 100
}, {
  id: '2012',
  name: 'Wendy Keen',
  avatar: avatar3,
  email: 'Exemple@dummy.com',
  order: 32,
  spend: 39,
  status: 'New',
  city: '	Cobourg',
  startDate: new Date('2014/11/08'),
  completion: 100
}, {
  id: '2013',
  name: 'Wendy Keen',
  avatar: avatar1,
  email: 'Exemple@dummy.com',
  order: 32,
  spend: 39,
  status: 'New',
  city: '	Cobourg',
  startDate: new Date('2014/03/11'),
  completion: 100
}];