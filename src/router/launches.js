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
        component: Launches
      },
      {
        path: 'past',
        name: 'past',
        component: Launches
      }
    ],
    components: {
      default: Launches,
      subBar: SubNavigationBar
    },
    props: {
      // Specifies the Launches view what launch type it is (past or upcoming)
      default: route => ({ type: route.name }),
      subBar: {
        items: [
          {
            label: 'Upcoming',
            url: 'upcoming'
          },
          {
            label: 'Past',
            url: 'past'
          }
        ]
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
