export const profile = {
  name: "Punarv Pawade",
  role: "Full-stack engineer",
  tagline: "I build AI features that are safe to put in production.",
  intro:
    "Full-stack engineer on multi-tenant SaaS for UK car dealers: websites, an AI page builder, cloud telephony and a mobile app. I own the design, ship it, and when it breaks I find the root cause and turn it into a test.",
  email: "punarvpawade17@gmail.com",
  location: "Maharashtra, India · working remotely",
  current: {
    company: "AFT Group",
    title: "Software Engineer",
    since: "Dec 2024",
    blurb: "Automotive retail and finance software, 100+ dealer websites.",
  },
};

export const about = [
  "My strongest work is where LLMs meet production. I built an MCP server that lets AI agents like Claude and ChatGPT edit live customer websites, behind scoped keys and a preview-then-confirm publish step. I've also debugged flaky model output down to the individual upstream host serving it.",
  "I'm just as comfortable in an incident. I've dealt with a stalled logging pipeline, backups growing without bound and a connection pool leaking under load. I work AI-assisted and move fast, but I own the architecture and the root cause, and I leave a guard test behind.",
  "Before this I spent two years in Web3, building trading bots, chain indexers, VPN infrastructure and hackathon projects. Away from the keyboard: guitar, music production, sport and games.",
];

export type CaseStudy = {
  name: string;
  pitch: string;
  problem: string;
  built: string[];
  detail: string;
  stack: string[];
  status: "Live" | "Shipped" | "In beta";
};

export const caseStudies: CaseStudy[] = [
  {
    name: "AI agents on live websites",
    pitch: "Let Claude or ChatGPT manage a customer's website without being able to break it.",
    problem:
      "Agents could act outside their tenant, overwrite human edits, publish by accident, run up the platform's AI bill, or apply a retried call twice.",
    built: [
      "MCP server with about 60 tools, OAuth with a consent screen, and scoped, expiring, tenant-bound keys",
      "Draft-only writes with confirm tokens tied to the exact previewed state, plus idempotency keys on every write",
      "Compare-and-set on a SHA-256 config version, Redis concurrency slots and per-tenant daily spend caps",
      "Agent-written pages became the default, with a validator and an authoring guide: $0 platform AI spend, verified in production",
    ],
    detail:
      "Timestamps couldn't serve as the version because browser saves never bumped them. The version is a hash of the stored config instead.",
    stack: ["FastAPI", "Next.js", "MongoDB", "Redis", "OAuth 2", "MCP"],
    status: "Live",
  },
  {
    name: "Cloud phone system for dealerships",
    pitch: "Browser and mobile softphone, call queues, recordings and usage billing, embedded in a CRM.",
    problem:
      "Calls had to reach every free salesperson at once, ring exactly once on a phone that was killed, and every billable second had to be accounted for.",
    built: [
      "Ring-everyone routing on Twilio TaskRouter, made idempotent with a Postgres partial-unique-index claim",
      "Outbox billing pipeline with nightly reconciliation, closing call paths that had gone unbilled",
      "Recording offload to Cloudflare R2 with SHA-256 read-back verification and manager-only column-level access",
      "Native calling in React Native (FCM, PushKit, CallKit), taken through iOS App Review",
    ],
    detail:
      "One unanswered call re-entered the assignment callback four times in 30 seconds. Making the claim idempotent at the database layer fixed the whole class of bug.",
    stack: ["TanStack Start", "Cloudflare Workers", "Supabase", "Twilio", "React Native"],
    status: "Live",
  },
  {
    name: "LLM page builder that doesn't regress",
    pitch: "A chat-to-React page builder that is still stable on the tenth edit.",
    problem:
      "Follow-up edits quietly changed sections the user never touched, and some model failures were intermittent and silent.",
    built: [
      "Babel AST section extraction and splicing, with a validated intent router and undo",
      "Database-managed model catalog with provider pinning and served-by logging",
      "Diagnosed failures by pinning each of a model's six upstream hosts in turn, and found three distinct failure modes",
      "Billed-cost tracking and per-model timeouts based on measured latency",
    ],
    detail:
      "The model was copying the full-page code from its own earlier turns, which outweighed the system prompt. Normalising the chat history fixed it.",
    stack: ["Next.js", "Vercel AI SDK", "OpenRouter", "Babel", "Zod"],
    status: "Live",
  },
  {
    name: "Keeping 100+ dealer sites healthy",
    pitch: "Incident-driven reliability and security work on a multi-tenant platform.",
    problem:
      "One platform hosts every dealer's site, so one tenant's bug, leak or slow query becomes everyone's problem.",
    built: [
      "Tenant-isolation hardening: tenant derived from the session, allow-listed public data, constant-time secret checks, CI guard tests",
      "Found why backups grew unbounded and pruned the store from 120 GiB to 47 GiB",
      "Traced a frozen analytics dashboard to a hidden 1,000-row cap; in-database aggregation took it from ~160 to the real ~23,900 visitors",
      "Rebuilt a silently stalling logging pipeline, and fixed intermittent TLS certificate failures",
    ],
    detail:
      "The backups grew because snapshots were grouped by an ephemeral container ID, so retention never matched anything.",
    stack: ["Docker", "Traefik", "Grafana / Loki", "Postgres", "GitHub Actions"],
    status: "Live",
  },
];

