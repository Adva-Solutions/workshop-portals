"use client";

import Link from "next/link";

interface NavProps {
  clientName: string;
  slug: string;
}

export function Nav({ clientName, slug }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-black/6 bg-white/95 px-6 py-4 backdrop-blur-md md:px-12">
      <Link
        href={`/${slug}`}
        className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-black no-underline"
      >
        {clientName.toLowerCase()}
      </Link>
      <div className="flex items-center gap-4">
        <span className="text-xs font-medium text-gray-mid">
          AI Workshop
        </span>
        <Link
          href={`/${slug}#homework`}
          className="rounded bg-blue px-4 py-2 font-[family-name:var(--font-heading)] text-sm font-medium text-white no-underline transition-colors hover:bg-blue-hover"
        >
          Learning Portal
        </Link>
      </div>
    </nav>
  );
}
