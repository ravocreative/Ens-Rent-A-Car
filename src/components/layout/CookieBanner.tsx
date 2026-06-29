"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-16 left-4 right-4 z-50 mx-auto max-w-lg rounded-2xl border border-[var(--border)] bg-white p-5 shadow-2xl lg:bottom-6"
        >
          <p className="mb-4 text-sm text-[var(--muted)] leading-relaxed">
            Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.
            Detaylı bilgi için{" "}
            <a href="/kvkk" className="text-[var(--primary)] underline">
              KVKK Aydınlatma Metni
            </a>
            &apos;ni inceleyebilirsiniz.
          </p>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={handleAccept}>
              Kabul Et
            </Button>
            <Button size="sm" variant="outline" onClick={handleReject}>
              Reddet
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
