import PastLaunches from '@/views/PastLaunches'
import UpcomingLaunches from '@/views/UpcomingLaunches'
import Launches from '@/views/Launches'
import SubNavigationBar from '@/components/SubNavigationBar'
import Launch from '@/views/Launch'

export const LaunchesRouting = [
  {
    path: '/',
    name: 'home',
    redirect: '/launches'
  },
  {
    path: '/launches',
    name: 'launches',
    redirect: '/launches/upcoming',
    children: [
      {
        path: 'upcoming',
        name: 'upcoming',
        component: UpcomingLaunches
      },
      {
        path: 'past',
        name: 'past',
        component: PastLaunches
      }
    ],
    components: {
      default: Launches,
      subBar: SubNavigationBar
    },
    props: {
      subBar: {
        items: [{
          label: 'Upcoming',
          url: 'upcoming'
        }, {
          label: 'Past',
          url: 'past'
        }]
      }
    }
  },
  {
    path: '/launches/:flight',
    name: 'launch',
    component: Launch,
    props: true
  }
]
