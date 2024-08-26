import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';

const App = () => {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
        <Route index element = {<HomePage />} />
        <Route path='/Login' element = {<Login />} />
        </>
    )
    );
    return <RouterProvider router={router} />
};

export default App