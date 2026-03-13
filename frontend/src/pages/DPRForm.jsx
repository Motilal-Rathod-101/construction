import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; 
import { dummyWorkspaces } from "../assets/assets"; 

export default function DPRForm() {
  const navigate = useNavigate();

  // Preselect the first project if available
  const firstProject =
    dummyWorkspaces[0]?.projects[0]?.id || "";

  const [form, setForm] = useState({
    projectId: firstProject,
    date: "",
    weather: "",
    description: "",
    workers: "",
    photos: [],
  });

  const [error, setError] = useState("");

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      setError("Maximum 3 photos allowed");
      return;
    }

    setError("");
    setForm({ ...form, photos: files });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !form.projectId ||
      !form.date ||
      !form.weather ||
      !form.description ||
      !form.workers
    ) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    console.log("DPR Submitted:", form);
    toast.success("DPR submitted successfully!");

    // Clear form after submit
    setForm({
      projectId: firstProject,
      date: "",
      weather: "",
      description: "",
      workers: "",
      photos: [],
    });

    // Navigate back to Projects page
    navigate("/projects");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow">
      <button
        onClick={() => navigate("/projects")}
        className="text-blue-500 mb-4 text-sm"
      >
        ← Back to Projects
      </button>

      <h1 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Daily Progress Report
      </h1>

      {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Project dropdown */}
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Select Project
          </label>
          <select
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            value={form.projectId}
            onChange={(e) =>
              setForm({ ...form, projectId: e.target.value })
            }
          >
            {dummyWorkspaces.map((workspace) =>
              workspace.projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name} ({workspace.name})
                </option>
              ))
            )}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Date
          </label>
          <input
            type="date"
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>

        {/* Weather */}
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Weather
          </label>
          <select
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            value={form.weather}
            onChange={(e) => setForm({ ...form, weather: e.target.value })}
          >
            <option value="">-- Select Weather --</option>
            <option>Sunny</option>
            <option>Cloudy</option>
            <option>Rainy</option>
          </select>
        </div>

        {/* Work Description */}
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Work Description
          </label>
          <textarea
            placeholder="Describe work done today"
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            rows="3"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        {/* Worker Count */}
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Worker Count
          </label>
          <input
            type="number"
            placeholder="Enter worker count"
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            value={form.workers}
            onChange={(e) => setForm({ ...form, workers: e.target.value })}
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Upload Photos
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full"
            onChange={handleImageChange}
          />
          <p className="text-xs text-gray-400 mt-1">
            Maximum 3 photos allowed
          </p>

          {form.photos.length > 0 && (
            <div className="flex gap-2 mt-2">
              {form.photos.map((file, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(file)}
                  alt={`preview-${idx}`}
                  className="h-16 w-16 object-cover rounded border"
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full transition"
        >
          Submit DPR
        </button>
      </form>
    </div>
  );
}