import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));


const coreRoutes = [
  {
    path: '/',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    title: 'userProfile',
    component: Profile,
  },
 
];

const routes = [...coreRoutes];
export default routes;
