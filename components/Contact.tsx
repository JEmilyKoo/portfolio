"use client";
import { FaGithub, FaEnvelope, FaBlogger, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[600px] mx-auto mb-24 pt-12 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
        <span className="text-primary">Contact</span>
      </h2>
      <div className="bg-surface border border-border rounded-2xl shadow-custom p-8 flex flex-col gap-6 w-full items-center">
        <div className="flex flex-col gap-4 w-full">
          <ContactItem
            icon={<FaEnvelope />}
            label="Email"
            value="ssafy.lee@gmail.com"
            href="mailto:ssafy.lee@gmail.com"
          />
          <ContactItem
            icon={<FaGithub />}
            label="GitHub"
            value="SsafyLee"
            href="https://github.com/SsafyLee"
          />
          <ContactItem
            icon={<FaBlogger />}
            label="Blog"
            value="velog.io/@ssafy.lee"
            href="https://velog.io/@ssafy.lee/posts"
          />
          <ContactItem
            icon={<FaPhone />}
            label="Phone"
            value="010-2025-0530"
            href="tel:01020250530"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors group"
    >
      <span className="text-primary text-2xl">{icon}</span>
      <span className="font-semibold text-text">{label}:</span>
      <span className="text-subText group-hover:text-primary transition-colors">{value}</span>
    </a>
  );
} 