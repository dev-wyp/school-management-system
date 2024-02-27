import MainLayout from '../layouts/MainLayout';
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/users/Users";
// import UserForm from "../pages/users/UserForm";
import Students from "../pages/students/Students";
// import StudentForm from "../pages/students/StudentForm";
import Teachers from "../pages/teachers/Teachers";
import TeacherForm from "../pages/teachers/TeacherForm";
import { NotFound } from "../pages/NotFound";
import UserForm from '../pages/users/UserForm';
import UserDetail from '../pages/users/UserDetail';

export const RouteLists = [
    // {
    //     path: '/',
    //     element: MainLayout,
    //     children: [
    //       {
    //         name: 'Home',
    //         path: '',
    //         element: Dashboard,
    //         meta: {
    //           requiresAuth: true,
    //           header: 'ダッシュボード',
    //           title: 'ダッシュボード',
    //         },
    //       },
          {
            name: 'Teachers',
            path: '/teachers',
            element: Teachers,
            meta: {
              header: 'Teacher Lists',
              title: 'Teacher Lists',
            },
          },
          {
            name: 'Create Teacher',
            path: '/teacher/create',
            element: TeacherForm,
            meta: {
              header: 'テーマ管理',
              title: 'テーマ管理',
            },
          },
          {
            name: 'Teacher Detail',
            path: '/teacher/:id',
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
            name: 'Staff List',
            path: '/staff',
            element: Users,
            meta: {
              header: 'Staff List',
              title: 'Staff List',
            },
          },
          {
            name: 'Staff Detail',
            path: '/staff/:id',
            element: UserDetail,
            meta: {
              header: 'Staff Detail',
              title: 'Staff Detail',
            },
          },
          {
            name: 'Staff Update',
            path: '/staff/:id/edit',
            element: UserForm,
            meta: {
              header: 'Staff Update',
              title: 'Staff Update',
            },
          },
          {
            path: '*',
            element: NotFound,
          },
    //     ]
    // }
]