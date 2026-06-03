import type { StaticImageData } from "next/image";
import gdgBrackets from "../../public/assets/GDG Brackets.png";
import fsi from "../../public/assets/fsi.png";

export type LinkItemData = {
  id: string;
  url: string;
  isEmail?: boolean;
  emailAddress?: string;
  de: string;
  en: string;
  iconType: 'react-icon' | 'image';
  iconValue: string | StaticImageData; // React-Icon component name or imported image
};

export const links: LinkItemData[] = [
  {
    id: 'whatsapp',
    url: 'https://gdgoc-university-of-duisburg-essen.github.io/main_redirect/',
    de: 'WhatsApp Kanal',
    en: 'WhatsApp Channel',
    iconType: 'react-icon',
    iconValue: 'FaWhatsapp',
  },
  {
    id: 'talks',
    url: 'https://gdgoc-university-of-duisburg-essen.github.io/talk_hub/',
    de: 'Vortragsfolien',
    en: 'Talk Slides',
    iconType: 'image',
    iconValue: gdgBrackets,
  },
  {
    id: 'website',
    url: 'https://gdg.community.dev/gdg-on-campus-university-of-duisburg-essen-essen-germany/',
    de: 'Website',
    en: 'Website',
    iconType: 'image',
    iconValue: gdgBrackets,
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/gdg_ude/',
    de: 'Instagram',
    en: 'Instagram',
    iconType: 'react-icon',
    iconValue: 'FaInstagram',
  },
  {
    id: 'github',
    url: 'https://github.com/GDGoC-University-of-Duisburg-Essen/talk_hub',
    de: 'GitHub',
    en: 'GitHub',
    iconType: 'react-icon',
    iconValue: 'FaGithub',
  },
  {
    id: 'fsi',
    url: 'https://fie-due.de/',
    de: 'Fachschaft Informatik',
    en: 'Computer Science Student Council',
    iconType: 'image',
    iconValue: fsi,
  },
  {
    id: 'email',
    url: 'mailto:gdgoc-ude@googlegroups.com',
    isEmail: true,
    emailAddress: 'gdgoc-ude@googlegroups.com',
    de: 'Emails und Bewerbungen für das Core Team',
    en: 'Emails and Applications for the Core Team',
    iconType: 'react-icon',
    iconValue: 'FaEnvelope',
  },
];
