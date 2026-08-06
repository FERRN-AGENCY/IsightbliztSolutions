import { images } from '../../constants';

export const navigationData = [
  { id: 'Tab 1', label: 'GTM' },
  { id: 'Tab 2', label: 'Affiliates' },
  { id: 'Tab 3', label: 'Growth Systems' },
  { id: 'Tab 5', label: 'Development' },
];

export const servicesData = {
  'Tab 1': {
    title: "Go-To-Market Strategy for Serious Web3 Projects",
    description: "Everything needed to launch, scale, and win in competitive crypto markets.",
    cta: "Book a Call",
    cards: [
      { id: 1, title: "Tokenomics Strategy", text: "Design sustainable token models aligned with market realities.", icon: images.database },
      { id: 2, title: "Exchange Listings", text: "Direct access to Tier-1 and Tier-2 exchanges for launches.", icon: images.launchpad },
      { id: 3, title: "Market Making", text: "Ensure liquidity and stability for your token post-launch.", icon: images.partner },
      { id: 4, title: "Venture Network", text: "Introduction to lead investors and strategic capital partners.", icon: images.people },
      { id: 5, title: "Launchpad Access", text: "Priority onboarding for the industry's top performing launchpads.", icon: images.whitepaper },
      { id: 6, title: "Strategic PR", text: "High-impact storytelling across major crypto and tech news outlets.", icon: images.gift },
    ]
  },
  'Tab 2': {
    title: "Affiliate & Influencer Networks",
    description: "Connect with the largest crypto distribution networks globally.",
    cta: "View Network",
    cards: [
      { id: 1, title: "KOL Management", text: "End-to-end management of top-tier influencers and thought leaders.", icon: images.people },
      { id: 2, title: "Affiliate Infrastructure", text: "Custom tracking and reward systems for on-chain referral growth.", icon: images.partner },
    ]
  },
  'Tab 3': {
    title: "Growth Systems & Automation",
    description: "Data-driven systems designed to acquire and retain Web3 users.",
    cta: "Audit My Growth",
    cards: [
      { id: 1, title: "CRM & Funnels", text: "Automated lead generation and conversion funnels for B2B/B2C.", icon: images.database },
      { id: 2, title: "Retention Loops", text: "Product-led growth mechanics that keep users coming back.", icon: images.gift },
    ]
  },
  'Tab 5': {
    title: "Full-Stack Web3 Development",
    description: "Bespoke engineering for dApps, smart contracts, and infrastructure.",
    cta: "Build with Us",
    cards: [
      { id: 1, title: "Smart Contract Audit", text: "Security-first development and auditing for EVM and SVM chains.", icon: images.whitepaper },
      { id: 2, title: "Custom Dashboards", text: "Real-time on-chain data visualization and analytics platforms.", icon: images.launchpad },
    ]
  }
};