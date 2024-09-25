import { addOrSubtractDaysFromDate } from '@/utils/date';
import usFlag from '@/assets/images/flags/us_flag.jpg';
import spainFlag from '@/assets/images/flags/spain_flag.jpg';
import germanyFlag from '@/assets/images/flags/germany_flag.jpg';
import bahaFlag from '@/assets/images/flags/baha_flag.jpg';
import frenchFlag from '@/assets/images/flags/french_flag.jpg';
import russiaFlag from '@/assets/images/flags/russia_flag.jpg';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import nextJsLogo from '@/assets/images/logos/lang-logo/nextjs.png';
import reactJsLogo from '@/assets/images/logos/lang-logo/reactjs.png';
import svelteLogo from '@/assets/images/logos/lang-logo/svelte.png';
import vueLogo from '@/assets/images/logos/lang-logo/vue.png';
import symfonyLogo from '@/assets/images/logos/lang-logo/symfony.png';
import nodeJsLogo from '@/assets/images/logos/lang-logo/nodejs.png';
import metaLogo from '@/assets/images/logos/lang-logo/meta.png';
import gitlabLogo from '@/assets/images/logos/lang-logo/gitlab.png';
import chatgptLogo from '@/assets/images/logos/lang-logo/chatgpt.png';
import dropboxLogo from '@/assets/images/logos/lang-logo/dropbox.png';
import slackLogo from '@/assets/images/logos/lang-logo/slack.png';
import dribbbleLogo from '@/assets/images/logos/lang-logo/dribbble.png';
import googleDrive from '@/assets/images/logos/lang-logo/gdrive.png';
import oneDrive from '@/assets/images/logos/lang-logo/onedrive.png';
import serverImg from '@/assets/images/logos/lang-logo/server.png';
export const topCountriesData = [{
  countryFlag: usFlag,
  name: 'USA',
  count: '35,365',
  change: 2.5
}, {
  countryFlag: germanyFlag,
  name: 'Germany',
  count: '24,865',
  change: 1.2
}, {
  countryFlag: spainFlag,
  name: 'Spain',
  count: '18,369',
  change: 0.8
}, {
  countryFlag: bahaFlag,
  name: 'Bahamas',
  count: '11,325',
  change: 2.5
}];
export const users = [{
  id: '101',
  name: 'Karen Savage',
  avatar: avatar1,
  handle: '@karen',
  email: 'example@example.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(1),
  role: 'Manager',
  activityStatus: 'typing',
  unreadCount: 3,
  lastMessage: 'Hii',
  status: 'Active',
  source: 'Direct'
}, {
  id: '102',
  name: 'Carol Maier',
  avatar: avatar2,
  handle: '@carol',
  email: 'example@example.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(2),
  role: 'Member',
  lastMessage: 'Amazing Work!! 🔥',
  unreadCount: 1,
  activityStatus: 'offline',
  status: 'Active',
  source: 'Website'
}, {
  id: '103',
  name: 'Frank Wei',
  avatar: avatar3,
  handle: '@frank',
  email: 'totaldummy@dummy.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(4),
  role: 'Admin',
  activityStatus: 'offline',
  lastMessage: 'Congratulations!',
  status: 'Active',
  source: 'Direct'
}, {
  id: '104',
  name: 'Sandra Lally',
  avatar: avatar4,
  handle: '@sandra',
  email: 'exemple@exe.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(6),
  role: 'Leader',
  activityStatus: 'online',
  lastMessage: 'Voice message!',
  status: 'Inactive',
  source: 'Social'
}, {
  id: '105',
  name: 'James Andrews',
  avatar: avatar5,
  handle: '@james',
  email: 'fake@dummy.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(3),
  role: 'Sub.Manager',
  activityStatus: 'offline',
  lastMessage: 'Ok, I like it. 👍',
  status: 'Active',
  source: 'Website'
}, {
  id: '106',
  name: 'Shauna Jones',
  avatar: avatar6,
  handle: '@shauna',
  email: 'dummy10@dummy.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(8),
  role: 'Manager',
  activityStatus: 'online',
  lastMessage: 'Congratulations',
  status: 'Inactive',
  source: 'Direct'
}, {
  id: '107',
  name: 'Karen Savage',
  avatar: avatar1,
  handle: '@karen',
  email: 'onlyfake@dummy.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(1),
  role: 'Manager',
  activityStatus: 'offline',
  lastMessage: 'Send a pic.!',
  status: 'Active',
  source: 'Social'
}, {
  id: '108',
  name: 'Carol Maier',
  avatar: avatar8,
  handle: '@carol',
  email: 'dummy@exemple.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(2),
  role: 'Member',
  activityStatus: 'offline',
  lastMessage: 'Voice message!',
  status: 'Active',
  source: 'Website'
}, {
  id: '109',
  name: 'Frank Wei',
  avatar: avatar9,
  handle: '@frank',
  email: 'only@dummy.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(4),
  role: 'Admin',
  activityStatus: 'offline',
  lastMessage: "Let's have meeting today between me, you and Tony...",
  status: 'Active',
  source: 'Direct'
}, {
  id: '110',
  name: 'Sandra Lally',
  avatar: avatar4,
  handle: '@sandra',
  email: 'dummy@dummy.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(6),
  role: 'Leader',
  activityStatus: 'offline',
  lastMessage: 'Please check these design assets',
  status: 'Inactive',
  source: 'Website'
}, {
  id: '111',
  name: 'James Andrews',
  avatar: avatar5,
  handle: '@james',
  email: 'example@example.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(3),
  role: 'Sub.Manager',
  activityStatus: 'offline',
  lastMessage: 'Are you free for 15 mins? I would like to discuss something',
  status: 'Active',
  source: 'Direct'
}, {
  id: '112',
  name: 'Shauna Jones',
  avatar: avatar6,
  handle: '@shauna',
  email: 'example@example.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(8),
  role: 'Manager',
  activityStatus: 'offline',
  lastMessage: 'Are you interested in learning?',
  status: 'Inactive',
  source: 'Website'
}, {
  id: '113',
  name: 'Frank Wei',
  avatar: avatar3,
  handle: '@frank',
  email: 'dummy2dummay@dummy.com',
  phoneNo: '+1 123 456 789',
  lastActivity: addOrSubtractDaysFromDate(4),
  role: 'Admin',
  activityStatus: 'offline',
  lastMessage: 'Howdy?',
  status: 'Active',
  source: 'Direct'
}];
export const clients = [{
  id: '501',
  userId: '101',
  flag: bahaFlag,
  project: 'Health App',
  description: 'Explore our blog for in-depth articles, how-to guides, and inspiring stories that showcase the beauty of sustainable living.'
}, {
  id: '502',
  userId: '102',
  flag: usFlag,
  project: 'Payment App',
  description: 'Below are the contact details for our project client, provided for your reference and communication needs.'
}, {
  id: '503',
  userId: '103',
  flag: frenchFlag,
  project: 'Gaming App',
  description: 'Discover the latest trends in eco-friendly living, from zero-waste hacks to renewable energy solutions. Thank you so much.'
}, {
  id: '504',
  userId: '104',
  flag: germanyFlag,
  project: 'AI App',
  description: 'Welcome to GreenEco Solutions, your go-to destination for sustainable living tips, eco-friendly products.'
}, {
  id: '505',
  userId: '105',
  flag: russiaFlag,
  project: 'Video App',
  description: 'Take action in your community and beyond with our resources for activism and advocacy. Thank you so much.'
}, {
  id: '506',
  userId: '106',
  flag: spainFlag,
  project: 'Audio App',
  description: 'Below are the contact details for our project client, provided for your reference and communication needs.'
}];
export const teams = [{
  id: '601',
  userId: '101',
  membersId: ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110'],
  teamName: 'Nextjs Developer Team',
  logo: nextJsLogo,
  description: 'Paul is an experienced cybersecurity analyst with 10 years of practice.',
  progress: 50
}, {
  id: '602',
  userId: '102',
  membersId: ['102', '103', '104', '108', '105', '109', '110'],
  teamName: 'Reactjs Developer Team',
  logo: reactJsLogo,
  description: 'Angela is a skilled content writer with over 9 years of experience.',
  progress: 80
}, {
  id: '603',
  userId: '103',
  membersId: ['103', '104', '105', '106', '107', '108'],
  teamName: 'Sveltejs Developer Team',
  logo: svelteLogo,
  description: 'Scott is a seasoned professional with more than 12 years of experience in software engineering.',
  progress: 45
}, {
  id: '604',
  userId: '104',
  membersId: ['104', '101', '109', '110', '102', '101'],
  teamName: 'Vuejs Developer Team',
  logo: vueLogo,
  description: 'Jane has over 10 years of experience in software development.',
  progress: 90
}, {
  id: '605',
  userId: '105',
  membersId: ['108', '103', '102', '101', '102', '101', '108', '110', '102'],
  teamName: 'Symfony Developer Team',
  logo: symfonyLogo,
  description: 'Angela possesses more than a decade of expertise in software engineering.',
  progress: 25
}, {
  id: '606',
  userId: '106',
  membersId: ['105', '104', '103', '101', '102'],
  teamName: 'Nodejs Developer Team',
  logo: nodeJsLogo,
  description: 'Mike has over ten years of experience in software development.',
  progress: 65
}];
export const projects = [{
  id: '701',
  teamId: '601',
  logo: metaLogo,
  name: 'Meta App',
  client: 'Jack Jackson',
  budget: '33,100',
  startDate: new Date('08 Dec 2023'),
  deadlineDate: new Date('28 Feb 2024'),
  description: 'Start with a catchy and descriptive title that summarizes the project.',
  progress: 70,
  tasks: 91,
  status: 'Completed'
}, {
  id: '702',
  teamId: '602',
  logo: gitlabLogo,
  name: 'Gitlab',
  client: 'Kevin Ewing',
  budget: '10,500',
  startDate: new Date('10 Mar 2023'),
  deadlineDate: new Date('20 Sep 2024'),
  description: 'Encourage readers to take action, such as visiting the project website.',
  progress: 90,
  tasks: 32,
  status: 'In Progress'
}, {
  id: '703',
  teamId: '603',
  logo: chatgptLogo,
  name: 'ChatGPT 5',
  client: 'Bobby Harrison',
  budget: '41,100',
  startDate: new Date('03 Jan 2023'),
  deadlineDate: new Date('15 Aug 2024'),
  description: 'Highlight the main features or functionalities of the project.',
  progress: 75,
  tasks: 68,
  status: 'Completed'
}, {
  id: '704',
  teamId: '604',
  logo: dropboxLogo,
  name: 'Dropbox',
  client: 'Anthony Stockton',
  budget: '55,100',
  startDate: new Date('08 Feb 2023'),
  deadlineDate: new Date('28 Dec 2023'),
  description: 'If applicable, give credit to any collaborators, contributors, or sources of inspiration for the project.',
  progress: 95,
  tasks: 130,
  status: 'In Progress'
}, {
  id: '705',
  teamId: '605',
  logo: slackLogo,
  name: 'Slack Chat',
  client: 'Gilbert Jackson',
  budget: '30,580',
  startDate: new Date('02 Jun 2023'),
  deadlineDate: new Date('15 Apr 2024'),
  description: 'Encourage readers to take action, such as visiting the project website, trying out a demo.',
  progress: 40,
  tasks: 91,
  status: 'Completed'
}, {
  id: '706',
  teamId: '606',
  logo: dribbbleLogo,
  name: 'Dribbble Shots',
  client: 'Michael Heinz',
  budget: '25,800',
  startDate: new Date('08 Jan 2023'),
  deadlineDate: new Date('28 Dec 2024'),
  description: 'TechSavvy Solutions was founded with a vision to revolutionize the digital landscape.',
  progress: 50,
  tasks: 62,
  status: 'In Progress'
}];
export const tasks = [{
  id: '801',
  projectId: '701',
  userId: '101',
  teamName: 'React development team',
  taskName: 'Working API issue',
  priority: 'High',
  taskInfo: 'Outline common error scenarios that team members may encounter when using the APIs. Provide guidance on how to handle these errors gracefully and troubleshoot issues effectively. Offer examples of typical API requests and corresponding responses. These examples can help team members understand how to interact with the APIs and interpret the data they receive.',
  report: 12,
  assignedTo: 'Kylie Bishop'
}, {
  id: '802',
  projectId: '702',
  userId: '102',
  teamName: 'Flutter development team',
  taskName: 'Add Product page',
  priority: 'Low',
  taskInfo: 'Outline common error scenarios that team members may encounter when using the APIs. Provide guidance on how to handle these errors gracefully and troubleshoot issues effectively. Offer examples of typical API requests and corresponding responses. These examples can help team members understand how to interact with the APIs and interpret the data they receive.',
  report: 15,
  assignedTo: 'Pearl Carlson'
}, {
  id: '803',
  projectId: '703',
  userId: '103',
  teamName: 'Agular development team',
  taskName: 'Form submit page',
  priority: 'Medium',
  taskInfo: 'Outline common error scenarios that team members may encounter when using the APIs. Provide guidance on how to handle these errors gracefully and troubleshoot issues effectively. Offer examples of typical API requests and corresponding responses. These examples can help team members understand how to interact with the APIs and interpret the data they receive.',
  report: 8,
  assignedTo: 'Theodore Duran'
}];
export const folders = [{
  title: 'Google Drive',
  image: googleDrive,
  files: 34,
  storage: '500',
  progress: 38
}, {
  title: 'Dropbox',
  image: dropboxLogo,
  files: 68,
  storage: '500',
  progress: 15
}, {
  title: 'Onedrive',
  image: oneDrive,
  files: 192,
  storage: '500',
  progress: 48
}, {
  title: 'Server',
  image: serverImg,
  files: 81,
  storage: '500',
  progress: 76
}];
export const pricingPlans = [{
  name: 'Basic Plan',
  description: 'It is a long established fact that a reader will be distracted by the readable.',
  price: 39.0,
  features: ['30GB Disk Space', '30 Email Accounts', '30GB Monthly Bandwidth', '06 Subdomains', '10 Domains'],
  icon: 'icofont-bird-wings',
  iconVariant: 'text-blue'
}, {
  name: 'Premium Plan',
  description: 'It is a long established fact that a reader will be distracted by the readable.',
  price: 49.0,
  features: ['30GB Disk Space', '30 Email Accounts', '30GB Monthly Bandwidth', '06 Subdomains', '10 Domains'],
  icon: 'icofont-woman-bird',
  isPopular: true,
  iconVariant: 'text-pink'
}, {
  name: 'Plus Plan',
  description: 'It is a long established fact that a reader will be distracted by the readable.',
  price: 69.0,
  features: ['30GB Disk Space', '30 Email Accounts', '30GB Monthly Bandwidth', '06 Subdomains', '10 Domains'],
  icon: 'icofont-elk',
  iconVariant: 'text-success'
}, {
  name: 'Master Plan',
  description: 'It is a long established fact that a reader will be distracted by the readable.',
  price: 199.0,
  features: ['30GB Disk Space', '30 Email Accounts', '30GB Monthly Bandwidth', '06 Subdomains', '10 Domains'],
  icon: 'icofont-fire-burn',
  iconVariant: 'text-warning'
}];