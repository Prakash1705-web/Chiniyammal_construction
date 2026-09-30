import { useParams } from "react-router-dom";
import ProjectInfo from "../../components/projects/project_info";


const ProjectDetails = () => {

  const { id } = useParams();

  return (
    <main className="project-details">

      <ProjectInfo projectId={id} />

    </main>
  );
};

export default ProjectDetails;