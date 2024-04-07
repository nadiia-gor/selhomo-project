import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound/NotFound';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '*', element: <NotFound /> },
      { path: '/', element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <Projects /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
