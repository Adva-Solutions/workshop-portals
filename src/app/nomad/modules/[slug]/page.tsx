import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Target,
  Sparkles,
  Monitor,
  Brain,
  Mic,
  Calendar,
} from "lucide-react";
import { nomadPortal } from "@/data/nomad";
import { ModuleContent } from "@/components/ModuleContent";
import type { Metadata } from "next";

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  monitor: Monitor,
  brain: Brain,
  mic: Mic,
  calendar: Calendar,
};

export function generateStaticParams() {
  return nomadPortal.modules.map((mod) => ({
    slug: mod.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const mod = nomadPortal.modules.find((m) => m.slug === params.slug);
  return {
    title: mod
      ? `${mod.title} | ${nomadPortal.client.name}`
      : "Module Not Found",
  };
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const modules = nomadPortal.modules;
  const moduleIndex = modules.findIndex((m) => m.slug === params.slug);
  const mod = modules[moduleIndex];

  if (!mod) return notFound();

  const prevModule = moduleIndex > 0 ? modules[moduleIndex - 1] : null;
  const nextModule =
    moduleIndex < modules.length - 1 ? modules[moduleIndex + 1] : null;
  const Icon = iconMap[mod.icon] || Sparkles;

  return (
    <div className="mx-auto max-w-3xl px-6 pt-8 pb-16 md:px-12 md:pt-12">
      {/* Breadcrumb */}
      <Link
        href="/nomad"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-mid no-underline transition-colors hover:text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        All modules
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <Icon className="h-5 w-5 text-gray-mid" />
          <span className="rounded-full bg-beige px-3 py-1 text-xs font-medium capitalize text-gray-text">
            {mod.difficulty}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-mid">
            <Clock className="h-3.5 w-3.5" />
            {mod.durationMinutes} min
          </span>
        </div>
        <h1 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-light tracking-tight md:text-5xl">
          {mod.title}
        </h1>

        {/* Objectives */}
        <div className="rounded-xl bg-beige p-5">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-mid">
            <Target className="h-3.5 w-3.5" />
            Learning objectives
          </div>
          <ul className="space-y-1">
            {mod.objectives.map((obj, i) => (
              <li
                key={i}
                className="relative pl-4 text-sm leading-relaxed text-gray-text"
              >
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-green" />
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content sections */}
      <ModuleContent sections={mod.sections} />

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-black/6 pt-8">
        {prevModule ? (
          <Link
            href={`/nomad/modules/${prevModule.slug}`}
            className="flex items-center gap-2 text-sm text-gray-mid no-underline transition-colors hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            {prevModule.title}
          </Link>
        ) : (
          <div />
        )}
        {nextModule ? (
          <Link
            href={`/nomad/modules/${nextModule.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-blue no-underline transition-colors hover:text-blue-hover"
          >
            {nextModule.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/nomad#homework"
            className="flex items-center gap-2 text-sm font-medium text-blue no-underline transition-colors hover:text-blue-hover"
          >
            Homework
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
