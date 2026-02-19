export interface PortalConfig {
  client: {
    name: string;
    slug: string;
    website: string;
    industry: string;
    primaryColor: string;
  };
  workshop: {
    date: string;
    title: string;
    facilitator: string;
    summary: string;
  };
  modules: Module[];
  homework: HomeworkItem[];
  videos: Video[];
  resources: Resource[];
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  tool: string;
  icon: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  durationMinutes: number;
  highlight?: boolean;
  objectives: string[];
  sections: Section[];
}

export type Section =
  | ContentSection
  | StepsSection
  | TipsSection
  | PromptSection
  | VideoSection
  | QuizSection;

interface BaseSection {
  title: string;
}

export interface ContentSection extends BaseSection {
  type: "content";
  content: string;
}

export interface StepsSection extends BaseSection {
  type: "steps";
  steps: { label: string; detail: string }[];
}

export interface TipsSection extends BaseSection {
  type: "tips";
  tips: string[];
}

export interface PromptSection extends BaseSection {
  type: "prompt";
  content: string;
}

export interface VideoSection extends BaseSection {
  type: "video";
  videoUrl: string;
  thumbnailUrl?: string;
}

export interface QuizSection extends BaseSection {
  type: "quiz";
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
  }[];
}

export interface HomeworkItem {
  task: string;
  detail: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  durationSeconds: number;
  chapters?: { title: string; timestamp: number }[];
}

export interface Resource {
  title: string;
  type: "cheat_sheet" | "prompt_library" | "guide";
  downloadUrl: string;
}
