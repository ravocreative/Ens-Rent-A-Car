"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { companyInfo, getPhoneUrl } from "@/config/company";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
              <span className="font-heading text-lg font-bold text-[var(--text)]">
                Menü
              </span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-[var(--muted)] hover:bg-[var(--surface)]"
                aria-label="Menüyü kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[var(--text)] font-medium hover:bg-[var(--surface)]"
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-4 space-y-1 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className="block rounded-xl px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block rounded-xl px-4 py-3 text-[var(--text)] font-medium hover:bg-[var(--surface)]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-[var(--border)] p-4 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                {companyInfo.authorizedPerson}
              </div>
              <a
                href={getPhoneUrl()}
                className="flex items-center gap-2 text-sm text-[var(--text)] hover:text-[var(--primary)] transition-colors"
              >
                <Phone className="h-4 w-4" />
                {companyInfo.primaryPhone.display}
              </a>
              <a
                href={getPhoneUrl(true)}
                className="flex items-center gap-2 text-sm text-[var(--text)] hover:text-[var(--primary)] transition-colors"
              >
                <Phone className="h-4 w-4" />
                {companyInfo.secondaryPhone.display}
              </a>
              <Button
                href={getPhoneUrl()}
                size="lg"
                className="w-full"
                aria-label={`Hemen ara: ${companyInfo.primaryPhone.display}`}
              >
                <Phone className="h-5 w-5" />
                Hemen Ara
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
