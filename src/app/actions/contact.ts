"use server";

import nodemailer from "nodemailer";
import { contactNeeds } from "@/data/contact";
import { site } from "@/data/site";

export type ContactSubmission = {
  needs: number[];
  detail: string;
  nom: string;
  entreprise: string;
  telephone: string;
  secteur: string;
  honeypot: string;
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitContactForm(
  data: ContactSubmission,
): Promise<SubmitResult> {
  if (data.honeypot) {
    return { ok: true };
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
    return {
      ok: false,
      error: "Envoi indisponible pour le moment. Écrivez-nous sur WhatsApp.",
    };
  }

  const needsLabels = data.needs
    .map((i) => contactNeeds[i])
    .filter((label): label is string => Boolean(label));

  const lines = [
    `Besoins sélectionnés : ${needsLabels.length ? needsLabels.join(", ") : "aucun"}`,
    `Message : ${data.detail.trim() || "(vide)"}`,
    "",
    `Nom : ${data.nom.trim() || "(non renseigné)"}`,
    `Entreprise : ${data.entreprise.trim() || "(non renseigné)"}`,
    `Téléphone / WhatsApp : ${data.telephone.trim() || "(non renseigné)"}`,
    `Secteur : ${data.secteur}`,
  ];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Site DJELI'S" <${user}>`,
      to: site.email,
      replyTo: user,
      subject: `Nouvelle demande de contact — ${data.nom.trim() || "sans nom"}`,
      text: lines.join("\n"),
    });
    return { ok: true };
  } catch (err) {
    console.error("Failed to send contact email", err);
    return {
      ok: false,
      error: "Envoi impossible pour le moment. Écrivez-nous sur WhatsApp.",
    };
  }
}
