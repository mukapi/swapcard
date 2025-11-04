import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pages Webflow (publiées, non-draft, non-archivées, excluant templates)
const webflowPages = [
  // Pages de la première requête (offset 0)
  { id: "6902017bf1c2449738b08fed", title: "Home Page Builder", publishedPath: "/features/event-homepage-builder", draft: false },
  { id: "68e660e1b36f075fbd2824cf", title: "Schedule Live Demo -Associations", publishedPath: "/demo-associations", draft: false },
  { id: "68e62f6fe945f2613fc768a1", title: "Networking & Matchmaking Software", publishedPath: "/features/event-networking", draft: false },
  { id: "68e38cf84c9b7703e56b774f", title: "Sales & Marketing Team Executive Playbook for Engagement & Revenue", publishedPath: "/resources/sales-marketing-teams-executive-playbook-engagement-roi", draft: false },
  { id: "68b180bae407e5e136f228ab", title: "Report-Book a Demo", publishedPath: "/thank-you/report-demo", draft: false },
  { id: "68a5a535af9bdaf023a57a61", title: "Account Admin & Security", publishedPath: "/features/event-admin-security-permissions-sso", draft: false },
  { id: "68a341e1a1a65d968b59fef3", title: "Onsite control access & checkpoints", publishedPath: "/features/onsite-control-access-checkpoints", draft: false },
  { id: "68a2fe30a392c76e4ce47509", title: "Hosted Buyer Software", publishedPath: "/features/hosted-buyer-software", draft: false },
  { id: "689db002711b2ed50f7f5484", title: "Exhibitors & Sponsors", publishedPath: "/features/exhibitor-sponsor-tools", draft: false },
  { id: "689c67af9eca6b3a4586d93a", title: "Event Content & Session Management", publishedPath: "/features/event-content-session-management", draft: false },
  { id: "689b5389af599fb23c01b0f2", title: "Event Branding & Communication", publishedPath: "/features/event-branding-communication-tools", draft: false },
  { id: "6881fbb53d89795aa8980171", title: "State of Event Engagement Report- Volume 2", publishedPath: "/resources/state-of-event-engagement-report-volume-2", draft: false },
  { id: "6874d8491f6116aee4371add", title: "Attendee Engagement", publishedPath: "/features/attendee-engagement-software", draft: false },
  { id: "68594a5a51138e03f0ce40da", title: "Thank you - Engagement Report", publishedPath: "/thank-you/engagement-report", draft: false },
  { id: "6853dada51ac5b50ad075228", title: "Privacy Policy - 2024", publishedPath: "/legal/privacy-policy-2024", draft: false },
  { id: "67e6b83e4d6a7c340e44e2e2", title: "Event Monetization", publishedPath: "/features/event-monetization", draft: false },
  { id: "67d1a555eced04056f0b3856", title: "Appendix C 2024", publishedPath: "/legal/terms-organizer/appendix-c-2024", draft: false },
  { id: "67bddbffa1a91a90a1f82743", title: "BioIndustry Association", publishedPath: "/referral/bioindustry-association", draft: false },
  { id: "67bc912ad5449e905149a5a6", title: "Registration, Ticketing, Payments", publishedPath: "/features/event-registration-software", draft: false },
  { id: "675ad7676b217995520bd1ea", title: "Bronze Account Plan", publishedPath: "/legal/bronze-account-plan", draft: false },
  { id: "675ad0f25131541609956716", title: "Silver Account Plan", publishedPath: "/legal/silver-account-plan", draft: false },
  { id: "675acc22c394d4c5bbc07250", title: "Silver Event Plan", publishedPath: "/legal/silver-event-plan", draft: false },
  { id: "675ac558aac8e60b3523ed0f", title: "Gold Event Plan", publishedPath: "/legal/gold-event-plan", draft: false },
  { id: "674f6d6beff682780851f708", title: "Gold Account Plan", publishedPath: "/legal/gold-account-plan", draft: false },
  { id: "6740b815977b7ec57d5b577a", title: "Special Offer Registration", publishedPath: "/customers/specialoffer-registration-lp", draft: false },
  { id: "66f419b2542cc239b4feb045", title: "Private & Limited Sessions", publishedPath: "/features/private-and-limited-sessions", draft: false },
  { id: "66f4199895ceaa8b1269f631", title: "Backstage", publishedPath: "/features/backstage", draft: false },
  { id: "66f4197ee578b51bfa28bcb6", title: "AI / Personalized recommendations", publishedPath: "/features/ai-personalized-recomendations", draft: false },
  { id: "66f419697ff56e5321863a23", title: "Meeting Request Rules", publishedPath: "/features/meeting-request-rules", draft: false },
  { id: "66f418f39f550d1cfa4c2c1d", title: "Onsite self check-in & Badge Printing", publishedPath: "/features/event-check-in-app", draft: false },
  { id: "66f418b733d27c6d1272dfc6", title: "Lead Qualification", publishedPath: "/features/lead-qualification", draft: false },
  { id: "66f417aa357293565ccf30ed", title: "Lead Capture", publishedPath: "/features/lead-capture", draft: false },
  { id: "66f2815f414fd64ce7d60b04", title: "Pricing", publishedPath: "/pricing-plans", draft: false },
  { id: "66f17f4840b674b2c9513e3f", title: "Platform Overview", publishedPath: "/platform/event-engagement", draft: false },
  { id: "66f147c2585909c7ce98b5b4", title: "Why Swapcard", publishedPath: "/why-swapcard", draft: false },
  { id: "66ec1e5ff5409890427adeab", title: "Blog", publishedPath: "/blog", draft: false },
  { id: "66e99790dc4385c4ad401bc7", title: "Community", publishedPath: "/solutions/event-management-software-communities", draft: false },
  { id: "66e9976c4e70ed8150171062", title: "Media Company", publishedPath: "/solutions/media-company-event-management-software", draft: false },
  { id: "66e99755ed760ab19d1599ef", title: "Associations", publishedPath: "/solutions/association-event-management-software", draft: false },
  { id: "66e99631e877433f6a8a35db", title: "Congress/Medical Conferences", publishedPath: "/solutions/healthcare-event-management-software", draft: false },
  { id: "66e995f2a407c7d071d41e58", title: "B2B Conferences", publishedPath: "/solutions/conference-management-software", draft: false },
  { id: "66e995c1b8f5bd103d6f3235", title: "Trade Show Exhibitions", publishedPath: "/solutions/trade-show-management-software", draft: false },
  { id: "66e9959cad573484bc24cb50", title: "Professional Services", publishedPath: "/solutions/professional-services", draft: false },
  { id: "66e9958285206e17b06fc50e", title: "Run Data-Driven Events", publishedPath: "/solutions/data-driven-events", draft: false },
  { id: "66e99561e48ebc4a38e9d3ef", title: "Maximize Revenue Generation & Profitability", publishedPath: "/solutions/event-revenue-growth", draft: false },
  { id: "66e9953d40a440fd723872a1", title: "Improve Exhibitor and Sponsor ROI", publishedPath: "/solutions/exhibitor-sponsor-roi", draft: false },
  { id: "66e994786b991285d48b518b", title: "Increase Attendee Networking & Engagement", publishedPath: "/solutions/attendee-networking-engagement", draft: false },
  { id: "66e9945275d89bf37186d1ec", title: "Modernize Registration & Onsite Access", publishedPath: "/solutions/registration-and-onsite-access", draft: false },
  { id: "66e7f7664c809e76fa704d87", title: "Home", publishedPath: "/", draft: false },
  { id: "66e1ca28882059be449bbca4", title: "Resource Center", publishedPath: "/resources", draft: false },
  { id: "6686d837f552ff4ddac60102", title: "Swapcard Go Remote Setup Instructions", publishedPath: "/features/swapcard-go/setup-instructions", draft: false },
  { id: "66705b8bd1c415650e2592e1", title: "Event Reporting Guide and Template", publishedPath: "/resources/templates/event-report", draft: false },
  { id: "664dcd7d9e5c6cf6d79e7eb6", title: "On-Demand Webinar", publishedPath: "/on-demand", draft: false },
  { id: "661fcb828406a9fff4c02e53", title: "Search Results", publishedPath: "/search", draft: false },
  { id: "660fc22260e1d0071c2ccfa4", title: "Thank you (on-site)", publishedPath: "/thank-you/dinner", draft: false },
  { id: "65e0bf36c13e85335c5e0822", title: "Gender Equality Index", publishedPath: "/legal/egapro", draft: false },
  { id: "65a5193623fc63adf9b966fd", title: "Appendix B 2023", publishedPath: "/legal/terms-organizer/appendix-b-2023", draft: false },
  { id: "65a50e0a9dc5202983eb32d0", title: "Appendix A 2023", publishedPath: "/legal/terms-organizer/appendix-a-2023", draft: false },
  { id: "659ffcfb8717c121df2d3887", title: "Terms organizer 2023", publishedPath: "/legal/terms-organizer/terms-organizer-2023", draft: false },
  { id: "6565c9546f181e0d0895d377", title: "Submit RFP", publishedPath: "/rfp-form", draft: false },
  { id: "6540efa32e0c8f2a9bb636d2", title: "Swapcard Go", publishedPath: "/features/swapcard-go", draft: false },
  { id: "65082ea7c54363b3f1abbd02", title: "Newsletter", publishedPath: "/resources/newsletter", draft: false },
  { id: "6500364f71520302cc84f4d5", title: "Get Started", publishedPath: "/get-started", draft: false },
  { id: "64d3914e6761bd389818d746", title: "Starter Plan", publishedPath: "/solutions/small-events", draft: false },
  { id: "64d3914e6761bd389818d76b", title: "Thank you (connect-registration)", publishedPath: "/thank-you/connect-registration", draft: false },
  { id: "64d3914e6761bd389818d74a", title: "Swapcard Community - Register", publishedPath: "/swapcard-connect-registration", draft: false },
  { id: "64d3914e6761bd389818d747", title: "Thank you (starter plan)", publishedPath: "/thank-you/starter-plan", draft: false },
  { id: "64d3914e6761bd389818d73e", title: "Product Roadmap", publishedPath: "/product-roadmap", draft: false },
  { id: "64d3914e6761bd389818d749", title: "Swapcard Connect (community)", publishedPath: "/swapcard-connect", draft: false },
  { id: "64d3914e6761bd389818d71a", title: "Media Kit & newsroom", publishedPath: "/resources/media-kit", draft: false },
  { id: "64d3914e6761bd389818d773", title: "Widgets", publishedPath: "/features/widgets", draft: false },
  { id: "64d3914e6761bd389818d73d", title: "(On-Demand) Product Demos", publishedPath: "/product-tours", draft: false },
  { id: "64d3914e6761bd389818d685", title: "Partnerships Template", publishedPath: "/partnerships", draft: false },
  { id: "64d3914e6761bd389818d76c", title: "Thank you (event-registration)", publishedPath: "/thank-you/event-registration", draft: false },
  // Pages de la deuxième requête (offset 100)
  { id: "64d3914e6761bd389818d671", title: "Community builder", publishedPath: "/features/community-builder", draft: false },
  { id: "64d3914e6761bd389818d66f", title: "Careers", publishedPath: "/careers", draft: false },
  { id: "64d3914e6761bd389818d74b", title: "Swapcard Events & Webinars", publishedPath: "/resources/events", draft: false },
  { id: "64d3914e6761bd389818d67c", title: "Success Stories", publishedPath: "/customers", draft: false },
  { id: "64d3914e6761bd389818d76d", title: "Thank you (ngo discount)", publishedPath: "/thank-you/ngo-discount", draft: false },
  { id: "64d3914e6761bd389818d732", title: "Non-profit application", publishedPath: "/solutions/nonprofits/application", draft: false },
  { id: "64d3914e6761bd389818d737", title: "Pricing Plans", publishedPath: "/pricing", draft: false },
  { id: "64d3914e6761bd389818d6ec", title: "Hybrid", publishedPath: "/solutions/hybrid-event-software", draft: false },
  { id: "64d3914e6761bd389818d678", title: "Thank you (download)", publishedPath: "/thank-you/download", draft: false },
  { id: "64d3914e6761bd389818d71b", title: "Thank you (demo)", publishedPath: "/meeting-booked", draft: false },
  { id: "64d3914e6761bd389818d71c", title: "Thank you reschedule", publishedPath: "/meeting-not-booked", draft: false },
  { id: "64d3914e6761bd389818d73c", title: "Privacy policy - 2021", publishedPath: "/legal/privacy-policy-2021", draft: false },
  { id: "64d3914e6761bd389818d73b", title: "Privacy policy - Previous", publishedPath: "/legal/us/privacy-policy", draft: false },
  { id: "64d3914e6761bd389818d765", title: "Terms user - 2021", publishedPath: "/legal/terms-user-2021", draft: false },
  { id: "64d3914e6761bd389818d764", title: "Terms user - 2020", publishedPath: "/legal/us/terms-user", draft: false },
  { id: "64d3914e6761bd389818d67d", title: "Data safety", publishedPath: "/legal/data-safety", draft: false },
  { id: "64d3914e6761bd389818d6f6", title: "Legal Center", publishedPath: "/legal", draft: false },
  { id: "64d3914e6761bd389818d669", title: "Appendix C", publishedPath: "/legal/terms-organizer/appendix-c", draft: false },
  { id: "64d3914e6761bd389818d736", title: "Previous versions", publishedPath: "/legal/previous-versions", draft: false },
  { id: "64d3914e6761bd389818d668", title: "Appendix B", publishedPath: "/legal/terms-organizer/appendix-b", draft: false },
  { id: "64d3914e6761bd389818d667", title: "Appendix A", publishedPath: "/legal/terms-organizer/appendix-a", draft: false },
  { id: "64d3914e6761bd389818d763", title: "Terms organizer", publishedPath: "/legal/terms-organizer", draft: false },
  { id: "64d3914e6761bd389818d68b", title: "Analytics and Data reporting", publishedPath: "/features/event-analytics", draft: false },
  { id: "64d3914e6761bd389818d675", title: "Contact Us", publishedPath: "/contact", draft: false },
  { id: "64d3914e6761bd389818d677", title: "Schedule Live Demo", publishedPath: "/contact-us", draft: false },
  { id: "64d3914e6761bd389818d665", title: "About us", publishedPath: "/about-swapcard", draft: false },
  { id: "64d3914e6761bd389818d742", title: "Security", publishedPath: "/platform/security", draft: false },
  { id: "64d3914e6761bd389818d6f4", title: "Integrations", publishedPath: "/platform/integrations", draft: false },
  { id: "64d3914e6761bd389818d735", title: "Partners", publishedPath: "/partners", draft: false },
  { id: "64d3914e6761bd389818d674", title: "Nonprofits", publishedPath: "/solutions/nonprofits", draft: false },
  { id: "64d3914e6761bd389818d6ce", title: "Features", publishedPath: "/platform/overview", draft: false },
  { id: "64d3914e6761bd389818d68f", title: "Mobile App", publishedPath: "/event-mobile-app", draft: false },
  { id: "64d3914e6761bd389818d66a", title: "Artificial intelligence", publishedPath: "/platform/artificial-intelligence", draft: false },
  { id: "64d3914e6761bd389818d76f", title: "Virtual", publishedPath: "/solutions/virtual-events", draft: false },
  { id: "64d3914e6761bd389818d6f1", title: "In person", publishedPath: "/solutions/in-person-event-software", draft: false },
  { id: "64d3914e6761bd389818d664", title: "404", publishedPath: "/404", draft: false },
  { id: "64d3914e6761bd389818d663", title: "Password", publishedPath: "/401", draft: false },
  { id: "672cd0319cb5cfa43c1f1d3c", title: "Privacy Policy", publishedPath: "/legal/privacy-policy", draft: false },
  { id: "672cb0008e5b4edebd664df9", title: "Terms user", publishedPath: "/legal/terms-user", draft: false },
  { id: "64d3914e6761bd389818d762", title: "Terms organizer", publishedPath: "/legal/terms-organizer", draft: false },
];

