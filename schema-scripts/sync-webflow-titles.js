/**
 * Script de synchronisation des titres Webflow
 *
 * Ce script récupère les titres exacts des pages depuis Webflow
 * et met à jour generate-all-schemas.js pour utiliser ces titres.
 *
 * Usage: Ce script doit être exécuté via l'interface MCP Webflow,
 * puis les résultats doivent être copiés dans generate-all-schemas.js
 */

// Mapping des IDs de pages vers les titres Webflow réels
// Ce mapping doit être mis à jour manuellement après avoir récupéré les pages via MCP
const webflowTitles = {
  "66e7f7664c809e76fa704d87": "Home",
  "68e62f6fe945f2613fc768a1": "Networking & Matchmaking Software",
  "68a5a535af9bdaf023a57a61": "Account Admin & Security",
  "689db002711b2ed50f7f5484": "Exhibitors & Sponsors",
  "6874d8491f6116aee4371add": "Attendee Engagement",
  "67e6b83e4d6a7c340e44e2e2": "Event Monetization",
  "67bc912ad5449e905149a5a6": "Registration, Ticketing, Payments",
  "6540efa32e0c8f2a9bb636d2": "Swapcard Go",
  "64d3914e6761bd389818d773": "Widgets",
  "66e99790dc4385c4ad401bc7": "Community",
  "66e99755ed760ab19d1599ef": "Associations",
  "66e995c1b8f5bd103d6f3235": "Trade Show Exhibitions",
  "66e995f2a407c7d071d41e58": "B2B Conferences",
  "66e99631e877433f6a8a35db": "Congress/Medical Conferences",
  "66e9976c4e70ed8150171062": "Media Company",
  "66e994786b991285d48b518b": "Increase Attendee Networking & Engagement",
  "66e9953d40a440fd723872a1": "Improve Exhibitor and Sponsor ROI",
  "66e99561e48ebc4a38e9d3ef": "Maximize Revenue Generation & Profitability",
  "66e9958285206e17b06fc50e": "Run Data-Driven Events",
  "66e9945275d89bf37186d1ec": "Modernize Registration & Onsite Access",
  "66e1ca28882059be449bbca4": "Resource Center",
  "6881fbb53d89795aa8980171": "State of Event Engagement Report- Volume 2",
  "68e38cf84c9b7703e56b774f":
    "Sales & Marketing Team Executive Playbook for Engagement & Revenue",
  "64d3914e6761bd389818d71a": "Media Kit & newsroom",
  "66f17f4840b674b2c9513e3f": "Platform Overview",
  "67375048f0ff43d64b4f5ed2": "⚙️ Integrations Template", // Note: Template CMS, vérifier si besoin
  "64d3914e6761bd389818d742": "Security",
  "672cd0319cb5cfa43c1f1d3c": "Privacy Policy",
  "672cb0008e5b4edebd664df9": "Terms user",
  "64d3914e6761bd389818d763": "Terms organizer",
  "66f2815f414fd64ce7d60b04": "Pricing",
  "66ec1e5ff5409890427adeab": "Blog",
  "64d3914e6761bd389818d675": "Contact Us",
  "64d3914e6761bd389818d677": "Schedule Live Demo",
  "64d3914e6761bd389818d665": "About us",
  "64d3914e6761bd389818d66f": "Careers",
  "64d3914e6761bd389818d68f": "Mobile App",
};

console.log("📋 Mapping des titres Webflow pour synchronisation");
console.log("Copiez ce mapping dans generate-all-schemas.js\n");

Object.entries(webflowTitles).forEach(([id, title]) => {
  console.log(`ID: ${id} → Title: "${title}"`);
});
