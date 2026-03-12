import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import DPRForm from "./pages/DPRForm";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="dpr/:id" element={<DPRForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;