import { images } from "../../constants";

export const navigationData = [
  { id: "Tab 1", label: "Voice AI" },
  { id: "Tab 2", label: "Lead Qualification" },
  { id: "Tab 3", label: "Booking Systems" },
  { id: "Tab 5", label: "Integrations" },
];

export const servicesData = {
  "Tab 1": {
    title: "AI Systems for Serious Service Businesses",
    description:
      "Everything needed to answer, qualify, and book leads without adding headcount.",
    cta: "Book a Call",
    cards: [
      {
        id: 1,
        title: "AI Call Answering",
        text: "Every call picked up in seconds, 24/7 no voicemail, no missed leads.",
        icon: images.database,
      },
      {
        id: 2,
        title: "Natural Voice Agents",
        text: "Human-sounding agents trained on your services, pricing, and objections.",
        icon: images.launchpad,
      },
      {
        id: 3,
        title: "After-Hours Coverage",
        text: "Nights, weekends, and overflow calls handled without a single missed ring.",
        icon: images.partner,
      },
      {
        id: 4,
        title: "Call Scripts & Guardrails",
        text: "Controlled conversations that stay on-message and escalate when needed.",
        icon: images.people,
      },
      {
        id: 5,
        title: "Call Reporting & Insights",
        text: "Full visibility into every call, every lead, and every booking.",
        icon: images.whitepaper,
      },
      {
        id: 6,
        title: "Recordings & Transcripts",
        text: "Searchable transcripts and summaries pushed to your team after each call.",
        icon: images.gift,
      },
    ],
  },
  "Tab 2": {
    title: "Qualify Every Lead Before It Reaches Your Team",
    description:
      "Screening and routing rules that protect your closers' calendars.",
    cta: "Audit My Intake",
    cards: [
      {
        id: 1,
        title: "Lead Qualification",
        text: "Leads are automatically screened and routed based on your criteria.",
        icon: images.people,
      },
      {
        id: 2,
        title: "Smart Routing",
        text: "High-intent callers go straight to the right rep, territory, or service line.",
        icon: images.partner,
      },
    ],
  },
  "Tab 3": {
    title: "Booked Jobs, Not Just Captured Lead",
    description:
      "Real-time scheduling that turns conversations into confirmed appointments.",
    cta: "See a Booking Demo",
    cards: [
      {
        id: 1,
        title: "Appointment Booking",
        text: "Qualified leads booked straight onto your calendar in real time.",
        icon: images.database,
      },
      {
        id: 2,
        title: "Reminders & No-Show Recovery",
        text: "Confirmations, reminders, and rebooking flows that protect your show rate.",
        icon: images.gift,
      },
    ],
  },
  "Tab 5": {
    title: "Plugged Into the Stack You Already Run",
    description:
      "Your CRM, calendar, and reporting stay the single source of truth.",
    cta: "Build with Us",
    cards: [
      {
        id: 2,
        title: "CRM & Calendar Integration",
        text: "Plugs directly into the tools your team already uses.",
        icon: images.launchpad,
      },
      {
        id: 3,
        title: "Workflow Automations",
        text: "Every call, lead, and booking synced to the systems that trigger your ops.",
        icon: images.launchpad,
      },
    ],
  },
};
