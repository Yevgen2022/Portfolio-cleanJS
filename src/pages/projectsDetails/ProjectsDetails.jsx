import { useParams } from "react-router-dom";
import { useProjectsStore } from "../../store/useProjectsStore";
import { LandingTemplate } from "../templates/LandingTemplate";
import { FrontendAppTemplate } from "../templates/FrontendAppTemplate.jsx";
import { BackendAppTemplate } from "../templates/BackendAppTemplate.jsx";

export default function ProjectDetails() {
    const { id } = useParams(); // take project id з URL
    const project = useProjectsStore.getState().getById(id); // finding in store

    if (!project) {
        return <p className="text-center mt-20">Project not found.</p>;
    }

    // Dynamically render template by type
    switch (project.type) {
        case "landing":
            return <LandingTemplate {...project} />;

        case "frontend-app":
            return <FrontendAppTemplate {...project} />;

        case "backend-app":
            return <BackendAppTemplate {...project} />;

        default:
            return <p className="text-center mt-20">Unknown project type.</p>;
    }
}
