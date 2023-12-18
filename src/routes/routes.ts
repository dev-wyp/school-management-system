import MainLayout from '../layouts/MainLayout';
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/users/Users";
// import UserForm from "../pages/users/UserForm";
import Students from "../pages/students/Students";
// import StudentForm from "../pages/students/StudentForm";
import Teachers from "../pages/teachers/Teachers";
import TeacherForm from "../pages/teachers/TeacherForm";
import { NotFound } from "../pages/NotFound";

export const RouteLists = [
    {
        path: '/',
        element: MainLayout,
        children: [
          {
            name: 'Home',
            path: '',
            element: Dashboard,
            meta: {
              requiresAuth: true,
              header: 'ダッシュボード',
              title: 'ダッシュボード',
            },
          },
          {
            name: 'Teachers',
            path: '/teachers',
            element: Teachers,
            meta: {
              header: 'テーマ管理',
              title: 'テーマ管理',
            },
          },
          {
            name: 'Teachers',
            path: '/teacher/create',
            element: TeacherForm,
            meta: {
              header: 'テーマ管理',
              title: 'テーマ管理',
            },
          },
          {
            name: 'Students',
            path: '/students',
            element: Students,
            meta: {
              header: 'テーマ管理',
              title: 'テーマ管理',
            },
          },
          {
            name: 'Users',
            path: '/users',
            element: Users,
            meta: {
              header: 'テーマ管理',
              title: 'テーマ管理',
            },
          },
          {
            path: '*',
            element: NotFound,
          },
        ]
    }
]