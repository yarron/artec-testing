import HomePage from '_pages/HomePage';
import NotFoundPage from '_pages/NotFoundPage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/films',
    component: HomePage,
  },
  {
    path: '/films/:id',
    component: HomePage,
  },
  {
    path: '/films/edit/:id',
    component: HomePage,
  },
  {
    path: '/films/add/',
    component: HomePage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
