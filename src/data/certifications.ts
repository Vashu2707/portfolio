export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: "certificate" | "patent";
  description?: string;
  date?: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "JavaScript Course",
    issuer: "Let's Upgrade",
    type: "certificate",
  },
  {
    id: "2",
    title: "MongoDB Certification",
    issuer: "Let's Upgrade",
    type: "certificate",
  },
  {
    id: "3",
    title: "SQL Certification",
    issuer: "Let's Upgrade",
    type: "certificate",
  },
  {
    id: "4",
    title: "Vision-Based Intelligent Shelf Infrastructure for Autonomous Product Tracking and Contactless Checkout",
    issuer: "Indian Patent Office",
    type: "patent",
    description:
      "A vision-based intelligent shelf infrastructure for autonomous retail checkout using AI-based product detection, virtual cart management, and automated billing — eliminating the need for barcode scanning, RFID tags, or smart carts.",
    date: "August 14, 2026",
  },
];
