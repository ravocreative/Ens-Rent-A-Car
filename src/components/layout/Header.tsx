"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { companyInfo, getPhoneUrl } from "@/config/company";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md"
            : "bg-white"
        )}
      >
        <Container className="flex items-center justify-between py-3 lg:py-4">
          <Link href="/" className="flex items-center gap-2" aria-label={companyInfo.name}>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] font-heading text-lg font-bold text-[var(--secondary)]">
                İ
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight text-[var(--text)]">
                  {companyInfo.shortName}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">
                  Araç Kiralama
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:block" aria-label="Ana menü">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && handleDropdownEnter(item.label)
                  }
                  onMouseLeave={() => item.children && handleDropdownLeave()}
                >
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                      {openDropdown === item.label && (
                        <div className="absolute left-0 top-full z-50 min-w-[200px] rounded-xl border border-[var(--border)] bg-white py-2 shadow-xl">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-[var(--text)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href={getPhoneUrl()}
              size="sm"
              className="hidden sm:inline-flex"
              aria-label={`Hemen ara: ${companyInfo.displayPhone}`}
            >
              <Phone className="h-4 w-4" />
              Hemen Ara
            </Button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-xl p-2 text-[var(--text)] hover:bg-[var(--surface)] lg:hidden"
              aria-label="Menüyü aç"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
