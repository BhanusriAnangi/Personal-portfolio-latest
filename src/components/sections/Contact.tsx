"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate server POST request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50/50 dark:bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight flex items-center justify-center gap-3">
            <Mail className="w-8 h-8 text-indigo-500" />
            <span>Contact Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium">
            Have a project in mind, want to discuss a job role, or simply want to say hello? Drop me a message.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side: Contact Cards - 5 Columns */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              I am open to full-time engineering opportunities and contract Shopify storefront projects. Feel free to contact me via email or phone.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:bhanuannagi1@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm hover:border-indigo-500/50 hover:shadow-md transition-all group glass"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-650 dark:text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Email Address</div>
                  <div className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 break-all group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    bhanuannagi1@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919390623903"
                className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm hover:border-indigo-500/50 hover:shadow-md transition-all group glass"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-650 dark:text-indigo-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Phone Number</div>
                  <div className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    +91 9390623903
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm glass">
                <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-650 dark:text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Location</div>
                  <div className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200">
                    Hyderabad, Telangana, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Online Profiles</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/BhanusriAnangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white hover:scale-110 transition-all shadow-sm"
                  aria-label="View Github Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhanu-sri-anangi-2963b3248/" // fallback profile link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white hover:scale-110 transition-all shadow-sm"
                  aria-label="View LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form validation - 7 Columns */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm glass">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Success / Error Messages */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                      <p className="text-xs mt-0.5">Thank you for writing. I will get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-800 dark:text-red-400 rounded-xl flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Submission Failed</h4>
                      <p className="text-xs mt-0.5">Something went wrong. Please check your network and try again.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white/50 dark:bg-zinc-950/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                      errors.name ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-[11px] text-red-500 font-bold">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white/50 dark:bg-zinc-950/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                      errors.email ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-[11px] text-red-500 font-bold">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white/50 dark:bg-zinc-950/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                    errors.subject ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                  }`}
                  placeholder="Inquiry about custom Shopify store..."
                />
                {errors.subject && <span className="text-[11px] text-red-500 font-bold">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Your Message
                  {formData.message && (
                    <span className="text-[10px] text-zinc-400 normal-case font-normal ml-2">
                      ({formData.message.trim().length} chars)
                    </span>
                  )}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white/50 dark:bg-zinc-950/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                  }`}
                  placeholder="Describe your project, timeline, or requirements..."
                />
                {errors.message && <span className="text-[11px] text-red-500 font-bold">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white font-medium rounded-xl shadow-md hover:shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
