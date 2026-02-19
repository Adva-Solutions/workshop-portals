import { nomadPortal } from "@/data/nomad";
import { ModuleCard } from "@/components/ModuleCard";
import { HomeworkSection } from "@/components/HomeworkSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `AI Workshop | ${nomadPortal.client.name}`,
  description: nomadPortal.workshop.summary,
};

export default function NomadPortal() {
  const portal = nomadPortal;
  const highlightModule = portal.modules.find((m) => m.highlight);
  const regularModules = portal.modules.filter((m) => !m.highlight);

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:px-12 md:pt-20">
        <div className="mb-8 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green" />
          <span className="text-sm font-semibold">
            {portal.client.name} &times; Adva Solutions
          </span>
        </div>
        <h1 className="mb-6 max-w-2xl font-[family-name:var(--font-heading)] text-5xl font-light leading-[0.92] tracking-tight md:text-7xl">
          {portal.workshop.title} Learning Portal.
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-gray-text">
          {portal.workshop.summary}
        </p>
      </section>

      {/* Modules */}
      <div className="mx-auto max-w-6xl px-6 pb-16 md:px-12">
        {/* Highlight module */}
        {highlightModule && (
          <div className="mb-16">
            <ModuleCard
              module={highlightModule}
              index={0}
              slug={portal.client.slug}
            />
          </div>
        )}

        {/* Regular modules grid */}
        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {regularModules.map((mod, i) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              index={i + 1}
              slug={portal.client.slug}
            />
          ))}
        </div>

        {/* Homework */}
        <HomeworkSection items={portal.homework} />

        {/* Encouragement */}
        <div className="mt-12 text-center text-sm leading-relaxed text-gray-text">
          <p>
            If you get stuck or frustrated,{" "}
            <strong className="text-black">don&apos;t give up.</strong>
            <br />
            Try again, ask a teammate, or use AI to help you use AI.
          </p>
        </div>
      </div>
    </div>
  );
}
