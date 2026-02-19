import { PortalConfig } from "@/lib/types";

export const nomadPortal: PortalConfig = {
  client: {
    name: "Nomad Group",
    slug: "nomad",
    website: "https://nomadgroup.com",
    industry: "Commercial Real Estate",
    primaryColor: "#3636ff",
  },
  workshop: {
    date: "2025",
    title: "AI Workshop",
    facilitator: "Adva Solutions",
    summary:
      "Your reference guide for the tools and workflows covered in the session. Built around what matters most to your team: speed, authenticity, and closing deals.",
  },
  modules: [
    {
      id: "canva-claude",
      slug: "canva-claude",
      title: "Pitch Decks in Minutes",
      tool: "claude",
      icon: "sparkles",
      difficulty: "beginner",
      durationMinutes: 15,
      highlight: true,
      objectives: [
        "Connect Canva to Claude",
        "Generate polished pitch decks from a single conversation",
        "Refine and export presentation-ready decks",
      ],
      sections: [
        {
          title: "The Game Changer",
          type: "content",
          content:
            "Connect your Canva account to Claude and generate polished property pitch decks, market overviews, and tour presentations from a single conversation. What used to take 2+ hours now takes under 10 minutes.",
        },
        {
          title: "How it works",
          type: "steps",
          steps: [
            {
              label: "Open Claude",
              detail: "Go to claude.ai and navigate to integrations/connectors.",
            },
            {
              label: "Connect Canva",
              detail:
                "Authorize access to your workspace, templates, and brand kit.",
            },
            {
              label: "Prompt your deck",
              detail:
                '"Create a pitch deck for a 5,000 SF office at 110 5th Ave. Include floor plan highlights, amenities, and comps."',
            },
            {
              label: "Refine in Canva",
              detail: "Adjust visuals, swap images, export as PDF.",
            },
          ],
        },
        {
          title: "Tips for best results",
          type: "tips",
          tips: [
            "Upload your go-to Canva templates so Claude matches your style automatically",
            "Include specifics in prompts: square footage, asking rent, building class, nearby transit",
            "Ask Claude to write narrative sections in your voice by giving it sample decks",
            "Works for tour books, market overviews, and proposals — not just pitch decks",
          ],
        },
      ],
    },
    {
      id: "copilot",
      slug: "copilot",
      title: "Microsoft 365 Copilot",
      tool: "copilot",
      icon: "monitor",
      difficulty: "beginner",
      durationMinutes: 20,
      objectives: [
        "Set up Personal Instructions",
        "Master email triage and response drafting",
        "Use prompt scheduling and file search",
      ],
      sections: [
        {
          title: "Overview",
          type: "content",
          content:
            "Your AI assistant inside Outlook, Word, Excel, and Teams. Since you already live in Microsoft, this is where AI delivers the fastest daily wins.",
        },
        {
          title: "What to set up first",
          type: "steps",
          steps: [
            {
              label: "Personal Instructions",
              detail:
                "Tell Copilot who you are, what you work on, your working hours, and preferred writing style.",
            },
            {
              label: "Email Triage",
              detail:
                "Summarize and prioritize recent emails. Draft responses tailored to the recipient (landlord, tenant, attorney).",
            },
            {
              label: "Prompt Scheduling",
              detail:
                "Set a recurring prompt for a daily email digest or weekly task list.",
            },
            {
              label: "Context with /",
              detail:
                "Pull contacts, files, or calendar data directly into chat. Great for multi-party meetings.",
            },
            {
              label: "File Search",
              detail:
                "Describe what you need (project, deal, person) and let Copilot surface relevant docs across your org.",
            },
            {
              label: "Agents with @",
              detail:
                "Call agents from the chat. Use @ to pull Salesforce data or trigger workflows.",
            },
            {
              label: "Quick Access",
              detail: "Press Win + C to summon Copilot from any screen.",
            },
          ],
        },
      ],
    },
    {
      id: "claude",
      slug: "claude",
      title: "Claude",
      tool: "claude",
      icon: "brain",
      difficulty: "beginner",
      durationMinutes: 20,
      objectives: [
        "Write cold outreach in your voice",
        "Analyze deals and extract lease terms",
        "Use Projects for per-deal context",
      ],
      sections: [
        {
          title: "Overview",
          type: "content",
          content:
            "The most capable AI for complex, nuanced work. Deep thinking, writing in your voice, research, and connecting to tools like Canva.",
        },
        {
          title: "Why Claude for real estate",
          type: "tips",
          tips: [
            "Pitch deck creation via Canva — the highest-impact workflow",
            "Cold outreach that sounds like you. Give 3-4 email examples, get new outreach matching your tone.",
            "Deal analysis. Paste a lease, LOI, or email thread. Claude extracts terms and flags risks.",
            "Market research. Research neighborhoods, buildings, or tenants for client presentations.",
          ],
        },
        {
          title: "Key features",
          type: "tips",
          tips: [
            "Projects: One per deal or client. Upload docs, Claude remembers context across conversations.",
            "Connectors: Canva, Google Drive, Slack, and more for workflow integration.",
            "Artifacts: Generates docs, spreadsheets, and interactive content alongside your chat.",
          ],
        },
        {
          title: "Example prompt",
          type: "prompt",
          content:
            "I'm a CRE broker at Nomad Group in Manhattan office leasing. Here are 3 outreach emails that got responses: [paste]. Draft a cold email to [company], a [industry] co with [X] employees at [address], lease expiring [date]. Keep my tone. Focus on [value prop].",
        },
      ],
    },
    {
      id: "wispr",
      slug: "wispr-flow",
      title: "Wispr Flow",
      tool: "wispr",
      icon: "mic",
      difficulty: "beginner",
      durationMinutes: 10,
      objectives: [
        "Install and configure Wispr Flow",
        "Use voice-to-text for email drafting",
        "Integrate with Claude and Copilot",
      ],
      sections: [
        {
          title: "Overview",
          type: "content",
          content:
            "Voice-to-text everywhere on your computer. Talk naturally, get polished text in any app, any field, any browser.",
        },
        {
          title: "Getting started",
          type: "steps",
          steps: [
            {
              label: "Install Wispr Flow",
              detail: "Download from wispr.flow (use the free trial link provided).",
            },
            {
              label: "Set your activation shortcut",
              detail: "Default works, customize if needed.",
            },
            {
              label: "Start with emails",
              detail:
                "Click into a reply, activate Wispr, speak your response.",
            },
            {
              label: "Use it in Claude and Copilot",
              detail: "Dictate prompts instead of typing.",
            },
          ],
        },
        {
          title: "Why this matters",
          type: "tips",
          tips: [
            "You type ~40 wpm but speak ~150. That gap adds up across dozens of daily emails.",
            "Great for post-tour notes: dictate observations while they're fresh.",
            "Works everywhere: CRM, Slack, browser, documents.",
            "Learning curve exists. Commit to one full week before deciding.",
          ],
        },
      ],
    },
    {
      id: "granola",
      slug: "granola",
      title: "Granola",
      tool: "granola",
      icon: "calendar",
      difficulty: "beginner",
      durationMinutes: 10,
      objectives: [
        "Set up Granola and connect your calendar",
        "Review AI-generated meeting summaries",
        "Search across meetings for client context",
      ],
      sections: [
        {
          title: "Overview",
          type: "content",
          content:
            "AI meeting notes that capture everything so you can stay present. Structured summaries and action items, automatically.",
        },
        {
          title: "Getting started",
          type: "steps",
          steps: [
            {
              label: "Download Granola",
              detail: "Get it from granola.ai and connect your calendar.",
            },
            {
              label: "Let it run",
              detail:
                "Auto-detects meetings. No bots join, nothing visible to participants.",
            },
            {
              label: "Review the summary",
              detail:
                "Key points, action items, decisions. Edit and share.",
            },
            {
              label: "Search across meetings",
              detail:
                "Recall what a client said about their timeline instantly.",
            },
          ],
        },
        {
          title: "Best use cases",
          type: "tips",
          tips: [
            "Client requirements: Capture specs, budget, preferences without breaking eye contact.",
            "Deal negotiations: Clean record of agreements, open items, ownership.",
            "Internal syncs: Everyone gets the same notes. No more \"I thought we said...\"",
            "Combine with Claude: Paste summaries into Claude for follow-up emails or deal memos.",
          ],
        },
      ],
    },
  ],
  homework: [
    {
      task: "Set up Copilot Personal Instructions",
      detail: "with your role, deals, and communication style.",
    },
    {
      task: "Schedule a recurring Copilot prompt",
      detail: "for a daily email summary or weekly task list.",
    },
    {
      task: "Connect Canva to Claude",
      detail: "and create at least one pitch deck.",
    },
    {
      task: "Install Wispr Flow",
      detail: "and use it for one full week of email drafting.",
    },
    {
      task: "Run Granola",
      detail: "on at least 3 meetings and review the summaries.",
    },
  ],
  videos: [],
  resources: [],
};
