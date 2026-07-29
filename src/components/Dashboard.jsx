import { useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import StatCards from "./StatCards";
import Toolbar from "./Toolbar";
import AddRepairModal from "./AddRepairModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const handleSave = async (data) => {
    try {
      if (editingJob) {
        await axios.patch("http://localhost:3000/updateModal", data, {
          withCredentials: true,
        });
      } else {
        await axios.post("http://localhost:3000/modal", data, {
          withCredentials: true,
        });
      }
    } catch (er) {
      console.log(er);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingJob(null);
  };
  const handleRowClick = (job) => {
    // Map the database field names to what the form expects
    const mappedJob = {
      id: job.cusomer_id || job.id,
      client: job.name || "",
      device: job.device || "",
      issue: job.issue_description || "",
      status: job.status || "Received",
      estimate: job.estimated_price || 0,
      // Keep original data if needed for backend
      _original: job,
    };

    setEditingJob(mappedJob);
    setIsModalOpen(true);
  };
  return (
    <>
      <AdminNavbar />
      <StatCards />
      <Toolbar
        onNewRepairClick={() => {
          setEditingJob(null);
          setIsModalOpen(true);
        }}
        onRowClick={handleRowClick}
      />

      <AddRepairModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        editingJob={editingJob}
      />
    </>
  );
};
export default Dashboard;
