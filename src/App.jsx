import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import CommunityForum from './Pages/CommunityForum';
const App = () => {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
        <Route index element = {<HomePage />} />
        <Route path='/Login' element = {<Login />} />
        <Route path='/Community' element = {<CommunityForum />} />
        </>
    )
    );
    return <RouterProvider router={router} />
};

export default App