"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { HomeworkItem } from "@/lib/types";

interface HomeworkSectionProps {
  items: HomeworkItem[];
}

export function HomeworkSection({ items }: HomeworkSectionProps) {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const completedCount = checked.filter(Boolean).length;

  return (
    <section id="homework" className="rounded-2xl bg-beige p-8 md:p-12">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12">
        <div>
          <h3 className="mb-3 font-[family-name:var(--font-heading)] text-3xl font-light tracking-tight md:text-4xl">
            Before the next session.
          </h3>
          <p className="text-sm text-gray-mid">
            Due in ~1 month. Experiment freely and come with questions.
          </p>
          {completedCount > 0 && (
            <div className="mt-4 text-sm font-medium text-green">
              {completedCount}/{items.length} completed
            </div>
          )}
        </div>
        <div>
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`flex w-full items-start gap-3 border-b border-black/6 py-4 text-left last:border-b-0 ${
                checked[i] ? "opacity-60" : ""
              }`}
            >
              <div
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-[1.5px] transition-colors ${
                  checked[i]
                    ? "border-green bg-green"
                    : "border-gray-light bg-white"
                }`}
              >
                {checked[i] && <Check className="h-3 w-3 text-white" />}
              </div>
              <p
                className={`text-sm leading-relaxed text-gray-text ${
                  checked[i] ? "line-through" : ""
                }`}
              >
                <strong className="font-semibold text-black">
                  {item.task}
                </strong>{" "}
                {item.detail}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
