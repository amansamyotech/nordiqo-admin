// assets
import {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers
} from '@tabler/icons';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CategoryIcon from '@mui/icons-material/Category';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
const icons = {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers
};
const dashboard = {
  title: 'Dashboard-Menu',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: HomeIcon,
      breadcrumbs: false
    },
    {
      id: '01',
      title: 'User',
      type: 'item',
      url: '/dashboard/user',
      icon: PersonIcon,
      breadcrumbs: false
    },
    {
      id: '02',
      title: 'Banks',
      type: 'item',
      url: '/dashboard/banklist',
      icon: AccountBalanceIcon,
      breadcrumbs: false
    },
    {
      id: '03',
      title: 'Category',
      type: 'item',
      url: '/dashboard/category',
      icon: CategoryIcon,
      breadcrumbs: false
    },
    {
      id: '04',
      title: 'Delete Request',
      type: 'item',
      url: '/dashboard/deleteuser',
      icon: DeleteIcon,
      breadcrumbs: false
    },
    {
      id: '05',
      title: 'Logout',
      type: 'item',
      url: '/dashboard/meeting',
      icon: LogoutIcon,
      breadcrumbs: false
    }
    // {
    //   id: '06',
    //   title: 'Calls',
    //   type: 'item',
    //   url: '/dashboard/call',
    //   icon: icons.IconPhoneCall,
    //   breadcrumbs: false
    // },
    // {
    //   id: '07',
    //   title: 'Emails',
    //   type: 'item',
    //   url: '/dashboard/email',
    //   icon: icons.IconMail,
    //   breadcrumbs: false
    // },
    // {
    //   id: '08',
    //   title: 'Calender',
    //   type: 'item',
    //   url: '/dashboard/calender',
    //   icon: icons.IconCalendarEvent,
    //   breadcrumbs: false
    // },
    // {
    //   id: '09',
    //   title: 'Document Management',
    //   type: 'item',
    //   url: '/dashboard/document',
    //   icon: icons.IconFileUpload,
    //   breadcrumbs: false
    // },
    // {
    //   id: '10',
    //   title: 'Email Template',
    //   type: 'item',
    //   url: '/dashboard/emailtemplate',
    //   icon: icons.IconFileInvoice,
    //   breadcrumbs: false
    // }
  ]
};

export default dashboard;
