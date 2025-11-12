"use client";

import { Mail, ExternalLink, FileDown, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [gmailAvailable, setGmailAvailable] = useState(false);
  const email = "smsureshi7@gmail.com";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Let's%20Collaborate&body=Hi%20Sureshi%2C%0A%0AI'd%20love%20to%20work%20with%20you!`;
  const mailtoLink = `mailto:${email}?subject=Let's%20Collaborate&body=Hi%20Sureshi%2C%0A%0AI'd%20love%20to%20work%20with%20you!`;

  useEffect(() => {
    const checkGmailAvailability = async () => {
      try {
        await fetch("https://mail.google.com/mail/u/0/", {
          method: "HEAD",
          mode: "no-cors",
        });
        setGmailAvailable(true);
      } catch {
        setGmailAvailable(false);
      }
    };
    checkGmailAvailability();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied! The email address has been copied to your clipboard.", { duration: 2500 });
    } catch {
      toast.error("Copy failed. Please copy manually.");
    }
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!gmailAvailable) window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Let&apos;s Compose{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to build a vibrant, high-impact digital experience? Reach out, and let&apos;s turn your concept into a harmonic reality.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="max-w-xl mx-auto p-8 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 shadow-md space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Link */}
              <div className="relative">
                <a
                  href={gmailAvailable ? gmailLink : mailtoLink}
                  target={gmailAvailable ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onClick={handleEmailClick}
                  className="block"
                >
                  <div className="p-6 rounded-xl text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer" style={{ backgroundColor: "#2B96A8" }}>
                    <div className="flex items-center space-x-3 mb-2">
                      <Mail className="w-6 h-6" />
                      <span className="font-semibold text-lg">Email</span>
                    </div>
                    <p className="text-sm font-mono break-all">{email}</p>
                  </div>
                </a>

                {/* Copy Button */}
                {!gmailAvailable && (
                  <button
                    onClick={handleCopyEmail}
                    className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
                    title="Copy email address"
                  >
                    <Copy className="w-4 h-4 text-white" />
                  </button>
                )}
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sureshi-siriwardena-537453118/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-6 rounded-xl text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer" style={{ backgroundColor: "#E86A92" }}>
                  <div className="flex items-center space-x-3 mb-2">
                    <ExternalLink className="w-6 h-6" />
                    <span className="font-semibold text-lg">LinkedIn</span>
                  </div>
                  <p className="text-sm font-mono">Sureshi Siriwardena</p>
                </div>
              </a>
            </div>

            {/* Resume Download */}
            <a href="/sureshi siriwardena.pdf" download>
              <div className="p-6 rounded-xl text-[#1C1C1C] transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer" style={{ backgroundColor: "#FFC857" }}>
                <div className="flex items-center space-x-3 mb-2">
                  <FileDown className="w-6 h-6" />
                  <span className="font-semibold text-lg">Download Resume</span>
                </div>
                <p className="text-sm font-mono">Click to Download</p>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-muted-foreground">
            <p className="text-sm">© {new Date().getFullYear()} Sureshi Siriwardena. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
