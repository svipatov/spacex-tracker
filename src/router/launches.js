import Launches from '@/views/Launches'
import Launch from '@/views/Launch'

export const LaunchesRouting = [
  {
    path: '/launches',
    name: 'launches',
    alias: '/',
    component: Launches
  },
  {
    path: '/launches/:flight',
    name: 'launch',
    component: Launch,
    props: true
  }
]