export type Job = {
  company: string;
  title: string;
  period: string;
  summary: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "AFT Group",
    title: "Software Engineer",
    period: "Dec 2024 — Present",
    summary:
      "Automotive retail and finance software for UK dealers: a multi-tenant website platform with an AI page builder, cloud telephony, a dealer management system and a used-car marketplace.",
    points: [
      "Shipped the MCP server and agent-first page authoring that let customers' own AI agents build their sites",
      "Designed call routing, metering and billing for the cloud phone system, plus native calling in the mobile app",
      "Built CRM single sign-on with algorithm pinning, issuer allow-listing and replay protection",
      "Re-architected the nightly multi-dealer stock sync into a BullMQ fan-out with per-dealer retries",
      "Built WhatsApp magic-link login that signs in the original tab in real time over Socket.IO and Redis",
      "Built and ran a FastAPI vehicle recommender, and migrated it from Pinecone to self-hosted Qdrant",
    ],
  },
  {
    company: "MetabotAI",
    title: "Software Engineer",
    period: "Jun 2024 — Dec 2024",
    summary: "Crypto trading tools for Solana and EVM chains.",
    points: [
      "Built a high-speed Telegram trading bot with real-time market data",
      "Built an indexer that picks up new Solana and EVM tokens as they launch",
      "Integrated 1inch, Uniswap and Jupiter for cross-chain swaps",
    ],
  },
  {
    company: "Lazarus Network",
    title: "Full Stack Developer",
    period: "Apr 2023 — May 2024",
    summary: "Joined as an intern and was promoted to full-time. Backend in Go and Node, frontend in Next.js, cloud infrastructure.",
    points: [
      "Erebrus: gRPC auth middleware and a central gateway for VPN nodes, with peer discovery over libp2p",
      "Sotreus: wallet-authenticated VPN and firewall deployment with Stripe subscriptions",
      "MyriadFlow: complete backend for an NFT launchpad and marketplace",
    ],
  },
];

export type SideProject = {
  name: string;
  note: string;
  stack: string;
  href?: string;
  code?: string;
};

export const sideProjects: SideProject[] = [
  {
    name: "GitSplit",
    note: "Crypto donations for open-source projects, split automatically to contributors by smart contract. Built at ETHGlobal.",
    stack: "Next.js, Go, Solidity, AWS",
    href: "https://ethglobal.com/showcase/gitsplit-pkp5d",
    code: "https://github.com/orgs/GitSplit-org/repositories",
  },
  {
    name: "PolyPass",
    note: "Decentralised password manager as a browser extension, with encrypted storage and autofill. Built at ETHGlobal 2023.",
    stack: "React, TypeScript, Polybase",
    href: "https://ethglobal.com/showcase/polypass-fg8ru",
    code: "https://github.com/a-org-b/Poly-Pass-Extension",
  },
  {
    name: "Custom Linux kernel",
    note: "Kernel for the Asus Zenfone Max Pro M1 with driver integration, performance tuning and automated builds.",
    stack: "C, Make, shell",
    code: "https://github.com/inciner8r/msm-4.4",
  },
];

export const skills: { group: string; items: string }[] = [
  { group: "Languages", items: "TypeScript, Python, SQL, Go" },
  { group: "Frontend", items: "React, Next.js (App Router, RSC), React Native, Tailwind, TanStack" },
  { group: "Backend", items: "FastAPI, Node / NestJS, Postgres & Supabase, MongoDB, Redis, BullMQ" },
  { group: "AI", items: "MCP servers, Vercel AI SDK, OpenRouter, vector search (Qdrant), evals and validators" },
  { group: "Infra", items: "Docker, Traefik, GitHub Actions, Cloudflare Workers & R2, AWS, Grafana / Loki" },
  { group: "Realtime", items: "Twilio Voice & TaskRouter, Socket.IO, webhooks and idempotency" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/inciner8r" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/punarvpawade/" },
  { label: "X", href: "https://x.com/inciner8rz" },
  { label: "Telegram", href: "https://t.me/inciner8r" },
];
