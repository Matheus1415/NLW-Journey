import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTripPage from '../pages/create-trip';
import { TripDetailsPage } from '../pages/trip-details';

const routerDefine = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />
  },
  {
    path: '/detalhes',
    element: <TripDetailsPage/>
  }
]);
function Router() {
  return <RouterProvider router={routerDefine} />;
}

export default Router;
