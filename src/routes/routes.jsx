import Layout from '../components/Layout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Education from '../pages/Education';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Certificates from '../pages/Certificates';
import ProjectsDetails from '../pages/projectsDetails/ProjectsDetails';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'education', element: <Education /> },
            { path: 'resume', element: <Resume /> },
            { path: 'contact', element: <Contact /> },
            { path: 'certificates', element: <Certificates /> },
            { path: 'projects/:id', element: <ProjectsDetails /> },
        ],
    },
];

export default routes;
