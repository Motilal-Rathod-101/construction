import { FolderOpen, CheckCircle, Users, AlertTriangle } from "lucide-react";
import { useSelector } from "react-redux";

export default function StatsGrid() {
  const currentWorkspace = useSelector(
    (state) => state.workspace.currentWorkspace
  );

  const projects = currentWorkspace?.projects || [];

  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === "ACTIVE").length;
  const completedProjects = projects.filter((p) => p.status === "COMPLETED").length;
  const pendingProjects = projects.filter((p) => p.status === "PLANNING").length;

  const statCards = [
    {
      icon: FolderOpen,
      title: "Total Projects",
      value: totalProjects,
      subtitle: `in ${currentWorkspace?.name || "Workspace"}`,
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    {
      icon: CheckCircle,
      title: "Completed",
      value: completedProjects,
      subtitle: "finished projects",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-500",
    },
    {
      icon: Users,
      title: "Active",
      value: activeProjects,
      subtitle: "currently running",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-500",
    },
    {
      icon: AlertTriangle,
      title: "Planning",
      value: pendingProjects,
      subtitle: "not started yet",
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {statCards.map(({ icon: Icon, title, value, subtitle, bgColor, textColor }, i) => (
        <div
          key={i}
          className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-6"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-zinc-500">{title}</p>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">{value}</p>
              <p className="text-xs text-zinc-400 mt-1">{subtitle}</p>
            </div>
            <div className={`p-3 rounded-lg ${bgColor}`}>
              <Icon size={20} className={textColor} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}