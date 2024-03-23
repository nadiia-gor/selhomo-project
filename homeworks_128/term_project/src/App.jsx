import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Pages from './pages/Pages';
import Projects from './pages/Projects';
import Services from './pages/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'pages', element: <Pages /> },
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
