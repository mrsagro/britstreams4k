"use client";

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(() => import("./FloatingWhatsApp"), { ssr: false });
const FloatingTelegram = dynamic(() => import("./FloatingTelegram"), { ssr: false });

export default function FloatingWidgets() {
  return (
    <>
      <FloatingWhatsApp />
      <FloatingTelegram />
    </>
  );
}