// Lire le script actuel pour extraire les IDs
const scriptContent = fs.readFileSync(path.join(__dirname, "generate-all-schemas.js"), "utf-8");
const scriptIds = new Set();
const scriptPaths = new Map();

// Extraire les IDs du script avec regex
const idMatches = scriptContent.matchAll(/id:\s*"([a-f0-9]+)"/g);
for (const match of idMatches) {
  scriptIds.add(match[1]);
}

// Extraire les publishedPath du script
const pathMatches = scriptContent.matchAll(/publishedPath:\s*"([^"]+)"/g);
for (const match of pathMatches) {
  const path = match[1];
  // Trouver l'ID correspondant dans le contexte
  const contextBefore = scriptContent.substring(Math.max(0, match.index - 200), match.index);
  const idMatch = contextBefore.match(/id:\s*"([a-f0-9]+)"/);
  if (idMatch) {
    scriptPaths.set(path, idMatch[1]);
  }
}

console.log("📊 COMPARAISON WEBFLOW vs SCRIPT\n");
console.log(`Total pages Webflow (publiées): ${webflowPages.length}`);
console.log(`Total pages dans le script: ${scriptIds.size}\n`);

// Pages manquantes dans le script
const missingPages = webflowPages.filter(page => !scriptIds.has(page.id) && !scriptPaths.has(page.publishedPath));

console.log(`\n⚠️  PAGES MANQUANTES DANS LE SCRIPT: ${missingPages.length}\n`);

if (missingPages.length > 0) {
  missingPages.forEach((page, index) => {
    console.log(`${index + 1}. "${page.title}"`);
    console.log(`   ID: ${page.id}`);
    console.log(`   Path: ${page.publishedPath}`);
    console.log("");
  });
}

// Pages dans le script mais pas dans Webflow (peut-être supprimées ou renommées)
const scriptOnlyPages = Array.from(scriptIds).filter(id => !webflowPages.some(p => p.id === id));
if (scriptOnlyPages.length > 0) {
  console.log(`\n❓ PAGES DANS LE SCRIPT MAIS PAS DANS WEBFLOW: ${scriptOnlyPages.length}\n`);
  scriptOnlyPages.forEach(id => {
    console.log(`   ID: ${id}`);
  });
}

