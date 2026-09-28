"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { LinkItemData } from "@/config/links";
import { useLanguage } from "./LanguageProvider";

interface LinkItemProps {
  link: LinkItemData;
}

import type { StaticImageData } from "next/image";

const IconMapper: React.FC<{ type: string; value: string | StaticImageData }> = ({ type, value }) => {
  if (type === "react-icon") {
    switch (value) {
      case "FaWhatsapp": return <FaWhatsapp className="link-icon" style={{ color: "#25D366" }} />;
      case "FaInstagram": return (
        <>
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <linearGradient id="ig-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#f09433" offset="0%" />
              <stop stopColor="#e6683c" offset="25%" />
              <stop stopColor="#dc2743" offset="50%" />
              <stop stopColor="#cc2366" offset="75%" />
              <stop stopColor="#bc1888" offset="100%" />
            </linearGradient>
          </svg>
          <FaInstagram className="link-icon" style={{ fill: "url(#ig-gradient)" }} />
        </>
      );
      case "FaGithub": return <FaGithub className="link-icon" style={{ color: "#ffffff" }} />;
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

const TickingClock = () => {
  const [clockIndex, setClockIndex] = useState(0);
  const clocks = ["🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setClockIndex((prev) => (prev + 1) % clocks.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  return <span style={{ fontSize: "3rem", display: "inline-block" }}>{clocks[clockIndex]}</span>;
};


export const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  const { language } = useLanguage();
  const text = link[language];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (link.isAlert) {
    const handleAlertClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsModalOpen(true);
    };

    const modal = isModalOpen && mounted ? createPortal(
      <div 
        className="modal-overlay" 
        onClick={() => setIsModalOpen(false)}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          animation: 'fadeIn 0.2s ease-out'
        }}
      >
        <div 
          className="modal-card"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'var(--md-sys-color-surface)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            color: 'var(--md-sys-color-on-surface)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            animation: 'scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          <TickingClock />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0, color: 'var(--md-sys-color-on-surface)' }}>
            {language === 'de' ? 'Bald verfügbar' : 'Coming Soon'}
          </h3>
          <p style={{ margin: 0, color: 'var(--md-sys-color-outline)', lineHeight: '1.6' }}>
            {link.alertText?.[language]}
          </p>
          <button 
            onClick={() => setIsModalOpen(false)}
            style={{
              marginTop: '1.5rem',
              padding: '0.875rem 1.5rem',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: 'var(--md-sys-color-primary)',
              color: 'var(--md-sys-color-on-primary)',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              width: '100%',
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            {language === 'de' ? 'Verstanden' : 'Got it'}
          </button>
        </div>
      </div>,
      document.body
    ) : null;

    return (
      <>
        <a href={link.url} onClick={handleAlertClick} className="link-item">
          <div className="link-content">
            <IconMapper type={link.iconType} value={link.iconValue} />
            <span className="link-title">{text}</span>
          </div>
        </a>
        {modal}
      </>
    );
  }

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
