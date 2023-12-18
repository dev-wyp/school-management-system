import {
  Routes,
  Route,
} from "react-router-dom";
import { RouteLists } from '../routes/routes'

export default function Router() {
  return (
    <Routes>
      {RouteLists.map((route: any, index) =>
        <Route key={index} path="/" element={<route.element />}>
          {route.children.map((child: any, i: any) => (
            <Route key={i} path={child.path} element={<child.element />} />)
          )}
        </Route>
      )}
    </Routes>
  )
}
