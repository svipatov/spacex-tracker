import Launches from '@/views/Launches'
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
    component: Launches
  },
  {
    path: '/launches/:flight',
    name: 'launch',
    component: Launch,
    props: true
  }
]
