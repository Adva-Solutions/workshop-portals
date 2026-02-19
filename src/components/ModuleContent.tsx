"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import type { Section } from "@/lib/types";

function StepsBlock({ section }: { section: Extract<Section, { type: "steps" }> }) {
  return (
    <div className="rounded-xl border border-black/6 bg-white p-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-mid">
        {section.title}
      </h3>
      <ol className="list-none">
        {section.steps.map((step, i) => (
          <li
            key={i}
            className="flex gap-3 border-b border-black/6 py-3 last:border-b-0"
          >
            <span className="mt-0.5 shrink-0 font-[family-name:var(--font-heading)] text-sm text-gray-mid">
              {i + 1}
            </span>
            <div className="text-sm leading-relaxed text-gray-text">
              <strong className="font-semibold text-black">{step.label}:</strong>{" "}
              {step.detail}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function TipsBlock({ section }: { section: Extract<Section, { type: "tips" }> }) {
  return (
    <div className="rounded-xl border border-black/6 bg-white p-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-mid">
        {section.title}
      </h3>
      <ul className="list-none">
        {section.tips.map((tip, i) => (
          <li key={i} className="relative py-2 pl-4 text-sm leading-relaxed text-gray-text">
            <span className="absolute left-0 top-3.5 h-1.5 w-1.5 rounded-full bg-gray-light" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PromptBlock({ section }: { section: Extract<Section, { type: "prompt" }> }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(section.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-black/6 bg-white p-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-mid">
        {section.title}
      </h3>
      <div className="relative rounded-lg border border-black/6 bg-beige p-5">
        <p className="pr-8 text-sm italic leading-relaxed text-gray-text">
          {section.content}
        </p>
        <button
          onClick={copy}
          className="absolute top-3 right-3 rounded-md p-1.5 text-gray-mid transition-colors hover:bg-black/5"
          title="Copy prompt"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}

function ContentBlock({
  section,
}: {
  section: Extract<Section, { type: "content" }>;
}) {
  return (
    <div className="text-base leading-relaxed text-gray-text">
      {section.content}
    </div>
  );
}

function VideoBlock({ section }: { section: Extract<Section, { type: "video" }> }) {
  return (
    <div className="rounded-xl border border-black/6 bg-white p-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-mid">
        {section.title}
      </h3>
      <div className="aspect-video overflow-hidden rounded-lg bg-black">
        <iframe
          src={section.videoUrl}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function QuizBlock({ section }: { section: Extract<Section, { type: "quiz" }> }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qIndex: number, optIndex: number) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const score = section.questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
    0
  );

  return (
    <div className="rounded-xl border border-black/6 bg-white p-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-mid">
        {section.title}
      </h3>
      <div className="space-y-6">
        {section.questions.map((q, qi) => (
          <div key={qi}>
            <p className="mb-3 text-sm font-medium text-black">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                let style = "border-black/6 bg-beige hover:bg-black/5";
                if (showResults && oi === q.correctIndex) {
                  style = "border-green bg-green/10";
                } else if (
                  showResults &&
                  answers[qi] === oi &&
                  oi !== q.correctIndex
                ) {
                  style = "border-red-400 bg-red-50";
                } else if (answers[qi] === oi) {
                  style = "border-blue bg-blue/5";
                }
                return (
                  <button
                    key={oi}
                    onClick={() => handleSelect(qi, oi)}
                    className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {Object.keys(answers).length === section.questions.length &&
        !showResults && (
          <button
            onClick={() => setShowResults(true)}
            className="mt-6 rounded-lg bg-blue px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
          >
            Check answers
          </button>
        )}
      {showResults && (
        <div className="mt-4 rounded-lg bg-beige p-4 text-sm font-medium">
          Score: {score}/{section.questions.length}
        </div>
      )}
    </div>
  );
}

interface ModuleContentProps {
  sections: Section[];
}

export function ModuleContent({ sections }: ModuleContentProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set(sections.map((_, i) => i))
  );

  const toggle = (i: number) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {sections.map((section, i) => {
        if (section.type === "content") {
          return <ContentBlock key={i} section={section} />;
        }

        const isExpanded = expandedSections.has(i);

        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="mb-2 flex w-full items-center justify-between text-left"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-gray-mid">
                {section.title}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-gray-mid" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-mid" />
              )}
            </button>
            {isExpanded && (
              <>
                {section.type === "steps" && <StepsBlock section={section} />}
                {section.type === "tips" && <TipsBlock section={section} />}
                {section.type === "prompt" && <PromptBlock section={section} />}
                {section.type === "video" && <VideoBlock section={section} />}
                {section.type === "quiz" && <QuizBlock section={section} />}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
