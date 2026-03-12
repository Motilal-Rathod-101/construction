import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function DPRForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    weather: "",
    description: "",
    workers: "",
    photos: [],
  });

  const [preview, setPreview] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      setError("Maximum 3 photos allowed");
      return;
    }

    setError("");

    setForm({
      ...form,
      photos: files,
    });

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreview(previewUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.weather || !form.description || !form.workers) {
      setError("Please fill all required fields");
      return;
    }

    setError("");

    console.log("DPR Data:", form);

    toast.success("DPR submitted successfully!");

    navigate("/projects");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg">
      <button
        onClick={() => navigate("/projects")}
        className="text-blue-500 mb-4 text-sm"
      >
        ← Back to Projects
      </button>

      <h1 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Daily Progress Report - Project {id}
      </h1>

      {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">Date</label>
          <input
            type="date"
            name="date"
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">Weather</label>
          <select
            name="weather"
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            onChange={handleChange}
          >
            <option value="">Select Weather</option>
            <option>Sunny</option>
            <option>Cloudy</option>
            <option>Rainy</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">Work Description</label>
          <textarea
            name="description"
            placeholder="Describe work done today"
            rows="3"
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">Worker Count</label>
          <input
            type="number"
            name="workers"
            placeholder="Enter worker count"
            className="w-full border p-2 rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">Upload Photos</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full"
            onChange={handleImageChange}
          />
          <p className="text-xs text-gray-400 mt-1">Maximum 3 photos allowed</p>

          {preview.length > 0 && (
            <div className="flex gap-2 mt-3">
              {preview.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="preview"
                  className="w-16 h-16 object-cover rounded border"
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