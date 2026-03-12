import StatsGrid from "../components/StatsGrid";

const Dashboard = () => {
  const user = { fullName: "User" };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1">
          Welcome back, {user?.fullName || "User"}
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 text-sm">
          Here's what's happening with your projects today
        </p>
      </div>

      <StatsGrid />
    </div>
  );
};

export default Dashboard;