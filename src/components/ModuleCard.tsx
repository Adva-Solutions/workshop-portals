import Link from "next/link";
import {
  Sparkles,
  Monitor,
  Brain,
  Mic,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import type { Module } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  monitor: Monitor,
  brain: Brain,
  mic: Mic,
  calendar: Calendar,
};

interface ModuleCardProps {
  module: Module;
  index: number;
  slug: string;
}

export function ModuleCard({ module, index, slug }: ModuleCardProps) {
  const Icon = iconMap[module.icon] || Sparkles;

  if (module.highlight) {
    return (
      <Link
        href={`/${slug}/modules/${module.slug}`}
        className="group relative block overflow-hidden rounded-2xl bg-[#121212] p-8 no-underline md:p-12"
      >
        <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-orange opacity-90" />
        <div className="absolute -bottom-10 right-32 h-36 w-36 rounded-full bg-yellow opacity-80" />
        <div className="relative z-10">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-orange">
            The Game Changer
          </div>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-light tracking-tight text-white md:text-5xl">
            {module.title}.
          </h2>
          <p className="mb-6 max-w-md text-sm leading-relaxed text-white/60">
            {module.sections[0]?.type === "content"
              ? module.sections[0].content
              : ""}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-2 text-sm font-semibold text-white">
            2+ hours &rarr; under 10 minutes
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/50 transition-colors group-hover:text-white/80">
            Start learning <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/${slug}/modules/${module.slug}`}
      className="group block rounded-2xl border border-black/6 bg-white p-6 no-underline transition-shadow hover:shadow-lg md:p-8"
    >
      <div className="mb-4 flex items-baseline gap-4">
        <span className="shrink-0 rounded-full border border-gray-light px-3 py-1 font-[family-name:var(--font-heading)] text-sm text-gray-mid">
          {String(index).padStart(2, "0")}
        </span>
        <Icon className="h-5 w-5 text-gray-mid" />
      </div>
      <h3 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-light tracking-tight md:text-3xl">
        {module.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-text">
        {module.sections[0]?.type === "content"
          ? module.sections[0].content
          : module.objectives[0]}
      </p>
      <div className="flex items-center gap-4 text-xs text-gray-mid">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {module.durationMinutes} min
        </span>
        <span className="rounded-full bg-beige px-2 py-0.5 capitalize">
          {module.difficulty}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue opacity-0 transition-opacity group-hover:opacity-100">
        Open module <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
