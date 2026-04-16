"use client";

import { useState } from "react";
import {  X } from "lucide-react";


const CONTACT_API =
  `${process.env.NEXT_PUBLIC_API_BASE || "http://localhost/manduhub_backend"}/contacts/submit-contact.php`;
  // `${process.env.NEXT_PUBLIC_API_BASE || "https://api.himalayanthakali.com/himalayanthakali_backend"}/contacts/submit-contact.php`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({ type: "idle", message: "" });
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "info",
  });

  const showToast = (message, type = "info", duration = 3000) => {
    setToast({ visible: true, message, type });
    setTimeout(
      () => setToast({ visible: false, message: "", type: "info" }),
      duration,
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "fullName") {
      setValidation((prev) => ({
        ...prev,
        fullName: nameRegex.test(value),
      }));
    }

    if (name === "email") {
      setValidation((prev) => ({
        ...prev,
        email: emailRegex.test(value),
      }));
    }

    if (name === "phoneNo") {
      setValidation((prev) => ({
        ...prev,
        phoneNo: phoneRegex.test(value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    if (!validation.fullName || !validation.email || !validation.phoneNo) {
      showToast("Please correct the highlighted fields.", "error");
      return;
    }

    e.preventDefault();
    setSubmitState({ type: "loading", message: "" });

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      showToast("Message sent successfully!", "success");
      setSubmitState({
        type: "success",
        message: "",
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNo: "",
        message: "",
      });
      setValidation({
        fullName: null,
        email: null,
        phoneNo: null,
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      showToast("Could not send your message. Please try again.", "error");
      setSubmitState({
        type: "error",
        message: "",
      });
    }
  };
  const nameRegex = /^[A-Za-z][A-Za-z0-9\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(98|97|96)\d{8}$/;

  const [validation, setValidation] = useState({
    fullName: null,
    email: null,
    phoneNo: null,
  });

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 pt-16 lg:pt-30 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center lg:items-start">
         <div className="shrink-0 pt-1 w-full max-w-75">
          {/* Eyebrow */}
          <p
            className="text-xs font-sans font-semibold tracking-widest uppercase mb-2"
          >
            Contact Us
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-stone-800 mb-4 leading-tight">
            Get in <span className="text-[#D97634]">Touch</span> with{" "}
            <span className="text-[#D97634]">Us</span>
          </h2>

          {/* Subtext */}
          <p className="text-xs text-stone-500 leading-relaxed mb-6">
            Fill up the form provided to get in touch with us.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill= "#D97634"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D97634"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#D97634" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pb-6 sm:pb-8 md:pb-10 w-full max-w-125">
          {/* Toast Notification */}
          {toast.visible && (
            <div
              className={`fixed top-4 right-4 z-50 max-w-xs sm:max-w-sm rounded border p-3 sm:p-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300 text-xs sm:text-sm ${
                toast.type === "success"
                  ? "border-green-300 bg-emerald-50 text-green-600"
                  : toast.type === "error"
                    ? "border-rose-200 bg-rose-50 text-rose-800"
                    : "border-slate-200 bg-white text-slate-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{toast.message}</p>
                <button
                  onClick={() =>
                    setToast({ visible: false, message: "", type: "info" })
                  }
                  className="ml-2 inline-flex shrink-0 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          <div className="grid items-start gap-8 sm:gap-10 md:gap-12 lg:gap-20 md:grid-cols-1">
            <div className="order-2 md:order-1">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 md:space-y-6"
                aria-label="Contact form"
              >
                <div className="relative">
                  <fieldset className="group rounded-xl border border-zinc-400 px-1.5 transition-all focus-within:border-dashed focus-within:border-[#D97634]">
                    <legend className="px-2 text-xs tracking-wider text-[#D97634] uppercase">
                      Full Name
                    </legend>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      className="mb-1.5 w-full rounded-lg  border-gray-400 border px-4 py-1 text-black placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                  {validation.fullName !== null && (
                    <p
                      className={`text-[10px] sm:text-[12px] pl-4 ${validation.fullName ? "text-green-400" : "text-red-400"}`}
                    >
                      {validation.fullName
                        ? "Valid name"
                        : "Must start with a letter and contain only letters or numbers."}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <fieldset className="group rounded-xl border border-zinc-400 px-1.5 transition-all focus-within:border-dashed focus-within:border-[#D97634]">
                    <legend className="px-2 text-xs tracking-wider text-gray-400 uppercase">
                      Email Address
                    </legend>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="mb-1.5 w-full rounded-lg  border-gray-400 border px-4 py-1 text-black placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                  {validation.email !== null && (
                    <p
                      className={`text-[10px] sm:text-[12px] pl-4 ${validation.email ? "text-green-400" : "text-red-400"}`}
                    >
                      {validation.email
                        ? "Valid email address"
                        : "Invalid email format"}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <fieldset className="group rounded-xl border border-zinc-400 px-1.5 transition-all focus-within:border-dashed focus-within:border-[#D97634]">
                    <legend className="px-2 text-xs tracking-wider text-gray-400 uppercase">
                      Phone Number
                    </legend>
                    <input
                      type="tel"
                      id="phoneNo"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="mb-1.5 w-full rounded-lg  border-gray-400 border px-4 py-1 text-black placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                  {validation.phoneNo !== null && (
                    <p
                      className={`text-[10px] sm:text-[12px] pl-4 ${validation.phoneNo ? "text-green-400" : "text-red-400"}`}
                    >
                      {validation.phoneNo
                        ? "Valid phone number"
                        : "Must start with 98, 97, or 96 and be exactly 10 digits"}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <fieldset className="group rounded-xl border border-zinc-400 px-1.5 transition-all focus-within:border-dashed focus-within:border-[#D97634]">
                    <legend className="px-2 text-xs tracking-wider text-gray-400 uppercase">
                      Message
                    </legend>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full resize-none rounded-lg  border-gray-400 border px-4 py-3 text-black placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                </div>

                <div className="flex">
                  <button
                    type="submit"
                    disabled={submitState.type === "loading"}
                    className="rounded-tl-2xl rounded-br-2xl border border-[#D97634] text-[#D84315] px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider  hover:text-white uppercase transition-colors duration-200 hover:bg-[#D84315] disabled:bg-orange-400 disabled:cursor-not-allowed"
                  >
                    {submitState.type === "loading"
                      ? "Sending..."
                      : "Send Message"}
                  </button>
                </div>
 
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-center text-sm ${
                    submitState.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submitState.message}
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
