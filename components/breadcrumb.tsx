'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-secondary/50 border-b border-border py-3 md:py-4" aria-label="Breadcrumb">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <ol className="flex items-center gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-sm text-foreground/70 font-medium">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <ChevronRight size={16} className="text-foreground/40" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
