import { useState, useEffect } from "react";
import { X } from "lucide-react";

const AddRepairModal = ({ isOpen, onClose, onSave, editingJob }) => {
  const [formData, setFormData] = useState({
    client: "",
    deviceType: "",
    issueDescription: "",
    status: "Received",
    costEstimate: "",
  });

  // Populate form when editingJob changes
  useEffect(() => {
    if (editingJob) {
      setFormData({
        client: editingJob.client || editingJob.name || "",
        deviceType: editingJob.device || editingJob.deviceType || "",
        issueDescription:
          editingJob.issue || editingJob.issue_description || "",
        status: editingJob.status || "Received",
        costEstimate:
          editingJob.estimate !== undefined
            ? editingJob.estimate.toString()
            : editingJob.estimated_price
              ? editingJob.estimated_price.toString()
              : "",
      });
    } else {
      // Reset form when modal is closed or opened for new job
      setFormData({
        client: "",
        deviceType: "",
        issueDescription: "",
        status: "Received",
        costEstimate: "",
      });
    }
  }, [editingJob, isOpen]);

  const statusOptions = [
    "Received",
    "In progress",
    "Waiting for parts",
    "Completed",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for save - map back to database field names if needed
    const saveData = {
      name: formData.client,
      device: formData.deviceType,
      issue_description: formData.issueDescription,
      status: formData.status,
      estimated_price: parseFloat(formData.costEstimate) || 0,
    };

    // If editing, include the ID so the backend can update the right row
    if (editingJob) {
      saveData.customer_id = editingJob.id || editingJob.cusomer_id;
    }

    onSave(saveData);
    onClose();
  };

  if (!isOpen) return null;

  const isEditing = !!editingJob;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#322e18]/30 px-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-lg rounded-md border border-[#8a817c]/20 bg-[#fefeff] p-6 md:p-8 shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-sans text-xl font-semibold text-[#322e18]">
            {isEditing ? "Edit Repair Job" : "New Repair Job"}
          </h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-[#8a817c] transition-colors hover:bg-[#253c78]/10 hover:text-[#322e18]"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Client */}
          <div>
            <label
              htmlFor="client"
              className="mb-1.5 block font-sans text-sm font-medium text-[#322e18]"
            >
              Client
            </label>
            <input
              type="text"
              id="client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#8a817c]/30 bg-[#fefeff] px-4 py-2.5 font-sans text-sm text-[#322e18] placeholder:text-[#8a817c]/60 focus:border-[#253c78] focus:outline-none focus:ring-1 focus:ring-[#253c78]"
            />
          </div>

          {/* Device Type */}
          <div>
            <label
              htmlFor="deviceType"
              className="mb-1.5 block font-sans text-sm font-medium text-[#322e18]"
            >
              Device Type
            </label>
            <input
              type="text"
              id="deviceType"
              name="deviceType"
              value={formData.deviceType}
              onChange={handleChange}
              required
              placeholder="e.g., iPhone 14 Pro, MacBook Pro"
              className="w-full rounded-md border border-[#8a817c]/30 bg-[#fefeff] px-4 py-2.5 font-sans text-sm text-[#322e18] placeholder:text-[#8a817c]/60 focus:border-[#253c78] focus:outline-none focus:ring-1 focus:ring-[#253c78]"
            />
          </div>

          {/* Issue Description */}
          <div>
            <label
              htmlFor="issueDescription"
              className="mb-1.5 block font-sans text-sm font-medium text-[#322e18]"
            >
              Issue Description
            </label>
            <textarea
              id="issueDescription"
              name="issueDescription"
              value={formData.issueDescription}
              onChange={handleChange}
              required
              rows={3}
              className="w-full rounded-md border border-[#8a817c]/30 bg-[#fefeff] px-4 py-2.5 font-sans text-sm text-[#322e18] placeholder:text-[#8a817c]/60 focus:border-[#253c78] focus:outline-none focus:ring-1 focus:ring-[#253c78]"
            />
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="mb-1.5 block font-sans text-sm font-medium text-[#322e18]"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-md border border-[#8a817c]/30 bg-[#fefeff] px-4 py-2.5 font-sans text-sm text-[#322e18] focus:border-[#253c78] focus:outline-none focus:ring-1 focus:ring-[#253c78]"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Cost Estimate */}
          <div>
            <label
              htmlFor="costEstimate"
              className="mb-1.5 block font-sans text-sm font-medium text-[#322e18]"
            >
              Cost Estimate ($)
            </label>
            <input
              type="number"
              id="costEstimate"
              name="costEstimate"
              value={formData.costEstimate}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="0.00"
              className="w-full rounded-md border border-[#8a817c]/30 bg-[#fefeff] px-4 py-2.5 font-sans text-sm text-[#322e18] placeholder:text-[#8a817c]/60 focus:border-[#253c78] focus:outline-none focus:ring-1 focus:ring-[#253c78]"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-[#8a817c]/30 px-6 py-2.5 font-sans text-sm font-medium text-[#322e18] transition-colors hover:bg-[#253c78]/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#253c78] px-6 py-2.5 font-sans text-sm font-medium text-[#fefeff] transition-colors hover:bg-[#253c78]/90 focus:outline-none focus:ring-2 focus:ring-[#253c78] focus:ring-offset-2"
            >
              {isEditing ? "Update Job" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRepairModal;
