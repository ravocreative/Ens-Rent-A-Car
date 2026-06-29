import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-1.5 text-sm text-[var(--muted)] flex-wrap">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors"
            aria-label="Anasayfa"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-[var(--border)]" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[var(--primary)] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text)] font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
