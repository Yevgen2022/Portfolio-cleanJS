import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import { useEffect } from "react";
import { useProjectsStore } from "./store/useProjectsStore";

export default function App() {

    const loadProjects = useProjectsStore((state) => state.loadProjects);

    useEffect(() => {
        loadProjects(); // виконується один раз при старті
    }, [loadProjects]);

    return useRoutes(routes);
}
