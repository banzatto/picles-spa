import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pets } from "./pages/Pets/Pets";
import { PetDetails } from "./pages/PetDetails";

const router = createBrowserRouter([{
    path: '/',
    element: <Home />
}, {
    path: '/pets',
    element: <Pets/>
},
{ path: '/admin', element: <h1>Admin</h1> },
{
    path: '/pets',
    children: [
        {
            index: true,
            element: <Pets/>,
        },
        {
            path: '/pets/:id',
            element: <PetDetails />
        }
    ]
}

])

export default router