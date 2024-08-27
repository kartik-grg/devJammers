import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import CommunityForum from './Pages/CommunityForum';
import Register from './Pages/Register';
const App = () => {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
        <Route index element = {<HomePage />} />
        <Route path='/Login' element = {<Login />} />
        <Route path='/Register' element = {<Register />} />
        <Route path='/Community' element = {<CommunityForum />} />
        </>
    )
    );
    return <RouterProvider router={router} />
};

export default App