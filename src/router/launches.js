import PastLaunches from '@/views/PastLaunches'
import UpcomingLaunches from '@/views/UpcomingLaunches'
import LaunchesPicker from '@/views/LaunchesPicker'
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
        component: UpcomingLaunches
      },
      {
        path: 'past',
        component: PastLaunches
      }
    ],
    component: LaunchesPicker
  },
  {
    path: '/launches/:flight',
    name: 'launch',
    component: Launch,
    props: true
  }
]
