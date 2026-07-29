import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import StatCards from "./StatCards";
import Toolbar from "./Toolbar";
import RepairTable from "./RepairTable";
import AddRepairModal from "./AddRepairModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const handleSave = (data) => {
    if (editingJob) {
      console.log("Updated repair job:", { ...editingJob, ...data });
      // Here you would send the updated data to your backend
    } else {
      console.log("New repair job:", data);
      // Here you would send the new data to your backend
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
      />
      <RepairTable onRowClick={handleRowClick} />

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
