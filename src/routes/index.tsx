import {
  Routes,
  Route,
} from "react-router-dom";
import { RouteLists } from '../routes/routes'
import MainLayout from "../layouts/MainLayout";

export default function Router() {
  return (
    <Routes>
      {/* {RouteLists.map((route: any, index) =>
        <Route key={index} path="/" element={<route.element name={
          route.children.map(aa => aa.name)
        } />}>
          {route.children.map((child: any, i: any) => (
            <Route key={i} path={child.path} element={<child.element name={child.name} {...child.meta}/>} />)
          )}
        </Route>
      )} */}
      <Route path="/" element={<MainLayout />} data={RouteLists.map((child) => child.name)}>
      {RouteLists.map((child: any, i: any) => (
            <Route key={i} path={child.path} element={<child.element name={child.name} {...child.meta}/>} />)
          )}
      </Route>
    </Routes>
  )
}
