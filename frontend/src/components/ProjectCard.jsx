import { Link } from "react-router-dom";

const statusColors = {
  PLANNING: "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-200",
  ACTIVE: "bg-emerald-200 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-200",
  COMPLETED: "bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-200",
};

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/dpr/${project.id}`}
      className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 rounded-lg p-5 transition duration-200 group"
    >
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500">
          {project.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {project.description || "No description"}
        </p>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className={`px-2 py-1 rounded text-xs ${statusColors[project.status]}`}>
          {project.status}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {project.location}
        </span>
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500">
        Start Date: {project.startDate}
      </p>

      <div className="mt-3">
        <div className="flex justify-between text-xs mb-1 text-gray-600 dark:text-gray-400">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>

        <div className="w-full bg-gray-200 dark:bg-zinc-700 h-1.5 rounded">
          <div
            className="bg-blue-500 h-1.5 rounded"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;