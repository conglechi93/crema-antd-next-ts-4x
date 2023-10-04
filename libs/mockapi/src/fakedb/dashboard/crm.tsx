import { blue, green, grey, red } from '@ant-design/colors';
import { CRMType } from '@crema/models/dashboards/CRM';

const crmData: CRMType = {
  progressGraphData: [
    {
      name: 'Goal 1',
      actual: 4000,
      progress: 5000,
    },
    {
      name: 'Goal 2',
      actual: 3700,
      progress: 3700,
    },
    {
      name: 'Goal 3',
      actual: 4000,
      progress: 6000,
    },
    {
      name: 'Goal 4',
      actual: 4500,
      progress: 2000,
    },
    {
      name: 'Goal 5',
      actual: 1000,
      progress: 8500,
    },
  ],
  quickStatsData: {
    clientsData: {
      count: '43,000',
    },
    invoiceData: {
      count: '$ 10,600',
    },
    totalProjectsData: {
      count: '73,540',
    },
    openProjectsData: {
      count: '33,280',
    },
  },
  revenueData: {
    ytdRevenue: '$216,759',
    clients: 49,
    countries: '09',
    clientsColor: '#0A8FDC',
    countriesColor: '#49BD65',
    revenueGraphData: [
      {
        name: '',
        revenue: 18000,
        revenue1: 30000,
      },
      {
        name: '$2000',
        revenue: 40000,
        revenue1: 25000,
      },
      {
        name: '',
        revenue: 35000,
        revenue1: 45000,
      },
      {
        name: '$19000',
        revenue: 43000,
        revenue1: 30000,
      },
      {
        name: '',
        revenue: 25000,
        revenue1: 45000,
      },
      {
        name: '',
        revenue: 40000,
        revenue1: 32000,
      },
    ],
  },
  stateData: [
    {
      id: 1,
      name: 'New Users',
      duration: 'vs 30 days',
      value: '2,000',
      percentageChange: 2.1,
      iconImg: 'dashboard/user.svg',
      color: '#0A8FDC',
    },
    {
      id: 2,
      name: 'Deals',
      duration: 'vs 30 days',
      value: '400',
      percentageChange: -2,
      iconImg: 'dashboard/deals_hand.svg',
      color: '#F04F47',
    },
    {
      id: 3,
      name: 'Campaign',
      duration: 'vs 30 days',
      value: '234',
      percentageChange: 2,
      iconImg: 'dashboard/campaign.svg',
      color: '#11C15B',
    },
    {
      id: 4,
      name: 'Total Profit',
      duration: 'vs 30 days',
      value: '$40,000',
      percentageChange: 2.5,
      iconImg: 'dashboard/wallet_yellow.svg',
      color: '#FF5252',
    },
  ],
  visitorPageView: [
    {
      name: 'Jan',
      Visitor: 150,
      PageView: 270,
    },
    {
      name: 'Feb',
      Visitor: 250,
      PageView: 200,
    },
    {
      name: 'Mar',
      Visitor: 180,
      PageView: 280,
    },
    {
      name: 'Apr',
      Visitor: 278,
      PageView: 250,
    },
    {
      name: 'May',
      Visitor: 250,
      PageView: 300,
    },
    {
      name: 'Jun',
      Visitor: 350,
      PageView: 250,
    },
    {
      name: 'Jul',
      Visitor: 280,
      PageView: 300,
    },
    {
      name: 'Aug',
      Visitor: 340,
      PageView: 240,
    },
    {
      name: 'Sep',
      Visitor: 280,
      PageView: 300,
    },
    {
      name: 'Oct',
      Visitor: 400,
      PageView: 270,
    },
    {
      name: 'Nov',
      Visitor: 250,
      PageView: 240,
    },
    {
      name: 'Dec',
      Visitor: 400,
      PageView: 270,
    },
  ],
  opportunitiesWonGraphData: [
    {
      name: 'May 1',
      actual: 6200,
      progress: 4800,
    },
    {
      name: 'May 2',
      actual: 2200,
      progress: 3800,
    },
    {
      name: 'May 3',
      actual: 9000,
      progress: 5800,
    },
    {
      name: 'May 4',
      actual: 4500,
      progress: 2000,
    },
    {
      name: 'May 5',
      actual: 6000,
      progress: 8500,
    },
    {
      name: 'May 6',
      actual: 9000,
      progress: 3800,
    },
  ],
  teamStateData: [
    {
      id: 1,
      name: 'Award Ceremony',
      duration: '12:30 - 15:45',
      tags: [
        {
          id: 1,
          color: '#0A8FDC',
          title: 'Team',
        },
        {
          id: 2,
          color: '#11C15B',
          title: 'Award',
        },
      ],
      status: true,
      members: [
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A4.jpg',
        },
        {
          id: 2,
          name: '',
          image: '/assets/images/avatar/A5.jpg',
        },
        {
          id: 3,
          name: '',
          image: '/assets/images/avatar/A6.jpg',
        },
        {
          id: 4,
          name: '',
          image: '/assets/images/avatar/A1.jpg',
        },
        {
          id: 5,
          name: '',
          image: '/assets/images/avatar/A2.jpg',
        },
        {
          id: 6,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 7,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
        {
          id: 8,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 9,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'Design Discussion',
      duration: '12:30 - 15:45',
      tags: [
        {
          id: 1,
          color: '#0A8FDC',
          title: 'Team',
        },
        {
          id: 2,
          color: '#F04F47',
          title: 'Meeting',
        },
      ],
      status: false,
      members: [
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A5.jpg',
        },
        {
          id: 2,
          name: '',
          image: '/assets/images/avatar/A6.jpg',
        },
        {
          id: 3,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
        {
          id: 4,
          name: '',
          image: '/assets/images/avatar/A1.jpg',
        },
        {
          id: 5,
          name: '',
          image: '/assets/images/avatar/A2.jpg',
        },
        {
          id: 6,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'Client Meeting',
      duration: '12:30 - 15:45',
      tags: [
        {
          id: 1,
          color: '#0A8FDC',
          title: 'Team',
        },
        {
          id: 2,
          color: '#F04F47',
          title: 'Meeting',
        },
      ],
      status: true,
      members: [
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A5.jpg',
        },
        {
          id: 2,
          name: '',
          image: '/assets/images/avatar/A1.jpg',
        },
        {
          id: 3,
          name: '',
          image: '/assets/images/avatar/A2.jpg',
        },
        {
          id: 4,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 5,
          name: '',
          image: '/assets/images/avatar/A4.jpg',
        },
      ],
    },
    {
      id: 4,
      name: 'Office Meeting',
      duration: '12:30 - 15:45',
      tags: [
        {
          id: 1,
          color: '#0A8FDC',
          title: 'Team',
        },
        {
          id: 2,
          color: '#F04F47',
          title: 'Meeting',
        },
      ],
      status: true,
      members: [
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 2,
          name: '',
          image: '/assets/images/avatar/A4.jpg',
        },
        {
          id: 3,
          name: '',
          image: '/assets/images/avatar/A5.jpg',
        },
        {
          id: 4,
          name: '',
          image: '/assets/images/avatar/A1.jpg',
        },
        {
          id: 5,
          name: '',
          image: '/assets/images/avatar/A2.jpg',
        },
        {
          id: 6,
          name: '',
          image: '/assets/images/avatar/A6.jpg',
        },
        {
          id: 7,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
      ],
    },
  ],
  topLeaders: [
    {
      id: '#SK231',
      teamLead: {
        name: 'Anthony Freeman',
        email: 'anthonyfreeman@gmail.com',
        image: '/assets/images/avatar/A1.jpg',
      },
      project: 'Elite Admin',
      team: [
        {
          id: 6,
          name: '',
          image: '/assets/images/avatar/A6.jpg',
        },
        {
          id: 7,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 2,
          name: '',
          image: '/assets/images/avatar/A4.jpg',
        },
      ],
      status: 'Ready',
      color: '#0A8FDC',
      weeks: '35',
      budgets: '$96K',
    },
    {
      id: '#SK232',
      teamLead: {
        name: 'Julian Josephs',
        email: 'Josephs@gmail.com',
        image: '/assets/images/avatar/A7.jpg',
      },
      project: 'Real Homes WP Theme',
      team: [
        {
          id: 7,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 2,
          name: '',
          image: '/assets/images/avatar/A4.jpg',
        },
      ],
      status: 'On Track',
      color: '#11C15B',
      weeks: '43',
      budgets: '$126K',
    },
    {
      id: '#SK233',
      teamLead: {
        name: 'Brook Sanders',
        email: 'brooksanders@gmail.com',
        image: '/assets/images/avatar/A4.jpg',
      },
      project: 'MedicalPro WP Theme',
      team: [
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 5,
          name: '',
          image: '/assets/images/avatar/A2.jpg',
        },
        {
          id: 6,
          name: '',
          image: '/assets/images/avatar/A6.jpg',
        },
        {
          id: 7,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
      ],
      status: 'Blocked',
      color: '#F04F47',
      weeks: '54',
      budgets: '$266K',
    },
    {
      id: '#SK234',
      teamLead: {
        name: 'Jeff M. Peek',
        email: 'JeffMPeek@armyspy.com',
        image: '/assets/images/avatar/A5.jpg',
      },
      project: 'Hosting Press HTML',
      team: [
        {
          id: 3,
          name: '',
          image: '/assets/images/avatar/A5.jpg',
        },
        {
          id: 4,
          name: '',
          image: '/assets/images/avatar/A1.jpg',
        },
        {
          id: 5,
          name: '',
          image: '/assets/images/avatar/A2.jpg',
        },
      ],
      status: 'Potential Risk',
      color: '#FF5252',
      weeks: '23',
      budgets: '$56K',
    },
    {
      id: '#SK235',
      teamLead: {
        name: 'Anthony Freeman',
        email: 'anthonyfreeman@gmail.com',
        image: '/assets/images/avatar/A1.jpg',
      },
      project: 'Elite Admin',
      team: [
        {
          id: 6,
          name: '',
          image: '/assets/images/avatar/A6.jpg',
        },
        {
          id: 7,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 2,
          name: '',
          image: '/assets/images/avatar/A4.jpg',
        },
      ],
      status: 'Ready',
      color: '#0A8FDC',
      weeks: '35',
      budgets: '$96K',
    },
    {
      id: '#SK236',
      teamLead: {
        name: 'Julian Josephs',
        email: 'Josephs@gmail.com',
        image: '/assets/images/avatar/A7.jpg',
      },
      project: 'Real Homes WP Theme',
      team: [
        {
          id: 7,
          name: '',
          image: '/assets/images/avatar/A7.jpg',
        },
        {
          id: 1,
          name: '',
          image: '/assets/images/avatar/A3.jpg',
        },
        {
          id: 2,
          name: '',
          image: '/assets/images/avatar/A4.jpg',
        },
      ],
      status: 'On Track',
      color: '#11C15B',
      weeks: '43',
      budgets: '$126K',
    },
  ],
  timesheet: [
    {
      id: 1,
      name: 'Landing page design',
      date: '21 May 2020',
      start_time: '1:10 pm',
      end_time: '9:20 pm',
      duration: '8:10:00',
    },
    {
      id: 2,
      name: 'Mobile App',
      date: '20 May 2020',
      start_time: '12:00 pm',
      end_time: '8:00 pm',
      duration: '8:00:00',
    },
    {
      id: 3,
      name: 'UI/UX',
      date: '19 May 2020',
      start_time: '1:10 pm',
      end_time: '1:20 pm',
      duration: '0:10:00',
    },
    {
      id: 4,
      name: 'Website/apps',
      date: '18 May 2020',
      start_time: '1:11 pm',
      end_time: '9:00 pm',
      duration: '7:49:00',
    },
    {
      id: 5,
      name: 'Branding',
      date: '17 May 2020',
      start_time: '1:10 pm',
      end_time: '1:20 pm',
      duration: '0:10:00',
    },
  ],
  recentActivities: [
    {
      id: 1,
      name: 'Anthony Freeman',
      position: 'Backend Developer',
      message: 'Commented on your profile picture.',
      profile_pic: '/assets/images/avatar/A2.jpg',
      created_at: '5 min ago',
    },
    {
      id: 2,
      name: 'Stella Webster',
      position: 'Senior Quality Assurance',
      message: 'Added to their stories.',
      profile_pic: '/assets/images/avatar/A1.jpg',
      created_at: '10 min ago',
    },
    {
      id: 3,
      name: 'Brandon Sullivan',
      position: 'Business Development',
      message: 'Commented on your profile picture.',
      profile_pic: '/assets/images/avatar/A3.jpg',
      created_at: '15 min ago',
    },
    {
      id: 4,
      name: 'Edmund Higdon',
      position: 'Project Manager',
      message: 'Tagged you in a picture.',
      profile_pic: '/assets/images/avatar/A4.jpg',
      created_at: '20 min ago',
    },
    {
      id: 5,
      name: 'Kimberly Lewis',
      position: 'Senior UI UX Designer',
      message: 'Marked himself safe during earth quake.',
      profile_pic: '/assets/images/avatar/A5.jpg',
      created_at: '25 min ago',
    },
    {
      id: 6,
      name: 'Sylvia Miskell',
      position: 'Ios Developer',
      message: 'Commented on your profile picture.',
      profile_pic: '/assets/images/avatar/A7.jpg',
      created_at: '30 min ago',
    },
    {
      id: 7,
      name: 'John Smith',
      position: 'flutter developer',
      message: 'Changed her wall picture.',
      profile_pic: '/assets/images/avatar/A9.jpg',
      created_at: '35 min ago',
    },
    {
      id: 8,
      name: 'Anthony Freeman',
      position: 'Backend Developer',
      message: 'Changed her wall picture.',
      profile_pic: '/assets/images/avatar/A2.jpg',
      created_at: '5 min ago',
    },
    {
      id: 9,
      name: 'Stella Webster',
      position: 'Senior Quality Assurance',
      message: 'Commented on your profile picture.',
      profile_pic: '/assets/images/avatar/A1.jpg',
      created_at: '10 min ago',
    },
    {
      id: 10,
      name: 'Brandon Sullivan',
      position: 'Business Development',
      message: 'Added to their stories.',
      profile_pic: '/assets/images/avatar/A3.jpg',
      created_at: '15 min ago',
    },
    {
      id: 11,
      name: 'Stella Webster',
      position: 'Senior Quality Assurance',
      message: 'Commented on your profile picture.',
      profile_pic: '/assets/images/avatar/A1.jpg',
      created_at: '10 min ago',
    },
    {
      id: 12,
      name: 'Brandon Sullivan',
      position: 'Business Development',
      message: 'Marked himself safe during earth quake.',
      profile_pic: '/assets/images/avatar/A3.jpg',
      created_at: '15 min ago',
    },
  ],
  todoLists: [
    {
      id: 1,
      title: 'Revamp Instagram app',
      date: '20 May',
      time_from: 'Today',
      completed: true,
    },
    {
      id: 2,
      title: 'Prototyping',
      date: '21 May',
      time_from: 'Upcoming',
      completed: false,
    },
    {
      id: 3,
      title: 'Collect references for new project',
      date: '22 May',
      time_from: 'Upcoming',
      completed: false,
    },
    {
      id: 4,
      title: 'Revamp Instagram app',
      date: '23 May',
      time_from: 'Upcoming',
      completed: false,
    },
  ],
  screenshots: [
    {
      id: 1,
      title: 'shot_1_attach_1.png',
      type: 'image',
    },
    {
      id: 2,
      title: 'shot_1_attach_2.png',
      type: 'image',
    },
    {
      id: 3,
      title: 'shot_1_attach_3.png',
      type: 'image',
    },
    {
      id: 4,
      title: 'shot_1_attach_4.png',
      type: 'image',
    },
    {
      id: 5,
      title: 'shot_1_attach_5.mp4',
      type: 'video',
    },
  ],
  dealsTableData: [
    {
      id: 1,
      name: 'Apple Inc.',
      progress: 'Pending',
      type: 'MDSA7',
      amount: '$2,465,867',
      created: '23 Jan, 2019',
      logo: '/assets/images/companyLogos/apple.png',
    },
    {
      id: 2,
      name: 'Adidas Inc.',
      progress: 'Approved',
      type: 'MDSA7',
      amount: '$1,465,867',
      created: '12 Jan, 2019',
      logo: '/assets/images/companyLogos/adidas.png',
    },
    {
      id: 3,
      name: 'Microsoft',
      progress: 'Pending',
      type: 'MDSA7',
      amount: '$5,465,867',
      created: '23 Apr, 2019',
      logo: '/assets/images/companyLogos/microsoft.png',
    },
    {
      id: 4,
      name: 'Netflix',
      progress: 'Approved',
      type: 'MDSA7',
      amount: '$3,465,867',
      created: '28 Feb, 2019',
      logo: '/assets/images/companyLogos/netflix.png',
    },
    {
      id: 5,
      name: 'Instagram',
      progress: 'Application',
      type: 'MDSA7',
      amount: '$4,465,867',
      created: '21 Mar, 2019',
      logo: '/assets/images/companyLogos/instagram.png',
    },
    {
      id: 6,
      name: 'Microsoft',
      progress: 'Pending',
      type: 'MDSA7',
      amount: '$5,465,867',
      created: '23 Apr, 2019',
      logo: '/assets/images/companyLogos/microsoft.png',
    },
  ],
  totalVisitors: [
    {
      name: 'Excited',
      value: 15,
      color: '#4de18c',
    },
    {
      name: 'High Willingness',
      value: 20,
      color: '#43d3ec',
    },
    {
      name: 'Want To Know',
      value: 20,
      color: '#2b7ada',
    },
    {
      name: 'Interested',
      value: 15,
      color: '#cce56f',
    },
    {
      name: 'Low Willingness',
      value: 20,
      color: '#f16262',
    },
    {
      name: 'Not Interested',
      value: 10,
      color: '#f1a856',
    },
  ],
  emailMarketing: [
    {
      id: 1,
      value: 18500,
      name: 'Sent',
      fill: '#0A8FDC',
    },
    {
      id: 2,
      value: 10500,
      name: 'Opened',
      fill: '#4DD385',
    },
    {
      id: 3,
      value: 11000,
      name: 'Not Opened',
      fill: '#F04F47',
    },
  ],
  socialMediaData: [
    {
      id: 1,
      name: 'facebook',
      revenue: 2390,
      change: '+30',
      color: '#9E49E6',
      changeColor: '#49BD65',
    },
    {
      id: 2,
      name: 'twitter',
      revenue: 1578,
      change: -20,
      color: '#0A8FDC',
      changeColor: '#F44D50',
    },
    {
      id: 3,
      name: 'instagram',
      revenue: 1977,
      change: '+30',
      color: '#F44D50',
      changeColor: '#49BD65',
    },
  ],
  ticketSupportData: [
    {
      id: 1,
      name: 'Angelina Jow.',
      ticketId: '344553',
      created: '23 Jan, 2019',
      contact: '+435-372-2718',
      image: '/assets/images/avatar/A1.jpg',
    },
    {
      id: 2,
      name: 'John Mathew',
      ticketId: '776843',
      created: '12 Jan, 2019',
      contact: '+435-372-2718',
      image: '/assets/images/avatar/A6.jpg',
    },
    {
      id: 3,
      name: 'Alfred Marshall',
      ticketId: '523656',
      created: '28 Feb, 2019',
      contact: '+435-372-2718',
      image: '/assets/images/avatar/A14.jpg',
    },
    {
      id: 4,
      name: 'George Bailey',
      ticketId: '434356',
      created: '21 Mar, 2019',
      contact: '+435-372-2718',
      image: '/assets/images/avatar/A17.jpg',
    },
    {
      id: 5,
      name: 'Maria Lee',
      ticketId: '234565',
      created: '23 Apr, 2019',
      contact: '+435-372-2718',
      image: '/assets/images/avatar/A21.jpg',
    },
    {
      id: 6,
      name: 'John Lee',
      ticketId: '234434',
      created: '29 June, 2019',
      contact: '+435-372-2718',
      image: '/assets/images/avatar/A11.jpg',
    },
    {
      id: 7,
      name: 'Mark Wood',
      ticketId: '345463',
      created: '30 June, 2019',
      contact: '+435-323-3543',
      image: '/assets/images/avatar/A19.jpg',
    },
    {
      id: 8,
      name: 'Rohit Dean',
      ticketId: '423454',
      created: '05 July, 2019',
      contact: '+353-372-4345',
      image: '/assets/images/avatar/A28.jpg',
    },
    {
      id: 9,
      name: 'Maria Lee',
      ticketId: '234565',
      created: '23 Apr, 2019',
      contact: '+435-372-2718',
      image: '/assets/images/avatar/A21.jpg',
    },
  ],
};
export default crmData;
