"use client";

import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { LinkItemData } from "@/config/links";
import { useLanguage } from "./LanguageProvider";

interface LinkItemProps {
  link: LinkItemData;
}

const IconMapper: React.FC<{ type: string; value: string }> = ({ type, value }) => {
  if (type === "react-icon") {
    switch (value) {
      case "FaWhatsapp": return <FaWhatsapp className="link-icon" />;
      case "FaInstagram": return <FaInstagram className="link-icon" />;
      case "FaGithub": return <FaGithub className="link-icon" />;
      case "FaEnvelope": return <FaEnvelope className="link-icon" />;
      default: return null;
    }
  }

  if (type === "image") {
    return (
      <div className="link-image-container">
        <Image src={value} alt="Logo" fill className="link-image" sizes="40px" />
      </div>
    );
  }

  return null;
};

export const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  const { language } = useLanguage();
  const text = link[language];

  if (link.isEmail) {
    return (
      <a href={link.url} className="link-item email-item" target="_blank" rel="noopener noreferrer">
        <div className="link-content email-content">
          <IconMapper type={link.iconType} value={link.iconValue} />
          <div className="email-text-container">
            <span className="link-title email-title">{text}</span>
            <span className="email-address">{link.emailAddress}</span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={link.url} className="link-item" target="_blank" rel="noopener noreferrer">
      <div className="link-content">
        <IconMapper type={link.iconType} value={link.iconValue} />
        <span className="link-title">{text}</span>
      </div>
    </a>
  );
};
