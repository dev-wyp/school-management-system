import { Dashboard, People, Layers, Assignment } from '@mui/icons-material';

export const MainListItems = [
    {
        id: 1,
        title: 'Dashboard',
        route: '/',
        icon: <Dashboard />,
    },
    {
        id: 2,
        title: 'Teachers',
        route: '/teachers',
        icon: <People />,
    },
    {
        id: 3,
        title: 'Students',
        route: '/students',
        icon: <Assignment />,
    },
    {
        id: 4,
        title: 'All Staff',
        route: '/staff',
        icon: <Layers />,
    },
]