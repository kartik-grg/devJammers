import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import CommunityForum from './Pages/CommunityForum';
import Register from './Pages/Register';
import Error404 from './Components/Error404';
import UserDashboard from './Pages/UserDashboard';
import GameDetails from './Components/GameDetails';

const App = () => {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
        <Route index element = {<HomePage />} />
        <Route path='/Login' element = {<Login />} />
        <Route path='/Register' element = {<Register />} />
        <Route path='/Community' element = {<CommunityForum />} />
        <Route path='/UserDashboard' element = {<UserDashboard />} />
        <Route path='/game/:id' element = {<GameDetails />} />
        <Route path='*' element = {<Error404 />} />
        </>
    )
    );
    return <RouterProvider router={router} />
};

export default App