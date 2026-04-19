"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useToast } from "../components/providers/ToastProvider";

const API = "http://localhost/manduhub_backend/career";
// const API = "https://api.himalayanthakali.com/himalayanthakali_backend/career";
const API2 = "http://localhost/manduhub_backend/application";
// const API2 = "https://api.himalayanthakali.com/himalayanthakali_backend/application";

export default function CareerPage() {
  const [jobListings, setJobListings] = useState([]);
  const [careerEmail, setCareerEmail] = useState("abc@example.com");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const openApplication = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleFormChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const submitApplication = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("job_id", selectedJob.id);
    form.append("job_title", selectedJob.title);
    form.append("full_name", formData.full_name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    form.append("resume", formData.resume);

    const res = await fetch(`${API2}/submit_application.php`, {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    showToast(
      data.message ||
        (data.success ? "Application submitted." : "Submission failed."),
      data.success ? "success" : "error",
    );

    if (data.success) {
      closeModal();
    }
  };

  async function fetchJobs() {
    try {
      const res = await fetch(`${API}/get_openings.php`);
      const data = await res.json();
      if (data.success) {
        setJobListings(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  }

  async function fetchCareerEmail() {
    try {
      const res = await fetch(`${API}/get_career_email.php`);
      const data = await res.json();
      if (data.success) {
        setCareerEmail(data.email);
      }
    } catch (error) {
      console.error("Failed to fetch email:", error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchJobs();
      fetchCareerEmail();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@400;500;600&display=swap");

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out backwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out backwards;
        }

        .benefit-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .benefit-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .benefit-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .job-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .job-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .job-card:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>

      <div className="max-w-300 mx-auto px-6 pt-5">
        {/* Header Section */}
        <header className="text-center mb-20">
          {/* Career Label */}
          <div className="flex items-center justify-center gap-3 text-[#D97634] text-sm font-medium tracking-[0.125rem] animate-fadeInDown">
            <span>Current Openings</span>
          </div>

          {/* Title */}
          <h1
            className="text-[38px] md:text-[46px] font-semibold text-black animate-fadeInUp"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
           Join <span className="text-[#D97634]">Our Team</span> 
          </h1>

          {/* Description */}
          <p
            className="text-[#999] text-base leading-relaxed max-w-150 mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </header>

        {/* ================= CURRENT OPENINGS ================= */}
        <div className="mb-12">
          <div className="space-y-6">
            {jobListings.length > 0 ? (
              jobListings.map((job) => (
                <div
                  key={job.id}
                  className="job-card border-b border-[#D97634] overflow-hidden hover:shadow-[0_8px_25px_rgba(217,118,52,0.15)] transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-[#D84315]">
                          {job.title}
                        </h3>

                        <p className="text-[#999] text-sm leading-relaxed mb-4">
                          {job.description}
                        </p>

                        {/* Job Meta */}
                        <div className="flex flex-wrap gap-4 text-sm text-[#D97634]">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span> EXPERIENCE- {job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 6V12L16 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:ml-6">
                        <button
                          onClick={() => openApplication(job)}
                          className="border border-[#D97634] text-[#D97634] px-8 py-3 rounded-tl-2xl rounded-br-2xl font-medium uppercase tracking-wider text-sm hover:bg-[#c56829] hover:text-white transition-all duration-300 hover:shadow-[0_5px_20px_rgba(217,118,52,0.4)]"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-[#999] py-10">
                No current openings available.
              </div>
            )}
          </div>
        </div>

        {/* ================= FOOTER EMAIL SECTION ================= */}
        <div className="text-center mt-16 pt-12">
          <p className="text-[#D97634] text-base">
            Don&apos;t see any post for you?{" "}
            <a
              href={`mailto:${careerEmail}`}
              className="underline hover:text-[#c56829] transition-colors duration-300"
            >
              Email your resume to {careerEmail}
            </a>
          </p>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-100">
          <div className="bg-white text-black w-full max-w-lg p-8 rounded-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              Apply for {selectedJob?.title}
            </h2>

            <form onSubmit={submitApplication} className="space-y-4">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
                onChange={handleFormChange}
                className="w-full border border-gray-400 p-2 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleFormChange}
                className="w-full border border-gray-400 p-2 rounded"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleFormChange}
                className="w-full border border-gray-400 p-2 rounded"
              />

              <textarea
                name="message"
                placeholder="Cover Letter / Message"
                rows="3"
                onChange={handleFormChange}
                className="w-full border border-gray-400 p-2 rounded"
              />

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFormChange}
                className=" border px-2 border-gray-400 py-2"
              />

              <div className="md:ml-6">
                <button className="bg-[#D97634] text-white px-8 py-3 rounded-tl-2xl rounded-br-2xl font-medium uppercase tracking-wider text-sm hover:bg-[#c56829] transition-all duration-300 hover:shadow-[0_5px_20px_rgba(217,118,52,0.4)] hover:-translate-y-0.5 whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
